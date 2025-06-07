import { Injectable } from '@nestjs/common';
import { DtoMapper } from 'src/common/dto/dto-mapper';
import { EntityDoesNotExistException } from 'src/common/exceptions/entity-does-not-exist-exception';

import { Prisma, PrismaClient } from '../generated/prisma/client';
import { SalaService } from '../sala/sala.service';
import { AlocacaoResponseDto } from './dto/alocacao-response.dto';
import { AlocacaoScheduleDetails } from './dto/alocacao-schedule-details';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';
import { BookingConflictException } from './exceptions/booking-conflict-exception';
import { InvalidBookingException } from './exceptions/invalid-booking-exception';

const ALOCACAO_WITH_SALA_DETAILS_INCLUDE: Prisma.AlocacaoInclude = {
  Sala: {
    include: {
      Tipo: true,
      Bloco: true,
    },
  },
};

@Injectable()
export class AlocacaoService {
  constructor(
    private readonly salaService: SalaService,
    private readonly prisma: PrismaClient,
  ) {}

  async findAll(): Promise<AlocacaoResponseDto[]> {
    const result = await this.prisma.alocacao.findMany({
      where: {
        DeletedAt: null,
      },
      include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
    });

    return DtoMapper.toDtos(AlocacaoResponseDto, result);
  }

  async findOne(id: number): Promise<AlocacaoResponseDto> {
    const result = await this.prisma.alocacao.findFirst({
      where: {
        Id: id,
        DeletedAt: null,
      },
      include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
    });

    if (!result) {
      throw new EntityDoesNotExistException('Alocação não encontrada');
    }

    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  async create(
    createAlocacaoDto: CreateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    // The following methods throw an error on any problem
    this.validateAndPopulateAlocacaoRequest(createAlocacaoDto);
    await this.salaService.findOne(createAlocacaoDto.SalaId);
    await this.checkConflicts(createAlocacaoDto);

    const result = await this.prisma.alocacao.create({
      data: createAlocacaoDto,
      include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
    });

    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  async update(
    id: number,
    data: UpdateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    const current = await this.prisma.alocacao.findFirst({
      where: {
        Id: id,
        DeletedAt: null,
      },
    });

    if (!current) {
      throw new EntityDoesNotExistException('Alocação não encontrada');
    }

    const newSalaId = data.SalaId;
    if (newSalaId && newSalaId !== current.SalaId) {
      await this.salaService.findOne(newSalaId);
    }

    const scheduleDetails: AlocacaoScheduleDetails = {
      Data: data.Data ?? current.Data ?? undefined,
      DiaDaSemana: data.DiaDaSemana ?? current.DiaDaSemana ?? undefined,
      HoraInicio: data.HoraInicio ?? current.HoraInicio,
      HoraFim: data.HoraFim ?? current.HoraFim,
      SalaId: data.SalaId ?? current.SalaId,
    };

    if (this.hasNullOrUndefinedValue(scheduleDetails)) {
      throw new InvalidBookingException(
        'scheduleDetails contém campos nulos/indefinidos. Entre em contato com o administrador do servidor.',
      );
    }

    const result = await this.prisma.$transaction(async (tx) => {
      await this.checkConflicts(scheduleDetails, current.Id);

      return await tx.alocacao.update({
        where: { Id: id },
        data: scheduleDetails,
        include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
      });
    });

    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  async remove(id: number): Promise<AlocacaoResponseDto> {
    const result = await this.prisma.alocacao.update({
      where: { Id: id },
      data: {
        DeletedAt: new Date(),
      },
      include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
    });
    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  private validateAndPopulateAlocacaoRequest(dto: CreateAlocacaoDto) {
    const { DiaDaSemana, Data } = dto;

    if (DiaDaSemana == null && !Data) {
      throw new InvalidBookingException(
        'DiaDaSemana ou Data devem ser especificados',
      );
    }

    if (Data) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const allocationDate = new Date(Data);
      allocationDate.setHours(0, 0, 0, 0);

      dto.DiaDaSemana = allocationDate.getDay();

      if (allocationDate < today) {
        throw new InvalidBookingException(
          'Não é possível criar uma alocação em uma data passada.',
        );
      }
    }
  }

  private async checkConflicts(
    data: AlocacaoScheduleDetails,
    idToExclude?: number,
  ): Promise<void> {
    const timeOverlapFilter: Prisma.AlocacaoWhereInput = {
      HoraInicio: { lt: data.HoraFim },
      HoraFim: { gt: data.HoraInicio },
    };

    const orClauses: Prisma.AlocacaoWhereInput[] = [];

    if (data.Data) {
      // Case 1: The new allocation is for a Fixed-Date.

      // Scenario 1.1: Conflicts with an existing Fixed-Date allocation on the exact same date
      orClauses.push({
        AND: [{ Data: data.Data }, timeOverlapFilter],
      });

      // Scenario 1.2: Conflicts with an existing Recurring allocation on the same day of the week
      orClauses.push({
        AND: [
          { Data: null },
          { DiaDaSemana: data.DiaDaSemana },
          timeOverlapFilter,
        ],
      });
    } else {
      // Case 2: The new allocation is Recurring (createAlocacaoDto.Data is null).

      // Scenario 2.1: Conflicts with an existing Fixed-Date allocation.
      orClauses.push({
        AND: [
          { Data: { not: null } },
          { DiaDaSemana: data.DiaDaSemana },
          timeOverlapFilter,
        ],
      });

      // Scenario 2.2: Conflicts with an existing Recurring allocation on the same day of the week.
      orClauses.push({
        AND: [
          { Data: null },
          { DiaDaSemana: data.DiaDaSemana },
          timeOverlapFilter,
        ],
      });
    }

    const whereQuery: Prisma.AlocacaoWhereInput = {
      SalaId: data.SalaId,
      DeletedAt: null,
    };

    if (idToExclude) {
      whereQuery.NOT = { Id: idToExclude };
    }

    whereQuery.OR = orClauses;

    const result = await this.prisma.alocacao.findFirst({
      where: whereQuery,
    });

    if (result) {
      throw new BookingConflictException(
        `Houve um conflito de horários com o booking de ID ${result.Id}.`,
      );
    }
  }

  private hasNullOrUndefinedValue(obj: Record<string, any>): boolean {
    return Object.values(obj).some(
      (value) => value === null || value === undefined,
    );
  }
}
