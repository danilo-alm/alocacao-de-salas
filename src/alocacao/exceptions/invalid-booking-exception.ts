import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/common/exceptions/domain.excetion';

export class InvalidBookingException extends DomainException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
