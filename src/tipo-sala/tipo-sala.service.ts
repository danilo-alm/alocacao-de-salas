import { Injectable } from '@nestjs/common';
import { GenericFilterableQueryDto } from 'src/common/dto/generic-filterable-query.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { DtoMapper } from 'src/common/mapper/dto-mapper';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateTipoSalaDto } from './dto/create-tipo-sala.dto';
import { TipoSalaResponseDto } from './dto/tipo-sala-response.dto';
import { TipoSalaResponseWithoutSalasDto } from './dto/tipo-sala-response-without-salas.dto';
import { UpdateTipoSalaDto } from './dto/update-tipo-sala.dto';
import { tipoSalaFullSelect } from './select/tipo-sala-full-select';

@Injectable()
export class TipoSalaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createTipoSalaDto: CreateTipoSalaDto,
  ): Promise<TipoSalaResponseWithoutSalasDto> {
    const tipoSala = await this.prisma.tipo_sala.create({
      data: createTipoSalaDto,
    });
    return DtoMapper.toDto(TipoSalaResponseWithoutSalasDto, tipoSala);
  }

  async findOne(id: number): Promise<TipoSalaResponseDto> {
    const tipoSala = await this.prisma.tipo_sala.findUniqueOrThrow({
      where: { id: id },
      select: tipoSalaFullSelect,
    });
    return DtoMapper.toDto(TipoSalaResponseDto, tipoSala);
  }

  async findAll(
    queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<TipoSalaResponseWithoutSalasDto>> {
    const { page = 1, limit = 10, contains } = queryDto;

    const skip = (page - 1) * limit;

    const [tipoSalas, total] = await this.prisma.$transaction([
      this.prisma.tipo_sala.findMany({
        skip,
        take: limit,
        orderBy: { nome: 'asc' },
        where: contains ? { nome: { contains } } : undefined,
      }),
      this.prisma.tipo_sala.count(),
    ]);

    const tipoSalasDtos = DtoMapper.toDtos(
      TipoSalaResponseWithoutSalasDto,
      tipoSalas,
    );
    return new PaginatedResponseDto(tipoSalasDtos, total, limit, page);
  }

  async update(
    id: number,
    updateTipoSalaDto: UpdateTipoSalaDto,
  ): Promise<TipoSalaResponseWithoutSalasDto> {
    const tipoSala = await this.prisma.tipo_sala.update({
      where: { id: id },
      data: updateTipoSalaDto,
    });
    return DtoMapper.toDto(TipoSalaResponseWithoutSalasDto, tipoSala);
  }

  async remove(id: number): Promise<void> {
    await this.prisma.tipo_sala.delete({ where: { id: id } });
  }
}
