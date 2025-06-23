import { OmitType } from '@nestjs/swagger';

import { AlocacaoResponseDto } from './alocacao-response.dto';

export class AlocacaoResponseWithoutDisciplinaDto extends OmitType(
  AlocacaoResponseDto,
  ['disciplina'] as const,
) {}
