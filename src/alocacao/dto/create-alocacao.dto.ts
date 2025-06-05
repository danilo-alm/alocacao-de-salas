import { PickType } from '@nestjs/swagger';

import { AlocacaoEntity } from '../alocacao.entity';
import { AlocacaoScheduleDetails } from './alocacao-schedule-details';

export class CreateAlocacaoDto
  extends PickType(AlocacaoEntity, [
    'Data',
    'DiaDaSemana',
    'HoraInicio',
    'HoraFim',
    'DisciplinaId',
    'SalaId',
  ] as const)
  implements AlocacaoScheduleDetails {}
