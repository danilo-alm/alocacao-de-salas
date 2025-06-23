import { Type } from '@nestjs/common';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

class PaginationMetaDto {
  @ApiProperty({ example: 100 })
  totalItems: number;

  @ApiProperty({ example: 10 })
  itemCount: number;

  @ApiProperty({ example: 10 })
  itemsPerPage: number;

  @ApiProperty({ example: 10 })
  totalPages: number;

  @ApiProperty({ example: 1 })
  currentPage: number;
}

export function SwaggerPaginatedResponse<TModel extends Type<any>>(
  model: TModel,
) {
  @ApiExtraModels(PaginationMetaDto, model)
  class PaginatedDto {
    @ApiProperty({
      type: () => model,
      isArray: true,
      description: 'Dados',
    })
    data: TModel[];

    @ApiProperty({
      type: () => PaginationMetaDto,
      description: 'Metadados de paginação',
    })
    meta: PaginationMetaDto;
  }

  // Without this, Swagger will reuse the same class name for all paginated DTOs,
  // causing incorrect schema generation in the documentation.
  // Dynamically renaming the class ensures each paginated type is uniquely identified.
  Object.defineProperty(PaginatedDto, 'name', {
    value: `Paginated${model.name}Dto`,
  });

  return PaginatedDto as Type<{
    data: TModel[];
    meta: PaginationMetaDto;
  }>;
}
