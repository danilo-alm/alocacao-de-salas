import { Injectable } from '@nestjs/common';
import { DtoMapper } from 'src/common/dto/dto-mapper';
import { EntityDoesNotExistException } from 'src/common/exceptions/entity-does-not-exist-exception';
import { EntityExistsException } from 'src/common/exceptions/entity-exists-exception';
import { EntityHasDependantsException } from 'src/common/exceptions/entity-has-dependants-exception.ts';
import { Bloco, Prisma, PrismaClient } from 'src/generated/prisma/client';

import { BlocoResponseDto } from './dto/bloco-response.dto';
import { BlocoResponseWithSalasDto } from './dto/bloco-response-with-salas.dto';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';

@Injectable()
export class BlocoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createBlocoDto: CreateBlocoDto): Promise<BlocoResponseDto> {
    try {
      const result = await this.prisma.bloco.create({
        data: createBlocoDto,
      });
      return DtoMapper.toDto(BlocoResponseDto, result);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new EntityExistsException('Já existe um bloco com este nome');
      }
      throw error;
    }
  }

  async findAll(): Promise<BlocoResponseDto[]> {
    const result = await this.prisma.bloco.findMany();
    return DtoMapper.toDtos(BlocoResponseDto, result);
  }

  async findOne(id: number): Promise<BlocoResponseWithSalasDto> {
    const result = await this.prisma.bloco.findUnique({
      where: { Id: id },
      include: { Salas: true },
    });

    if (!result) {
      throw new EntityDoesNotExistException('Bloco não encontrado');
    }

    return DtoMapper.toDto(BlocoResponseWithSalasDto, result);
  }

  async findByNameContains(search: string): Promise<BlocoResponseDto[]> {
    const result = await this.prisma.bloco.findMany({
      where: {
        Nome: {
          contains: search,
          // mode: 'insensitive',  // not required with mysql
        },
      },
    });

    return DtoMapper.toDtos(BlocoResponseDto, result);
  }

  async update(
    id: number,
    updateBlocoDto: UpdateBlocoDto,
  ): Promise<BlocoResponseDto> {
    let result: Bloco;
    try {
      result = await this.prisma.bloco.update({
        where: { Id: id },
        data: updateBlocoDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new EntityExistsException('Já existe um bloco com este nome');
      }
      throw error;
    }

    if (!result) {
      throw new EntityDoesNotExistException('Bloco não encontrado');
    }

    return DtoMapper.toDto(BlocoResponseDto, result);
  }

  async remove(id: number): Promise<BlocoResponseDto> {
    try {
      const result = await this.prisma.bloco.delete({
        where: { Id: id },
      });
      return DtoMapper.toDto(BlocoResponseDto, result);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new EntityDoesNotExistException('Bloco não encontrado');
          case 'P2014':
            throw new EntityHasDependantsException(
              'Não é possível deletar um bloco que possui salas associadas',
            );
        }
      }
      throw error;
    }
  }
}
