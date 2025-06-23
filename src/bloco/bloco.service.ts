import { Injectable } from '@nestjs/common';
import { GenericFilterableQueryDto } from 'src/common/dto/generic-filterable-query.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { DtoMapper } from 'src/common/mapper/dto-mapper';
import { PrismaService } from 'src/prisma/prisma.service';

import { BlocoResponseDto } from './dto/bloco-response.dto';
import { BlocoResponseWithoutSalasDto } from './dto/bloco-response-without-salas.dto';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';
import { blocoFullSelect } from './select/bloco-full-select';

@Injectable()
export class BlocoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createBlocoDto: CreateBlocoDto,
  ): Promise<BlocoResponseWithoutSalasDto> {
    const bloco = await this.prisma.bloco.create({ data: createBlocoDto });
    return DtoMapper.toDto(BlocoResponseWithoutSalasDto, bloco);
  }

  async findAll(
    queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<BlocoResponseWithoutSalasDto>> {
    const { page = 1, limit = 10, contains } = queryDto;

    const skip = (page - 1) * limit;

    const [blocos, total] = await this.prisma.$transaction([
      this.prisma.bloco.findMany({
        skip,
        take: limit,
        orderBy: { nome: 'asc' },
        where: contains ? { nome: { contains } } : undefined,
      }),
      this.prisma.bloco.count(),
    ]);

    const blocosDtos = DtoMapper.toDtos(BlocoResponseWithoutSalasDto, blocos);
    return new PaginatedResponseDto(blocosDtos, total, limit, page);
  }

  async findOne(id: number): Promise<BlocoResponseDto> {
    const bloco = await this.prisma.bloco.findUniqueOrThrow({
      where: { id: id },
      select: blocoFullSelect,
    });
    return DtoMapper.toDto(BlocoResponseDto, bloco);
  }

  async update(
    id: number,
    UpdateBlocoDto: UpdateBlocoDto,
  ): Promise<BlocoResponseWithoutSalasDto> {
    const updatedBloco = await this.prisma.bloco.update({
      where: { id: id },
      data: UpdateBlocoDto,
    });
    return DtoMapper.toDto(BlocoResponseWithoutSalasDto, updatedBloco);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.bloco.delete({ where: { id: id } });
  }
}
