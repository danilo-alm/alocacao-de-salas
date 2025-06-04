import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { AlocacaoResponseDto } from '../alocacao/dto/alocacao-response.dto';

export class DisciplinaEntity {
  @ApiProperty({ description: 'ID da disciplina', example: 1 })
  @IsInt()
  Id: number;

  @ApiProperty({ description: 'Nome da disciplina', example: 'Matemática' })
  @IsString()
  @IsNotEmpty()
  Nome: string;

  @ApiProperty({
    description: 'Lista de alocações desta disciplina',
    type: () => [AlocacaoResponseDto],
  })
  @Type(() => AlocacaoResponseDto)
  Alocacoes: AlocacaoResponseDto[];
} 