import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { DisciplinaResponseWithoutAlocacoesDto } from 'src/disciplina/dto/disciplina-response-without-alocacoes.dto';
import { SalaResponseWithoutAlocacoesDto } from 'src/sala/dto/sala-response-without-alocacoes.dto';

import { AlocacaoBaseDto } from './dto/alocacao-base.dto';

export class AlocacaoEntity extends AlocacaoBaseDto {
  @ApiProperty({
    description: 'Disciplina ministrada',
    type: () => DisciplinaResponseWithoutAlocacoesDto,
  })
  @Type(() => DisciplinaResponseWithoutAlocacoesDto)
  @Expose()
  disciplina: DisciplinaResponseWithoutAlocacoesDto;

  @ApiProperty({
    description: 'Sala alocada',
    type: () => SalaResponseWithoutAlocacoesDto,
  })
  @Type(() => SalaResponseWithoutAlocacoesDto)
  @Expose()
  sala: SalaResponseWithoutAlocacoesDto;
}
