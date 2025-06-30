import { Prisma } from 'src/generated/prisma/client';

import { AlocacaoScheduleDetails } from '../dto/alocacao-schedule-details';

export class AlocacaoConflictChecker {
  private static currentAlocacao: AlocacaoScheduleDetails;
  private static finalWhereQuery: Prisma.alocacaoWhereInput;
  private static timeOverlapFilter: Prisma.alocacaoWhereInput;
  private static orClauses: Prisma.alocacaoWhereInput[];
  private static excludeIdFromCheck?: number;

  public static async checkConclictsOnCreate(
    details: AlocacaoScheduleDetails,
  ): Promise<void> {
    this.excludeIdFromCheck = undefined;
    return this.checkConflicts(details);
  }

  public static async checkConclictsOnUpdate(
    details: AlocacaoScheduleDetails,
    idToExclude: number,
  ): Promise<void> {
    this.excludeIdFromCheck = idToExclude;
    return this.checkConflicts(details);
  }

  private static async checkConflicts(
    details: AlocacaoScheduleDetails,
  ): Promise<void> {
    this.setCurrentAlocacao(details);
    this.setTimeOverlapFilter();
    this.setOrClauses();
  }

  private static setCurrentAlocacao(details: AlocacaoScheduleDetails): void {
    this.currentAlocacao = details;
  }

  private static setTimeOverlapFilter(): void {
    this.timeOverlapFilter = {
      hora_inicio: { lt: this.currentAlocacao.hora_fim },
      hora_fim: { gt: this.currentAlocacao.hora_inicio },
    };
  }

  private static setOrClauses(): void {
    this.orClauses = [];
    if (this.isRecurringAlocacao()) {
      this.pushOrClausesForRecurringAlocacao();
    } else {
      this.pushOrClausesForFixedAlocacao();
    }
  }

  private static isRecurringAlocacao(): boolean {
    return this.currentAlocacao.dia_da_semana != null;
  }

  private static pushOrClausesForRecurringAlocacao(): void {
    // Scenario 2.1: Conflicts with an existing Fixed-Date allocation.
    this.orClauses.push({
      AND: [
        { data: { not: null } },
        { dia_da_semana: this.currentAlocacao.dia_da_semana },
        this.timeOverlapFilter,
      ],
    });

    // Scenario 2.2: Conflicts with an existing Recurring allocation on the same day of the week.
    this.orClauses.push({
      AND: [
        { data: null },
        { dia_da_semana: this.currentAlocacao.dia_da_semana },
        this.timeOverlapFilter,
      ],
    });
  }

  private static pushOrClausesForFixedAlocacao(): void {
    // Scenario 1.1: Conflicts with an existing Fixed-Date allocation on the exact same date
    this.orClauses.push({
      AND: [{ data: this.currentAlocacao.data }, this.timeOverlapFilter],
    });

    // Scenario 1.2: Conflicts with an existing Recurring allocation on the same day of the week
    this.orClauses.push({
      AND: [
        { data: null },
        { dia_da_semana: this.currentAlocacao.dia_da_semana },
        this.timeOverlapFilter,
      ],
    });
  }

  private static setWhereQuery(): void {
    this.finalWhereQuery = this.buildFinalWhereQuery();
  }

  private static buildFinalWhereQuery(): Prisma.alocacaoWhereInput {
    const finalWhereQuery: Prisma.alocacaoWhereInput = {
      sala_id: this.currentAlocacao.sala_id,
      deleted_at: null,
    };

    if (this.excludeIdFromCheck != null) {
      finalWhereQuery.NOT = { id: this.excludeIdFromCheck };
    }
    finalWhereQuery.OR = this.orClauses;

    return finalWhereQuery;
  }
}
