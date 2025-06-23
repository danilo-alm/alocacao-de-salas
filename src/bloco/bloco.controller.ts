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

import { BlocoService } from './bloco.service';
import { BlocoResponseDto } from './dto/bloco-response.dto';
import { BlocoResponseWithoutSalasDto } from './dto/bloco-response-without-salas.dto';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';

@Controller('bloco')
@ApiTags('Bloco')
export class BlocoController {
  constructor(private readonly service: BlocoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: BlocoResponseWithoutSalasDto })
  async create(
    @Body() createBlocoDto: CreateBlocoDto,
  ): Promise<BlocoResponseWithoutSalasDto> {
    return this.service.create(createBlocoDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: SwaggerPaginatedResponse(BlocoResponseWithoutSalasDto),
  })
  async findAll(
    @Query() queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<BlocoResponseWithoutSalasDto>> {
    return this.service.findAll(queryDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: BlocoResponseDto })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<BlocoResponseDto> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: BlocoResponseWithoutSalasDto })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlocoDto: UpdateBlocoDto,
  ): Promise<BlocoResponseWithoutSalasDto> {
    return this.service.update(id, updateBlocoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.service.delete(id);
  }
}
