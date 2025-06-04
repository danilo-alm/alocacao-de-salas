import { OmitType } from '@nestjs/swagger';

import { DisciplinaEntity } from '../disciplina.entity';

export class DisciplinaResponseDto extends OmitType(DisciplinaEntity, [
  'Alocacoes',
] as const) {}
