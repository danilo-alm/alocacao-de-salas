import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { AlocacaoResponseWithoutDisciplinaDto } from 'src/alocacao/dto/alocacao-response-without-disciplina.dto';

import { DisciplinaBaseDto } from './dto/disciplina-base.dto';

export class DisciplinaEntity extends DisciplinaBaseDto {
  @ApiProperty({
    description: 'Lista de alocações da sala',
    type: () => [AlocacaoResponseWithoutDisciplinaDto],
  })
  @Type(() => AlocacaoResponseWithoutDisciplinaDto)
  alocacoes: AlocacaoResponseWithoutDisciplinaDto[];
}
