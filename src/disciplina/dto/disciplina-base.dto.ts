import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { disciplina } from 'src/generated/prisma/client';

export class DisciplinaBaseDto implements disciplina {
  @ApiProperty({ description: 'ID da disciplina', example: 1 })
  @IsInt()
  @Expose()
  id: number;

  @ApiProperty({ description: 'Nome da disciplina', example: 'Matemática' })
  @IsString()
  @IsNotEmpty()
  @Expose()
  nome: string;

  @ApiProperty({description: 'Turma', example: 'A'})
  @IsString()
  @IsOptional()
  @Expose()
  turma: string;
}
