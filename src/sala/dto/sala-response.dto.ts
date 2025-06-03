import { PickType } from '@nestjs/swagger';

import { SalaEntity } from '../sala.entity';

export class SalaResponseDto extends PickType(SalaEntity, [
  'Id',
  'Codigo',
  'Tipo',
  'Bloco',
  'Capacidade',
] as const) {}
