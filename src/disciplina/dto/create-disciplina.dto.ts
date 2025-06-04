import { PickType } from '@nestjs/swagger';

import { DisciplinaEntity } from '../disciplina.entity';

export class CreateDisciplinaDto extends PickType(DisciplinaEntity, [
  'Nome',
] as const) {}
