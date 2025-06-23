import { PickType } from '@nestjs/swagger';

import { BlocoBaseDto } from './bloco-base.dto';

export class CreateBlocoDto extends PickType(BlocoBaseDto, ['nome'] as const) {}
