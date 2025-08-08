import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

import { AlocacaoScheduleDetails } from '../dto/alocacao-schedule-details';
import { BookingConflictException } from '../exceptions/booking-conflict-exception';

@Injectable()
export class AlocacaoConflictChecker {
  constructor(private readonly prisma: PrismaService) {}

  public async throwIfConflictingAlocacoesExist(
    alocacao: AlocacaoScheduleDetails,
  ): Promise<void> {
    const conflictingAlocacoes =
      await this.findConflictingAlocacoesFor(alocacao);
    
    const conflictingAlocacoesExist = conflictingAlocacoes.length > 0;
    if (conflictingAlocacoesExist) {
      throw new BookingConflictException(
        `A alocação conflita com as alocações existentes: ${conflictingAlocacoes.join(', ')}`,
      );
    }
  }

  public async findConflictingAlocacoesFor(
    alocacao: AlocacaoScheduleDetails,
  ): Promise<number[]> {
    const whereQuery = this.buildWhereQueryFor(alocacao);
    return await this.getConflicts(whereQuery);
  }

  private buildWhereQueryFor(
    alocacao: AlocacaoScheduleDetails,
  ): Prisma.alocacaoWhereInput {
    const timeOverlapFilter = this.buildTimeOverlapFilterFor(alocacao);
    const conflictClauses = this.buildConflictClausesFor(
      alocacao,
      timeOverlapFilter,
    );
    return this.buildFinalWhereQuery(alocacao, conflictClauses);
  }

  private buildTimeOverlapFilterFor(
    alocacao: AlocacaoScheduleDetails,
  ): Prisma.alocacaoWhereInput {
    return {
      hora_inicio: { lt: alocacao.hora_fim },
      hora_fim: { gt: alocacao.hora_inicio },
    };
  }

  private buildConflictClausesFor(
    alocacao: AlocacaoScheduleDetails,
    timeOverlapFilter: Prisma.alocacaoWhereInput,
  ): Prisma.alocacaoWhereInput[] {
    return this.isRecurringAlocacao(alocacao)
      ? this.buildConflictClausesForRecurringAlocacao(
          alocacao,
          timeOverlapFilter,
        )
      : this.buildConflictClausesForFixedAlocacao(alocacao, timeOverlapFilter);
  }

  private isRecurringAlocacao(alocacao: AlocacaoScheduleDetails): boolean {
    return alocacao.dia_da_semana != null;
  }

  private buildConflictClausesForRecurringAlocacao(
    alocacao: AlocacaoScheduleDetails,
    timeOverlapFilter: Prisma.alocacaoWhereInput,
  ): Prisma.alocacaoWhereInput[] {
    const orClauses: Prisma.alocacaoWhereInput[] = [];

    // Scenario 2.1: Conflicts with an existing Fixed-Date allocation.
    orClauses.push({
      AND: [
        { data: { not: null } },
        { dia_da_semana: alocacao.dia_da_semana },
        timeOverlapFilter,
      ],
    });

    // Scenario 2.2: Conflicts with an existing Recurring allocation on the same day of the week.
    orClauses.push({
      AND: [
        { data: null },
        { dia_da_semana: alocacao.dia_da_semana },
        timeOverlapFilter,
      ],
    });

    return orClauses;
  }

  private buildConflictClausesForFixedAlocacao(
    alocacao: AlocacaoScheduleDetails,
    timeOverlapFilter: Prisma.alocacaoWhereInput,
  ): Prisma.alocacaoWhereInput[] {
    const orClauses: Prisma.alocacaoWhereInput[] = [];

    // Scenario 1.1: Conflicts with an existing Fixed-Date allocation on the exact same date
    orClauses.push({
      AND: [{ data: alocacao.data }, timeOverlapFilter],
    });

    // Scenario 1.2: Conflicts with an existing Recurring allocation on the same day of the week
    orClauses.push({
      AND: [
        { data: null },
        { dia_da_semana: alocacao.dia_da_semana },
        timeOverlapFilter,
      ],
    });

    return orClauses;
  }

  private buildFinalWhereQuery(
    alocacao: AlocacaoScheduleDetails,
    orClauses: Prisma.alocacaoWhereInput[],
  ): Prisma.alocacaoWhereInput {
    return {
      sala_id: alocacao.sala_id,
      deleted_at: null,
      OR: orClauses,
    };
  }

  private async getConflicts(
    whereQuery: Prisma.alocacaoWhereInput,
  ): Promise<number[]> {
    const result = await this.prisma.alocacao.findMany({
      where: whereQuery,
      select: { id: true },
    });

    return result.map((r) => r.id);
  }
}
