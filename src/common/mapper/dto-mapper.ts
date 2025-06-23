import { ClassConstructor, plainToInstance } from 'class-transformer';

export class DtoMapper {
  static toDto<T>(dtoClass: ClassConstructor<T>, data: object): T {
    return plainToInstance(dtoClass, data, {
      excludeExtraneousValues: true,
    });
  }

  static toDtos<T>(dtoClass: ClassConstructor<T>, data: object[]): T[] {
    return plainToInstance(dtoClass, data, {
      excludeExtraneousValues: true,
    });
  }
}
