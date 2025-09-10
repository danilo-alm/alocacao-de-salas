import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { SalaResponseDto } from 'src/sala/dto/sala-response.dto';

import { PendingAlocacaoDto } from './pending-alocacao.dto';

export class SolverRequestDto {
  @ApiProperty({ type: () => [SalaResponseDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SalaResponseDto)
  salas: SalaResponseDto[];

  @ApiProperty({ type: () => [PendingAlocacaoDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PendingAlocacaoDto)
  pending: PendingAlocacaoDto[];
}