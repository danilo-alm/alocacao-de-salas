import { Injectable } from '@nestjs/common';
import { GenericFilterableQueryDto } from 'src/common/dto/generic-filterable-query.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { DtoMapper } from 'src/common/mapper/dto-mapper';
import { disciplinaBaseSelect } from 'src/disciplina/select/disciplina-base-select';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { DisciplinaResponseDto } from './dto/disciplina-response.dto';
import { DisciplinaResponseWithoutAlocacoesDto } from './dto/disciplina-response-without-alocacoes.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Injectable()
export class DisciplinaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createDisciplinaDto: CreateDisciplinaDto,
  ): Promise<DisciplinaResponseWithoutAlocacoesDto> {
    const disciplina = await this.prisma.disciplina.create({
      data: createDisciplinaDto,
    });
    return DtoMapper.toDto(DisciplinaResponseWithoutAlocacoesDto, disciplina);
  }

  async findOne(id: number): Promise<DisciplinaResponseDto> {
    const disciplina = await this.prisma.disciplina.findUniqueOrThrow({
      where: { id: id },
      select: disciplinaBaseSelect,
    });
    return DtoMapper.toDto(DisciplinaResponseDto, disciplina);
  }

  async findAll(
    queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<DisciplinaResponseWithoutAlocacoesDto>> {
    const { page = 1, limit = 10, contains } = queryDto;

    const skip = (page - 1) * limit;

    const [disciplinas, total] = await this.prisma.$transaction([
      this.prisma.disciplina.findMany({
        skip,
        take: limit,
        orderBy: { nome: 'asc' },
        where: contains ? { nome: { contains } } : undefined,
      }),
      this.prisma.disciplina.count(),
    ]);

    const disciplinasDtos = DtoMapper.toDtos(
      DisciplinaResponseWithoutAlocacoesDto,
      disciplinas,
    );
    return new PaginatedResponseDto(disciplinasDtos, total, limit, page);
  }

  async update(
    id: number,
    updateDisciplinaDto: UpdateDisciplinaDto,
  ): Promise<DisciplinaResponseWithoutAlocacoesDto> {
    const disciplina = await this.prisma.disciplina.update({
      where: { id: id },
      data: updateDisciplinaDto,
    });
    return DtoMapper.toDto(DisciplinaResponseWithoutAlocacoesDto, disciplina);
  }

  async remove(id: number): Promise<void> {
    await this.prisma.disciplina.delete({ where: { id: id } });
  }
}
