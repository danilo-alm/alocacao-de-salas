import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { bloco } from 'src/generated/prisma/client';

export class BlocoBaseDto implements bloco {
  @ApiProperty({ description: 'ID do bloco', example: 1 })
  @IsInt()
  @Expose()
  id: number;

  @ApiProperty({ description: 'Nome do bloco', example: 'Bloco A' })
  @IsString()
  @IsNotEmpty()
  @Expose()
  nome: string;
}
