import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { BlocoResponseDto } from 'src/bloco/dto/bloco-response.dto';
import { TipoSalaResponseDto } from 'src/tipo-sala/dto/tipo-sala-response.dto';

import { AlocacaoResponseDto } from '../alocacao/dto/alocacao-response.dto';

export class SalaEntity {
  @ApiProperty({ description: 'ID da sala', example: 1 })
  @IsInt()
  Id: number;

  @ApiProperty({ description: 'Código da sala', example: 'LAB-101' })
  @IsString()
  @IsNotEmpty()
  Codigo: string;

  @ApiProperty({ description: 'ID do tipo da sala', example: 1 })
  @IsInt()
  TipoId: number;

  @ApiProperty({ description: 'Tipo da sala', type: () => TipoSalaResponseDto })
  @Type(() => TipoSalaResponseDto)
  Tipo: TipoSalaResponseDto;

  @ApiProperty({ description: 'ID do bloco', example: 1 })
  @IsInt()
  BlocoId: number;

  @ApiProperty({ description: 'Bloco da sala', type: () => BlocoResponseDto })
  @Type(() => BlocoResponseDto)
  Bloco: BlocoResponseDto;

  @ApiProperty({ description: 'Capacidade da sala', example: 30 })
  @IsInt()
  Capacidade: number;

  @ApiProperty({
    description: 'Lista de alocações da sala',
    type: () => [AlocacaoResponseDto],
  })
  @Type(() => AlocacaoResponseDto)
  Alocacoes: AlocacaoResponseDto[];

  @ApiProperty({ description: 'Data de criação' })
  CreatedAt: Date;

  @ApiProperty({ description: 'Data de atualização' })
  UpdatedAt: Date;
}
