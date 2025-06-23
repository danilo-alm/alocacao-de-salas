import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/common/exception/domain.exception';

export class InvalidBookingException extends DomainException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
