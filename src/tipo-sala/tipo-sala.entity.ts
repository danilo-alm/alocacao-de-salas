import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { SalaResponseDto } from '../sala/dto/sala-response.dto';

export class TipoSalaEntity {
  @ApiProperty({ description: 'ID do tipo de sala', example: 1 })
  @IsInt()
  Id: number;

  @ApiProperty({ description: 'Nome do tipo de sala', example: 'Laboratório' })
  @IsString()
  @IsNotEmpty()
  Nome: string;

  @ApiProperty({
    description: 'Lista de salas deste tipo',
    type: () => [SalaResponseDto],
  })
  @Type(() => SalaResponseDto)
  Salas: SalaResponseDto[];
}
