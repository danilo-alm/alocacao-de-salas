import { OmitType } from '@nestjs/swagger';

import { AlocacaoResponseDto } from './alocacao-response.dto';

export class AlocacaoResponseWithoutSalaDto extends OmitType(
  AlocacaoResponseDto,
  ['sala'] as const,
) {}
