import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Type } from '@nestjs/class-transformer';
import { SalaResponseDto } from '../sala/dto/sala-response.dto';

export class BlocoEntity {
  @ApiProperty({ description: 'ID do bloco', example: 1 })
  @IsInt()
  Id: number;

  @ApiProperty({ description: 'Nome do bloco', example: 'Bloco A' })
  @IsString()
  @IsNotEmpty()
  Nome: string;

  @ApiProperty({
    description: 'Lista de salas pertencentes ao bloco',
    type: () => [SalaResponseDto],
  })
  @Type(() => SalaResponseDto)
  Salas: SalaResponseDto[];
}
