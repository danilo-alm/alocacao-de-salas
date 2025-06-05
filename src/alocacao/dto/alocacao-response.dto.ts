import { OmitType } from '@nestjs/swagger';

import { AlocacaoEntity } from '../alocacao.entity';

export class AlocacaoResponseDto extends OmitType(AlocacaoEntity, [
  'DeletedAt',
  'SalaId',
  'DisciplinaId',
] as const) {}
