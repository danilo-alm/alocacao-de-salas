import { PickType } from '@nestjs/swagger';

import { SalaEntity } from '../sala.entity';

export class SalaResponseDto extends PickType(SalaEntity, [
  'id',
  'codigo',
  'bloco',
  'tipo',
  'capacidade',
  'alocacoes',
] as const) {}
