import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GenericFilterableQueryDto } from 'src/common/dto/generic-filterable-query.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { SwaggerPaginatedResponse } from 'src/common/swagger/paginated-response.dto';

import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { DisciplinaResponseDto } from './dto/disciplina-response.dto';
import { DisciplinaResponseWithoutAlocacoesDto } from './dto/disciplina-response-without-alocacoes.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@ApiTags('Disciplina')
@Controller('disciplina')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: DisciplinaResponseWithoutAlocacoesDto })
  async create(
    @Body() createDisciplinaDto: CreateDisciplinaDto,
  ): Promise<DisciplinaResponseWithoutAlocacoesDto> {
    return this.disciplinaService.create(createDisciplinaDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DisciplinaResponseDto })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DisciplinaResponseDto> {
    return this.disciplinaService.findOne(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: SwaggerPaginatedResponse(DisciplinaResponseWithoutAlocacoesDto),
  })
  async findAll(
    @Query() queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<DisciplinaResponseWithoutAlocacoesDto>> {
    return this.disciplinaService.findAll(queryDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DisciplinaResponseWithoutAlocacoesDto })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDisciplinaDto: UpdateDisciplinaDto,
  ): Promise<DisciplinaResponseWithoutAlocacoesDto> {
    return this.disciplinaService.update(id, updateDisciplinaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.disciplinaService.remove(id);
  }
}
