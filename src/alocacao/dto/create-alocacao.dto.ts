import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

import { AlocacaoBaseDto } from './alocacao-base.dto';

export class CreateAlocacaoDto extends OmitType(AlocacaoBaseDto, [
  'id',
  'dia_da_semana',
  'created_at',
  'updated_at',
  'deleted_at',
] as const) {
  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: 'Dia da semana (0-6, onde 0 é Domingo)',
    example: 1,
    required: false,
  })
  @Min(0)
  @Max(6)
  @Expose()
  dia_da_semana?: number;
}
