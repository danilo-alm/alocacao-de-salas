import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Constraint, Model } from 'yalps';

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
    
  makeModel(req: SolverRequestDto): Model {
    const constraints: Map<string, Constraint> = new Map();
    const variables: Map<string, Map<string, number>> = new Map();

    for (let i = 0; i < req.pending.length; i++) {
      req.pending[i].uniqueId = randomUUID()
    }

    // Each discipline available get's one slot
    req.pending.forEach(d => {
      constraints[`${d.uniqueId}_one_slot`] = {"equal": 1}
    })

    req.salas.forEach(sala => {
      this.CLASSROOM_TIME_SLOTS.forEach(timeSlot => {
        const room_time_string = `${sala.id}_${timeSlot[0]}`
        
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
    
    return {
      direction: "maximize" as const,
      objective: "allocated",
      constraints,
      variables
    }
  }
}
