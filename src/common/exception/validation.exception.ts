import { HttpStatus } from '@nestjs/common';
import { DomainException } from 'src/common/exception/domain.exception';

export class ValidationException extends DomainException {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
