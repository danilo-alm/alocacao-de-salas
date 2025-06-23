import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { SalaResponseWithoutAlocacoesDto } from 'src/sala/dto/sala-response-without-alocacoes.dto';

import { BlocoBaseDto } from './dto/bloco-base.dto';

export class BlocoEntity extends BlocoBaseDto {
  @ApiPropertyOptional({
    description: 'Lista de salas pertencentes ao bloco',
    type: () => [SalaResponseWithoutAlocacoesDto],
  })
  @Type(() => SalaResponseWithoutAlocacoesDto)
  @Expose()
  salas: SalaResponseWithoutAlocacoesDto[];
}
