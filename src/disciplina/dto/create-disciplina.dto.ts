import { PickType } from '@nestjs/swagger';

import { DisciplinaBaseDto } from './disciplina-base.dto';

export class CreateDisciplinaDto extends PickType(DisciplinaBaseDto, [
  'nome',
] as const) {}
