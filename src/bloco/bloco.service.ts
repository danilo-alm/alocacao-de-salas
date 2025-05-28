import { Injectable } from '@nestjs/common';
import { plainToClass } from '@nestjs/class-transformer';
import { Prisma, PrismaClient, Bloco } from '../generated/prisma/client';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';
import { BlocoJaExisteException } from './exception/bloco-ja-existe-exception';
import { BlocoNaoExisteException } from './exception/bloco-nao-existe-exception';
import { BlocoPossuiSalasException } from './exception/bloco-possui-salas-exception';
import { BlocoResponseDto } from './dto/bloco-response.dto';
import { BlocoResponseWithSalasDto } from './dto/bloco-response-with-salas.dto';

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
      return this.toDto(result);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BlocoJaExisteException();
      }
      throw error;
    }
  }

  async findAll(): Promise<BlocoResponseDto[]> {
    const result = await this.prisma.bloco.findMany();
    return this.toDto(result);
  }

  async findOne(id: number): Promise<BlocoResponseWithSalasDto> {
    const result = await this.prisma.bloco.findUnique({
      where: { Id: id },
    });

    if (!result) {
      throw new BlocoNaoExisteException();
    }

    return this.toDtoWithSalas(result);
  }

  async findByName(match: string): Promise<BlocoResponseDto[]> {
    const result = await this.prisma.bloco.findMany({
      where: {
        Nome: {
          contains: match,
          // mode: 'insensitive',  // not required with mysql
        },
      },
    });

    return this.toDto(result);
  }

  async update(
    id: number,
    updateBlocoDto: UpdateBlocoDto,
  ): Promise<BlocoResponseDto> {
    const result = await this.prisma.bloco.update({
      where: { Id: id },
      data: updateBlocoDto,
    });

    if (!result) {
      throw new BlocoNaoExisteException();
    }

    return this.toDto(result);
  }

  async remove(id: number): Promise<BlocoResponseDto> {
    try {
      const result = await this.prisma.bloco.delete({
        where: { Id: id },
      });
      return this.toDto(result);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new BlocoNaoExisteException();
          case 'P2014':
            throw new BlocoPossuiSalasException();
        }
      }
      throw error;
    }
  }

  private toDto(data: Bloco): BlocoResponseDto;
  private toDto(data: Bloco[]): BlocoResponseDto[];
  private toDto(data: Bloco | Bloco[]): BlocoResponseDto | BlocoResponseDto[] {
    return plainToClass(BlocoResponseDto, data, {
      excludeExtraneousValues: true,
    });
  }

  private toDtoWithSalas(data: Bloco): BlocoResponseWithSalasDto {
    return plainToClass(BlocoResponseWithSalasDto, data, {
      excludeExtraneousValues: true,
    });
  }
}
