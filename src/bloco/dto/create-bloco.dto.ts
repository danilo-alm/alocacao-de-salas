import { PickType } from '@nestjs/swagger';
import { BlocoEntity } from '../bloco.entity';

export class CreateBlocoDto extends PickType(BlocoEntity, ['Nome'] as const) {}
