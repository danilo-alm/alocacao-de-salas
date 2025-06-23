import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { type sala } from 'src/generated/prisma/client';

export class SalaBaseDto implements sala {
  @ApiProperty({ description: 'ID da sala', example: 1 })
  @IsInt()
  @Expose()
  id: number;

  @ApiProperty({ description: 'Código da sala', example: 'LAB-101' })
  @IsString()
  @IsNotEmpty()
  @Expose()
  codigo: string;

  @ApiProperty({ description: 'ID do tipo da sala', example: 1 })
  @IsInt()
  @Expose()
  tipo_id: number;

  @ApiProperty({ description: 'ID do bloco', example: 1 })
  @IsInt()
  @Expose()
  bloco_id: number;

  @ApiProperty({ description: 'Capacidade da sala', example: 30 })
  @IsInt()
  @Expose()
  capacidade: number;

  @ApiProperty({ description: 'Data de criação' })
  @Exclude()
  created_at: Date;

  @ApiProperty({ description: 'Data de atualização' })
  @Exclude()
  updated_at: Date;
}
