import { Prisma } from 'src/generated/prisma/client';

import { AlocacaoScheduleDetails } from '../dto/alocacao-schedule-details';

export class AlocacaoConflictChecker {
  public static async checkConflicts(
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
