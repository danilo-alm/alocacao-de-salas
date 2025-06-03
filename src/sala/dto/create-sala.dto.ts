import { PickType } from '@nestjs/swagger';

import { SalaEntity } from '../sala.entity';

export class CreateSalaDto extends PickType(SalaEntity, [
  'Codigo',
  'TipoId',
  'BlocoId',
  'Capacidade',
] as const) {}
