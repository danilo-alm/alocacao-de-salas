import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';
import { alocacao } from 'src/generated/prisma/client';

export class AlocacaoBaseDto implements alocacao {
  static readonly hourRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  @IsInt()
  @ApiProperty({ description: 'ID da alocação', example: 1 })
  @Expose()
  id: number;

  @IsOptional()
  @Transform(
    ({ value }: { value: string }) => {
      console.log('converting...');
      return value ? new Date(`${value}T00:00:00`) : null;
    },
    {
      toClassOnly: true,
    },
  )
  @IsDate({ message: 'Data deve seguir formato yyyy-mm-dd' })
  @ApiProperty({
    description: 'Data da alocação (formato yyyy-mm-dd)',
    example: '2028-03-20',
    required: false,
  })
  @Expose()
  data: Date | null;

  @IsInt()
  @ApiProperty({
    description: 'Dia da semana (0-6, onde 0 é Domingo)',
    example: 1,
  })
  @Min(0)
  @Max(6)
  @Expose()
  dia_da_semana: number;

  @IsNotEmpty()
  @IsString()
  @Matches(AlocacaoBaseDto.hourRegex, {
    message: 'hora_inicio deve seguir formato HH:mm',
  })
  @ApiProperty({
    description: 'Hora de início (formato HH:mm)',
    example: '08:00',
  })
  @Expose()
  hora_inicio: string;

  @IsNotEmpty()
  @IsString()
  @Matches(AlocacaoBaseDto.hourRegex, {
    message: 'hora_fim deve seguir formato HH:mm',
  })
  @ApiProperty({
    description: 'Hora de fim (formato HH:mm)',
    example: '08:00',
  })
  @Expose()
  hora_fim: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ description: 'ID da disciplina', example: 1 })
  @Expose()
  disciplina_id: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ description: 'ID da sala', example: 1 })
  @Expose()
  sala_id: number;

  @ApiProperty({ description: 'Data de criação' })
  created_at: Date;

  @ApiProperty({ description: 'Data de atualização' })
  updated_at: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  @ApiProperty({
    description: 'Data de exclusão',
    example: '2024-03-20T10:00:00Z',
    required: false,
  })
  deleted_at: Date | null;
}
