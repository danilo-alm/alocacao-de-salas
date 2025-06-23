import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/common/exception/domain.exception';

export class BookingConflictException extends DomainException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}
