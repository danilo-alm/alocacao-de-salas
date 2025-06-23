import { OmitType } from '@nestjs/swagger';

import { SalaResponseDto } from './sala-response.dto';

export class SalaResponseWithoutAlocacoesDto extends OmitType(SalaResponseDto, [
  'alocacoes',
] as const) {}
