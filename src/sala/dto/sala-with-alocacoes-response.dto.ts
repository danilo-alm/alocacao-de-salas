import { PickType } from '@nestjs/swagger';

import { SalaEntity } from '../sala.entity';

export class SalaWithAlocacoesResponseDto extends PickType(SalaEntity, [
  'Id',
  'Codigo',
  'Tipo',
  'Bloco',
  'Capacidade',
  'Alocacoes',
] as const) {}
