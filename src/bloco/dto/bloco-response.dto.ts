import { OmitType } from '@nestjs/swagger';
import { BlocoEntity } from '../bloco.entity';

export class BlocoResponseDto extends OmitType(BlocoEntity, [
  'Salas',
] as const) {}
