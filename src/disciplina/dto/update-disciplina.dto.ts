import { PickType } from '@nestjs/swagger';

import { DisciplinaEntity } from '../disciplina.entity';

export class UpdateDisciplinaDto extends PickType(DisciplinaEntity, [
  'Nome',
] as const) {}
