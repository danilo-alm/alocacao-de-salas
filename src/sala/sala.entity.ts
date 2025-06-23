import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AlocacaoResponseWithoutSalaDto } from 'src/alocacao/dto/alocacao-response-without-sala.dto';
import { BlocoResponseWithoutSalasDto } from 'src/bloco/dto/bloco-response-without-salas.dto';
import { TipoSalaResponseWithoutSalasDto } from 'src/tipo-sala/dto/tipo-sala-response-without-salas.dto';

import { SalaBaseDto } from './dto/sala-base.dto';

export class SalaEntity extends SalaBaseDto {
  @ApiProperty({
    description: 'Tipo da sala',
    type: () => TipoSalaResponseWithoutSalasDto,
  })
  @Type(() => TipoSalaResponseWithoutSalasDto)
  @Expose()
  tipo: TipoSalaResponseWithoutSalasDto;

  @ApiProperty({
    description: 'Bloco da sala',
    type: () => BlocoResponseWithoutSalasDto,
  })
  @Type(() => BlocoResponseWithoutSalasDto)
  @Expose()
  bloco: BlocoResponseWithoutSalasDto;

  @ApiProperty({
    description: 'Lista de alocações da sala',
    type: () => [AlocacaoResponseWithoutSalaDto],
  })
  @Type(() => AlocacaoResponseWithoutSalaDto)
  alocacoes: AlocacaoResponseWithoutSalaDto[];
}
