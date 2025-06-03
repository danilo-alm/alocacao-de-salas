import { Injectable } from '@nestjs/common';
import { DtoMapper } from 'src/common/dto/dto-mapper';
import { EntityDoesNotExistException } from 'src/common/exceptions/entity-does-not-exist-exception';
import { EntityExistsException } from 'src/common/exceptions/entity-exists-exception';
import { EntityHasDependantsException } from 'src/common/exceptions/entity-has-dependants-exception.ts';
import { Bloco, Prisma, PrismaClient } from 'src/generated/prisma/client';

import { CreateTipoSalaDto } from './dto/create-tipo-sala.dto';
import { TipoSalaResponseDto } from './dto/tipo-sala-response.dto';
import { TipoSalaWithSalasResponseDto } from './dto/tipo-sala-with-salas-response.dto';
import { UpdateTipoSalaDto } from './dto/update-tipo-sala.dto';

@Injectable()
export class TipoSalaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<TipoSalaResponseDto[]> {
    const result = await this.prisma.tipoSala.findMany();
    return DtoMapper.toDtos(TipoSalaResponseDto, result);
  }

  async findByNameContains(search: string): Promise<TipoSalaResponseDto[]> {
    const result = await this.prisma.tipoSala.findMany({
      where: {
        Nome: {
          contains: search,
          // mode: 'insensitive',  // not required with mysql
        },
      },
    });

    return DtoMapper.toDtos(TipoSalaResponseDto, result);
  }

  async findOne(id: number): Promise<TipoSalaWithSalasResponseDto> {
    const result = await this.prisma.tipoSala.findUnique({
      where: { Id: id },
      include: { Salas: true },
    });

    if (!result) {
      throw new EntityDoesNotExistException('Tipo de sala não encontrado');
    }

    return DtoMapper.toDto(TipoSalaWithSalasResponseDto, result);
  }

  async create(
    createTipoSalaDto: CreateTipoSalaDto,
  ): Promise<TipoSalaResponseDto> {
    try {
      const result = await this.prisma.tipoSala.create({
        data: createTipoSalaDto,
      });
      return DtoMapper.toDto(TipoSalaResponseDto, result);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new EntityExistsException(
          'Já existe um tipo de sala com este nome',
        );
      }
      throw error;
    }
  }

  async update(
    id: number,
    updateTipoSalaDto: UpdateTipoSalaDto,
  ): Promise<TipoSalaResponseDto> {
    let result: Bloco;
    try {
      result = await this.prisma.tipoSala.update({
        where: { Id: id },
        data: updateTipoSalaDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new EntityExistsException(
          'Já existe um tipo de sala com este nome',
        );
      }
      throw error;
    }

    if (!result) {
      throw new EntityDoesNotExistException('Tipo de sala não encontrado');
    }

    return DtoMapper.toDto(TipoSalaResponseDto, result);
  }

  async remove(id: number): Promise<TipoSalaResponseDto> {
    try {
      const result = await this.prisma.tipoSala.delete({
        where: { Id: id },
      });
      return DtoMapper.toDto(TipoSalaResponseDto, result);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new EntityDoesNotExistException(
              'Tipo de sala não encontrado',
            );
          case 'P2014':
            throw new EntityHasDependantsException(
              'Não é possível deletar um tipo de sala que possui salas associadas',
            );
        }
      }
      throw error;
    }
  }
}
