import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResponseDto<T> {
  @ApiProperty({ description: 'Dados' })
  data: T[];

  @ApiProperty({
    description: 'Informações de Paginação',
    example: {
      totalItems: 100,
      itemCount: 10,
      itemsPerPage: 10,
      totalPages: 10,
      currentPage: 1,
    },
  })
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };

  constructor(
    data: T[],
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
  ) {
    this.data = data;
    this.meta = {
      totalItems,
      itemCount: data.length,
      itemsPerPage,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      currentPage,
    };
  }
}
