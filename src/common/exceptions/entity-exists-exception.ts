import { HttpStatus } from '@nestjs/common';
import { DomainException } from './domain.excetion';

export class EntityExistsException extends DomainException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}
