import { OmitType } from '@nestjs/swagger';

import { TipoSalaEntity } from '../tipo-sala.entity';

export class TipoSalaResponseDto extends OmitType(TipoSalaEntity, [
  'Salas',
] as const) {}
