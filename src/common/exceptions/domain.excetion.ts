import { HttpStatus } from '@nestjs/common';

export class DomainException extends Error {
  public readonly httpStatus: HttpStatus;

  constructor(message: string, httpStatus: HttpStatus) {
    super(message);
    this.name = new.target.name;
    this.httpStatus = httpStatus;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, new.target);
    }
  }
}
