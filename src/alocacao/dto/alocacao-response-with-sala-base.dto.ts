import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { SalaBaseDto } from 'src/sala/dto/sala-base.dto';

import { AlocacaoResponseDto } from './alocacao-response.dto';

export class AlocacaoResponseWithSalaBaseDto extends OmitType(
  AlocacaoResponseDto,
  ['sala', 'disciplina'],
) {
  @ApiProperty({
    description: 'Sala alocada',
    type: () => SalaBaseDto,
  })
  @Type(() => SalaBaseDto)
  @Expose()
  sala: SalaBaseDto;
}
