import { OmitType } from '@nestjs/swagger';

import { SalaBaseDto } from './sala-base.dto';

export class CreateSalaDto extends OmitType(SalaBaseDto, [
  'id',
  'created_at',
  'updated_at',
] as const) {}
