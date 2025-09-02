import { SalaResponseDto } from 'src/sala/dto/sala-response.dto';

import { PendingAlocacaoDto } from './pending-alocacao.dto';

export class SolverRequestDto {
  salas: SalaResponseDto[];
  pending: PendingAlocacaoDto[];
}