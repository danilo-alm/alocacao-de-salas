import { Injectable } from '@nestjs/common';
import { DtoMapper } from 'src/common/dto/dto-mapper';
import { EntityDoesNotExistException } from 'src/common/exceptions/entity-does-not-exist-exception';
import { EntityExistsException } from 'src/common/exceptions/entity-exists-exception';
import { EntityHasDependantsException } from 'src/common/exceptions/entity-has-dependants-exception.ts';

import { Bloco, Prisma, PrismaClient } from '../generated/prisma/client';
import { CreateSalaDto } from './dto/create-sala.dto';
import { SalaResponseDto } from './dto/sala-response.dto';
import { SalaWithAlocacoesResponseDto } from './dto/sala-with-alocacoes-response.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<SalaResponseDto[]> {
    const result = await this.prisma.sala.findMany({
      include: {
        Tipo: true,
        Bloco: true,
      },
    });
    return DtoMapper.toDtos(SalaResponseDto, result);
  }

  async findOne(id: number): Promise<SalaWithAlocacoesResponseDto> {
    const result = await this.prisma.sala.findUnique({
      where: { Id: id },
      include: {
        Tipo: true,
        Bloco: true,
        Alocacoes: true,
      },
    });

    // AlocacaoService.create() *depends* on this exception being thrown...
    // Be aware if changing
    if (!result) {
      throw new EntityDoesNotExistException('Sala não encontrada');
    }

    return DtoMapper.toDto(SalaWithAlocacoesResponseDto, result);
  }

  async create(createSalaDto: CreateSalaDto): Promise<SalaResponseDto> {
    try {
      const result = await this.prisma.sala.create({
        data: createSalaDto,
      });
      return DtoMapper.toDto(SalaResponseDto, result);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new EntityExistsException('Já existe uma sala com este código');
      }
      throw error;
    }
  }

  async update(
    id: number,
    updateSalaDto: UpdateSalaDto,
  ): Promise<SalaResponseDto> {
    let result: Bloco;
    try {
      result = await this.prisma.bloco.update({
        where: { Id: id },
        data: updateSalaDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new EntityExistsException('Já existe uma sala com este código');
      }
      throw error;
    }

    if (!result) {
      throw new EntityDoesNotExistException('Sala não encontrada');
    }

    return DtoMapper.toDto(SalaResponseDto, result);
  }

  async remove(id: number): Promise<SalaResponseDto> {
    try {
      const result = await this.prisma.sala.delete({
        where: { Id: id },
      });
      return DtoMapper.toDto(SalaResponseDto, result);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new EntityDoesNotExistException('Sala não encontrada');
          case 'P2014':
            throw new EntityHasDependantsException(
              'Não é possível deletar uma sala que possui alocações associadas',
            );
        }
      }
      throw error;
    }
  }
}
