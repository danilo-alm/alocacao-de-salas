import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/common/exceptions/domain.excetion';

export class BookingConflictException extends DomainException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}
