import { Injectable } from '@nestjs/common';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { ValidationException } from 'src/common/exception/validation.exception';
import { DtoMapper } from 'src/common/mapper/dto-mapper';
import { PrismaService } from 'src/prisma/prisma.service';

import { Prisma } from '../generated/prisma/client';
import { SalaService } from '../sala/sala.service';
import { AlocacaoResponseDto } from './dto/alocacao-response.dto';
import { AlocacaoResponseWithSalaBaseDto } from './dto/alocacao-response-with-sala-base.dto';
import { AlocacaoScheduleDetails } from './dto/alocacao-schedule-details';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';
import { BookingConflictException } from './exceptions/booking-conflict-exception';
import { InvalidBookingException } from './exceptions/invalid-booking-exception';
import { alocacaoFullSelect } from './select/alocacao-full-select';
import { AlocacaoWithSalaBaseSelect } from './select/alocacao-with-sala-base-select';

@Injectable()
export class AlocacaoService {
  constructor(
    private readonly salaService: SalaService,
    private readonly prisma: PrismaService,
  ) {}

  async create(
    createAlocacaoDto: CreateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    this.validateAndPopulateAlocacaoRequest(createAlocacaoDto);

    if (createAlocacaoDto.dia_da_semana == null) {
      console.error(
        'Falha na validação: O campo obrigatório dia_da_semana não foi definido:',
        createAlocacaoDto,
      );
      throw new ValidationException(
        'Erro interno de validação. Por favor, contate o suporte',
      );
    }

    await this.checkConflicts(createAlocacaoDto as AlocacaoScheduleDetails);

    const alocacao = await this.prisma.alocacao.create({
      data: {
        ...createAlocacaoDto,
        dia_da_semana: createAlocacaoDto.dia_da_semana,
      },
      // FIXME: information about the sala and disciplina are not being fetched for some reason?
      select: alocacaoFullSelect,
    });
    return DtoMapper.toDto(AlocacaoResponseDto, alocacao);
  }

  async findOne(id: number): Promise<AlocacaoResponseDto> {
    const result = await this.prisma.alocacao.findFirstOrThrow({
      where: { id: id, deleted_at: null },
      select: alocacaoFullSelect,
    });
    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  async findAll(
    queryDto: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<AlocacaoResponseWithSalaBaseDto>> {
    // TODO: A special query DTO for alocacoes. filtering needs to implemented!!
    const { page = 1, limit = 10 } = queryDto;

    const skip = (page - 1) * limit;

    const [alocacoes, total] = await this.prisma.$transaction([
      this.prisma.alocacao.findMany({
        skip,
        take: limit,
        where: { deleted_at: null },
        select: AlocacaoWithSalaBaseSelect,
      }),
      this.prisma.alocacao.count({ where: { deleted_at: null } }),
    ]);

    const alocacoesDtos = DtoMapper.toDtos(
      AlocacaoResponseWithSalaBaseDto,
      alocacoes,
    );
    return new PaginatedResponseDto(alocacoesDtos, total, limit, page);
  }

  async update(
    id: number,
    updateDto: UpdateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    const current = await this.prisma.alocacao.findFirstOrThrow({
      where: { id: id, deleted_at: null },
    });

    const newSalaId = updateDto.sala_id;
    if (newSalaId && newSalaId !== current?.sala_id) {
      await this.salaService.findOne(newSalaId);
    }

    const mergedScheduleDetails: AlocacaoScheduleDetails = {
      ...current,
      ...updateDto,
    };

    const result = await this.prisma.$transaction(async (tx) => {
      await this.checkConflicts(mergedScheduleDetails, current.id);

      return await tx.alocacao.update({
        where: { id: id },
        data: mergedScheduleDetails,
        select: alocacaoFullSelect,
      });
    });

    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  async remove(id: number): Promise<AlocacaoResponseDto> {
    const result = await this.prisma.alocacao.update({
      where: { id: id },
      data: { deleted_at: new Date() },
      select: alocacaoFullSelect,
    });
    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  private validateAndPopulateAlocacaoRequest(dto: CreateAlocacaoDto) {
    const { dia_da_semana, data } = dto;

    const hasDiaDaSemana = dia_da_semana != null;
    if ((hasDiaDaSemana && data) || (!hasDiaDaSemana && !data)) {
      throw new InvalidBookingException(
        'Apenas um entre dia_da_semana e data deve ser especificado',
      );
    }

    // Should be caught by class-transformer validation. Just a safeguard
    if (hasDiaDaSemana && (dia_da_semana < 0 || dia_da_semana > 6)) {
      throw new InvalidBookingException('Dia da semana deve estar entre 0 e 6');
    }

    if (!hasDiaDaSemana && data) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const allocationDate = new Date(data);
      allocationDate.setHours(0, 0, 0, 0);

      dto.dia_da_semana = allocationDate.getDay();

      if (allocationDate < today) {
        throw new InvalidBookingException(
          'Não é possível criar uma alocação em uma data passada.',
        );
      }
    }
  }

  private async checkConflicts(
    details: AlocacaoScheduleDetails,
    idToExclude?: number,
  ): Promise<void> {
    const timeOverlapFilter: Prisma.alocacaoWhereInput = {
      hora_inicio: { lt: details.hora_fim },
      hora_fim: { gt: details.hora_inicio },
    };

    const orClauses: Prisma.alocacaoWhereInput[] = [];

    if (details.data) {
      // Case 1: The new allocation is for a Fixed-Date.

      // Scenario 1.1: Conflicts with an existing Fixed-Date allocation on the exact same date
      orClauses.push({
        AND: [{ data: details.data }, timeOverlapFilter],
      });

      // Scenario 1.2: Conflicts with an existing Recurring allocation on the same day of the week
      orClauses.push({
        AND: [
          { data: null },
          { dia_da_semana: details.dia_da_semana },
          timeOverlapFilter,
        ],
      });
    } else {
      // Case 2: The new allocation is Recurring (createAlocacaoDto.data is null).

      // Scenario 2.1: Conflicts with an existing Fixed-Date allocation.
      orClauses.push({
        AND: [
          { data: { not: null } },
          { dia_da_semana: details.dia_da_semana },
          timeOverlapFilter,
        ],
      });

      // Scenario 2.2: Conflicts with an existing Recurring allocation on the same day of the week.
      orClauses.push({
        AND: [
          { data: null },
          { dia_da_semana: details.dia_da_semana },
          timeOverlapFilter,
        ],
      });
    }

    const whereQuery: Prisma.alocacaoWhereInput = {
      sala_id: details.sala_id,
      deleted_at: null,
    };

    if (idToExclude) {
      whereQuery.NOT = { id: idToExclude };
    }

    whereQuery.OR = orClauses;

    const result = await this.prisma.alocacao.findFirst({
      where: whereQuery,
    });

    if (result) {
      throw new BookingConflictException(
        `Houve um conflito de horários com o booking de ID ${result.id}.`,
      );
    }
  }
}
