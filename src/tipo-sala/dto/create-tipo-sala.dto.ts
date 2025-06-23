import { PickType } from '@nestjs/swagger';

import { TipoSalaBaseDto } from './tipo-sala-base.dto';

export class CreateTipoSalaDto extends PickType(TipoSalaBaseDto, [
  'nome',
] as const) {}
