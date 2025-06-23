import { PickType } from '@nestjs/swagger';

import { BlocoEntity } from '../bloco.entity';

export class BlocoResponseDto extends PickType(BlocoEntity, [
  'id',
  'nome',
  'salas',
] as const) {}
