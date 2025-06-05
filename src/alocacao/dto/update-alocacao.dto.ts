import { PartialType } from '@nestjs/swagger';

import { AlocacaoEntity } from '../alocacao.entity';

export class UpdateAlocacaoDto extends PartialType(AlocacaoEntity) {}
