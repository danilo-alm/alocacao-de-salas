import { ClassConstructor, plainToClass } from '@nestjs/class-transformer';
import { Bloco } from 'src/generated/prisma/client';

export class DtoMapper {
  static toDto<T>(dtoClass: ClassConstructor<T>, data: Bloco): T;
  static toDto<T>(dtoClass: ClassConstructor<T>, data: Bloco[]): T[];
  static toDto<T>(
    dtoClass: ClassConstructor<T>,
    data: Bloco | Bloco[],
  ): T | T[] {
    return plainToClass(dtoClass, data, {
      excludeExtraneousValues: true,
    });
  }
}
