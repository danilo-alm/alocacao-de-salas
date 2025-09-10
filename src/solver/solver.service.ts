import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Constraint, Model, Solution, solve } from 'yalps';

import { PendingAlocacaoDto } from './dto/pending-alocacao.dto';
import { SolverRequestDto } from './dto/solver-request.dto';

class PendingAlocacaoWithUUID extends PendingAlocacaoDto {
  uniqueId?: string;
}

@Injectable()
export class SolverService {
  private readonly CLASSROOM_TIME_SLOTS = [
    ["12:40", "13:30"],
    ["13:30", "14:20"],
    ["14:20", "15:10"],
    ["15:20", "16:10"],
    ["16:10", "17:00"],
    ["17:10", "17:50"]
  ]
  
  handleRequest(req: SolverRequestDto): any {
    const model = this.makeModel(req);
    const solution = this.solveModel(model);

    return solution
  }

  private solveModel(model: Model): Solution<string> {
    return solve(model);
  }
  
  private makeModel(req: SolverRequestDto): Model {
    const constraints: Record<string, Constraint> = {};
    const variables: Record<string, Record<string, number>> = {};

    const pendingWithUUIDs = req.pending.map(
      p => this.pendingAlocacaoDtoToWithUUIDMapper(p)
    );
  
    // Each discipline available get's one slot
    pendingWithUUIDs.forEach(d => {
      d.uniqueId = randomUUID();
      constraints[`${d.uniqueId}_one_slot`] = {"equal": 1}
    })

    req.salas.forEach(s => {
      this.CLASSROOM_TIME_SLOTS.forEach(t => {
        const room_time_string = `${s.id}_${t[0]}-${t[1]}`

        // Each room time-slot can only have one discipline
        constraints[room_time_string] = {"max": 1}
      })

      pendingWithUUIDs.forEach(p => {
          const uid = p.uniqueId;
          const room_time_string = `${s.id}_${p.hora_inicio}-${p.hora_fim}`

          variables[`${uid}_${room_time_string}`] = {
            "allocated": 1,
            [`${uid}_one_slot`]: 1,
            [`${room_time_string}`]: 1
          }
      })
    })
    
    return {
      direction: "maximize" as const,
      objective: "allocated",
      constraints,
      variables
    }
  }

  private pendingAlocacaoDtoToWithUUIDMapper(
    dto: PendingAlocacaoDto
  ): PendingAlocacaoWithUUID {
    return Object.assign(new PendingAlocacaoWithUUID(), dto, {
      uniqueId: randomUUID(),
    })
  }
}
