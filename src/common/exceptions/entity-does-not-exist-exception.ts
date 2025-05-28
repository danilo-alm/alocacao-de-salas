import { HttpStatus } from '@nestjs/common';
import { DomainException } from './domain.excetion';

export class EntityDoesNotExistException extends DomainException {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}
