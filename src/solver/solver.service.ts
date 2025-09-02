import { Injectable } from '@nestjs/common';
import { Constraint } from 'yalps';

import { SolverRequestDto } from './dto/solver-request.dto';

@Injectable()
export class SolverService {
  makeModel(req: SolverRequestDto) {
    const constraints: Map<string, Constraint> = new Map();

    disciplinas.forEach(d => {
      constraints[`${d.id}_one_slot`] = {"equal": 1}
    })
  }
}