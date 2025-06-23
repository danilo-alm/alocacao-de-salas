import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { SalaResponseWithoutAlocacoesDto } from 'src/sala/dto/sala-response-without-alocacoes.dto';

import { TipoSalaBaseDto } from './dto/tipo-sala-base.dto';

export class TipoSalaEntity extends TipoSalaBaseDto {
  @ApiPropertyOptional({
    description: 'Lista de salas deste tipo',
    type: () => [SalaResponseWithoutAlocacoesDto],
  })
  @Type(() => SalaResponseWithoutAlocacoesDto)
  @Expose()
  salas: SalaResponseWithoutAlocacoesDto[];
}
