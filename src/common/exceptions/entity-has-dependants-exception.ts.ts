import { HttpStatus } from '@nestjs/common';

import { DomainException } from './domain.excetion';

export class EntityHasDependantsException extends DomainException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}
