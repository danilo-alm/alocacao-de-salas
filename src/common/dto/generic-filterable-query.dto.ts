import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { PaginationQueryDto } from './pagination-query.dto';

export class GenericFilterableQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ description: 'Filtrar por nomes que contém...' })
  @IsString()
  @IsOptional()
  contains?: string;
}
