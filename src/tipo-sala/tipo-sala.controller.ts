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

import { CreateTipoSalaDto } from './dto/create-tipo-sala.dto';
import { TipoSalaResponseDto } from './dto/tipo-sala-response.dto';
import { TipoSalaResponseWithoutSalasDto } from './dto/tipo-sala-response-without-salas.dto';
import { UpdateTipoSalaDto } from './dto/update-tipo-sala.dto';
import { TipoSalaService } from './tipo-sala.service';

@ApiTags('Tipo de Sala')
@Controller('sala/tipo')
export class TipoSalaController {
  constructor(private readonly service: TipoSalaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: TipoSalaResponseWithoutSalasDto })
  async create(
    @Body() createTipoSalaDto: CreateTipoSalaDto,
  ): Promise<TipoSalaResponseWithoutSalasDto> {
    return this.service.create(createTipoSalaDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: TipoSalaResponseDto })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TipoSalaResponseDto> {
    return this.service.findOne(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: SwaggerPaginatedResponse(TipoSalaResponseWithoutSalasDto),
  })
  async findAll(
    @Query() queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<TipoSalaResponseWithoutSalasDto>> {
    return this.service.findAll(queryDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: TipoSalaResponseWithoutSalasDto })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoSalaDto: UpdateTipoSalaDto,
  ): Promise<TipoSalaResponseWithoutSalasDto> {
    return this.service.update(id, updateTipoSalaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.service.remove(id);
  }
}
