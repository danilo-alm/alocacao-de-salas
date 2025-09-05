import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { SolverRequestDto } from './dto/solver-request.dto';
import { SolverService } from './solver.service';

@ApiTags("Solver")
@Controller("solver")
export class SolverController {
  constructor(private readonly service: SolverService) {}
  
  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  solve(@Body() solverRequestDto: SolverRequestDto): any {
    return this.service.handleRequest(solverRequestDto);
  }
}