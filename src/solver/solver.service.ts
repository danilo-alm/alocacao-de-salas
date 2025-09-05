import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Constraint, Model, Solution, solve } from 'yalps';

import { SolverRequestDto } from './dto/solver-request.dto';

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
    const constraints: Map<string, Constraint> = new Map();
    const variables: Map<string, Map<string, number>> = new Map();

    // Each discipline available get's one slot
    req.pending.forEach(d => {
      d.uniqueId = randomUUID();
      constraints[`${d.uniqueId}_one_slot`] = {"equal": 1}
    })

    req.salas.forEach(sala => {
      this.CLASSROOM_TIME_SLOTS.forEach(timeSlot => {
        const room_time_string = `${sala.id}_${timeSlot[0]}`
        //validate
        // Each room time-slot can only have one discipline
        constraints[room_time_string] = {"max": 1}

        // e.g.
        // "math_classA_9am": {
        //     "allocated": 1,
        //     "math_one_slot": 1,
        //     "classA_9am": 1
        // },
        req.pending.forEach(d => {
          const uid = d.uniqueId;
          variables[`${uid}_${room_time_string}`] = {
            "allocated": 1,
            [`${uid}_one_slot`]: 1,
            [`${room_time_string}`]: 1
          }
        })
      })
    })
    
    req.salas.forEach(s => {
      this.CLASSROOM_TIME_SLOTS.forEach(t => {
        const room_time_string = `${s.id}_${t[0]}-${t[1]}`

        // Each room time-slot can only have one discipline
        constraints[room_time_string] = {"max": 1}
      })

      req.pending.forEach(p => {
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

}
