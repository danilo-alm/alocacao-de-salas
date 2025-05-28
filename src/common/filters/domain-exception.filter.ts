import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

import { DomainException } from '../exceptions/domain.excetion';

@Catch(DomainException)
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: DomainException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(exception.httpStatus).json({
      statusCode: exception.httpStatus,
      message: exception.message,
      date: new Date().toISOString(),
      path: request.url,
    });
  }
}
