import { ApiProperty, PickType } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

import { AlocacaoEntity } from '../alocacao.entity';

export class AlocacaoResponseDto extends PickType(AlocacaoEntity, [
  'id',
  'disciplina',
  'sala',
  'dia_da_semana',
  'hora_inicio',
  'hora_fim',
]) {
  @Transform(({ value }: { value: Date }) => value.toISOString().slice(0, 10), {
    toPlainOnly: true,
  })
  @ApiProperty({
    description: 'Data da alocação (formato yyyy-mm-dd)',
    example: '2028-03-20',
  })
  @Expose()
  data: Date | null;
}
