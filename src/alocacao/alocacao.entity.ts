import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { DisciplinaResponseDto } from 'src/disciplina/dto/disciplina-response.dto';

import { SalaEntity } from '../sala/sala.entity';

export class AlocacaoEntity {
  @IsInt()
  @ApiProperty({ description: 'ID da alocação', example: 1 })
  Id: number;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  @ApiProperty({
    description: 'Data da alocação (formato yyyy-mm-dd)',
    example: '2024-03-20',
    required: false,
  })
  // This match also accepts yyyy-m-d
  @Matches(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/)
  Data?: Date;

  @IsInt()
  @ApiProperty({
    description: 'Dia da semana (0-6, onde 0 é Domingo)',
    example: 1,
    required: false,
  })
  DiaDaSemana: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'HoraInicio must be in format HH:mm',
  })
  @ApiProperty({
    description: 'Hora de início (formato HH:mm)',
    example: '08:00',
  })
  HoraInicio: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'HoraFim must be in format HH:mm',
  })
  @ApiProperty({ description: 'Hora de fim (formato HH:mm)', example: '10:00' })
  HoraFim: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ description: 'ID da disciplina', example: 1 })
  DisciplinaId: number;

  @IsNotEmpty()
  @ApiProperty({ type: () => DisciplinaResponseDto })
  @Type(() => DisciplinaResponseDto)
  Disciplina: DisciplinaResponseDto;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ description: 'ID da sala', example: 1 })
  SalaId: number;

  @ApiProperty({ description: 'Sala alocada', type: () => SalaEntity })
  @Type(() => SalaEntity)
  Sala: SalaEntity;

  @ApiProperty({ description: 'Data de criação' })
  CreatedAt: Date;

  @ApiProperty({ description: 'Data de atualização' })
  UpdatedAt: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  @ApiProperty({
    description: 'Data de exclusão',
    example: '2024-03-20T10:00:00Z',
    required: false,
  })
  DeletedAt?: Date;
}
