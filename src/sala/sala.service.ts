import { Injectable } from '@nestjs/common';
import { GenericFilterableQueryDto } from 'src/common/dto/generic-filterable-query.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { DtoMapper } from 'src/common/mapper/dto-mapper';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateSalaDto } from './dto/create-sala.dto';
import { SalaResponseDto } from './dto/sala-response.dto';
import { SalaResponseWithoutAlocacoesDto } from './dto/sala-response-without-alocacoes.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { salaFullSelect } from './select/sala-full-select';
import { salaWithTipoAndBlocoSelect } from './select/sala-with-tipo-and-bloco-select';

@Injectable()
export class SalaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createSalaDto: CreateSalaDto,
  ): Promise<SalaResponseWithoutAlocacoesDto> {
    const sala = await this.prisma.sala.create({
      data: createSalaDto,
      select: salaWithTipoAndBlocoSelect,
    });
    return DtoMapper.toDto(SalaResponseWithoutAlocacoesDto, sala);
  }

  async findOne(id: number): Promise<SalaResponseDto> {
    const sala = await this.prisma.sala.findUniqueOrThrow({
      where: { id: id },
      select: salaFullSelect,
    });
    return DtoMapper.toDto(SalaResponseDto, sala);
  }

  async findAll(
    queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<SalaResponseWithoutAlocacoesDto>> {
    const { page = 1, limit = 10, contains } = queryDto;

    const skip = (page - 1) * limit;

    const [salas, total] = await this.prisma.$transaction([
      this.prisma.sala.findMany({
        skip,
        take: limit,
        orderBy: { codigo: 'asc' },
        where: contains ? { codigo: { contains } } : undefined,
        select: salaWithTipoAndBlocoSelect,
      }),
      this.prisma.sala.count(),
    ]);

    const salasDtos = DtoMapper.toDtos(SalaResponseWithoutAlocacoesDto, salas);
    return new PaginatedResponseDto(salasDtos, total, limit, page);
  }

  async update(
    id: number,
    updateSalaDto: UpdateSalaDto,
  ): Promise<SalaResponseWithoutAlocacoesDto> {
    const sala = await this.prisma.sala.update({
      where: { id: id },
      data: updateSalaDto,
      select: salaWithTipoAndBlocoSelect,
    });
    return DtoMapper.toDto(SalaResponseWithoutAlocacoesDto, sala);
  }

  async remove(id: number): Promise<void> {
    await this.prisma.sala.delete({ where: { id: id } });
  }
}
