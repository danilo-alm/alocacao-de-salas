import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { tipo_sala } from 'src/generated/prisma/client';

export class TipoSalaBaseDto implements tipo_sala {
  @ApiProperty({ description: 'ID do tipo de sala', example: 1 })
  @IsInt()
  @Expose()
  id: number;

  @ApiProperty({ description: 'Nome do tipo de sala', example: 'Laboratório' })
  @IsString()
  @IsNotEmpty()
  @Expose()
  nome: string;
}
