import { PickType } from '@nestjs/swagger';

import { TipoSalaEntity } from '../tipo-sala.entity';

export class CreateTipoSalaDto extends PickType(TipoSalaEntity, [
  'Nome',
] as const) {}
