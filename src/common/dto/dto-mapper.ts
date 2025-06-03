import { ClassConstructor, plainToClass } from '@nestjs/class-transformer';

export class DtoMapper {
  static toDto<T>(dtoClass: ClassConstructor<T>, data: object): T {
    return plainToClass(dtoClass, data, {
      excludeExtraneousValues: true,
    });
  }

  static toDtos<T>(dtoClass: ClassConstructor<T>, data: object[]): T[] {
    return plainToClass(dtoClass, data, {
      excludeExtraneousValues: true,
    });
  }
}
