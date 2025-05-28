import { PickType } from '@nestjs/swagger';

import { BlocoEntity } from '../bloco.entity';

export class UpdateBlocoDto extends PickType(BlocoEntity, ['Nome'] as const) {}
