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

import { CreateSalaDto } from './dto/create-sala.dto';
import { SalaResponseDto } from './dto/sala-response.dto';
import { SalaResponseWithoutAlocacoesDto } from './dto/sala-response-without-alocacoes.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { SalaService } from './sala.service';

@ApiTags('sala')
@Controller('sala')
export class SalaController {
  constructor(private readonly service: SalaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: SalaResponseWithoutAlocacoesDto })
  async create(
    @Body() createSalaDto: CreateSalaDto,
  ): Promise<SalaResponseWithoutAlocacoesDto> {
    return this.service.create(createSalaDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: SalaResponseWithoutAlocacoesDto })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SalaResponseDto> {
    return this.service.findOne(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: SwaggerPaginatedResponse(SalaResponseWithoutAlocacoesDto),
  })
  async findAll(
    @Query() queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<SalaResponseWithoutAlocacoesDto>> {
    return this.service.findAll(queryDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: SalaResponseWithoutAlocacoesDto })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSalaDto: UpdateSalaDto,
  ): Promise<SalaResponseWithoutAlocacoesDto> {
    return this.service.update(id, updateSalaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.service.remove(id);
  }
}
