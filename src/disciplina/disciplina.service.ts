import { Injectable } from '@nestjs/common';
import { DtoMapper } from 'src/common/dto/dto-mapper';
import { EntityDoesNotExistException } from 'src/common/exceptions/entity-does-not-exist-exception';
import { EntityExistsException } from 'src/common/exceptions/entity-exists-exception';
import { EntityHasDependantsException } from 'src/common/exceptions/entity-has-dependants-exception.ts';
import { Bloco, Prisma, PrismaClient } from 'src/generated/prisma/client';

import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { DisciplinaResponseDto } from './dto/disciplina-response.dto';
import { DisciplinaWithAlocacoesResponseDto } from './dto/disciplina-with-alocacoes-response.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Injectable()
export class DisciplinaService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<DisciplinaResponseDto[]> {
    const result = await this.prisma.disciplina.findMany();
    return DtoMapper.toDtos(DisciplinaResponseDto, result);
  }

  async findByNameContains(search: string): Promise<DisciplinaResponseDto[]> {
    const result = await this.prisma.disciplina.findMany({
      where: {
        Nome: {
          contains: search,
        },
      },
    });

    return DtoMapper.toDtos(DisciplinaResponseDto, result);
  }

  async findOne(id: number): Promise<DisciplinaWithAlocacoesResponseDto> {
    const result = await this.prisma.disciplina.findUnique({
      where: { Id: id },
      include: { Alocacoes: true },
    });

    if (!result) {
      throw new EntityDoesNotExistException('Disciplina não encontrada');
    }

    return DtoMapper.toDto(DisciplinaWithAlocacoesResponseDto, result);
  }

  async create(
    createDisciplinaDto: CreateDisciplinaDto,
  ): Promise<DisciplinaResponseDto> {
    try {
      const result = await this.prisma.disciplina.create({
        data: createDisciplinaDto,
      });
      return DtoMapper.toDto(DisciplinaResponseDto, result);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new EntityExistsException(
          'Já existe uma disciplina com este nome',
        );
      }
      throw error;
    }
  }

  async update(
    id: number,
    updateDisciplinaDto: UpdateDisciplinaDto,
  ): Promise<DisciplinaResponseDto> {
    let result: Bloco;
    try {
      result = await this.prisma.disciplina.update({
        where: { Id: id },
        data: updateDisciplinaDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new EntityExistsException(
          'Já existe uma disciplina com este nome',
        );
      }
      throw error;
    }

    if (!result) {
      throw new EntityDoesNotExistException('Disciplina não encontrada');
    }

    return DtoMapper.toDto(DisciplinaResponseDto, result);
  }

  async remove(id: number): Promise<DisciplinaResponseDto> {
    try {
      const result = await this.prisma.disciplina.delete({
        where: { Id: id },
      });
      return DtoMapper.toDto(DisciplinaResponseDto, result);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new EntityDoesNotExistException('Disciplina não encontrada');
          case 'P2014':
            throw new EntityHasDependantsException(
              'Não é possível deletar uma disciplina que possui alocações associadas',
            );
        }
      }
      throw error;
    }
  }
}
