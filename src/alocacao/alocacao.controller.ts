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

import { AlocacaoService } from './alocacao.service';
import { AlocacaoResponseDto } from './dto/alocacao-response.dto';
import { AlocacaoResponseWithSalaBaseDto } from './dto/alocacao-response-with-sala-base.dto';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';

@ApiTags('Alocação')
@Controller('alocacao')
export class AlocacaoController {
  constructor(private readonly alocacaoService: AlocacaoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: AlocacaoResponseDto })
  async create(
    @Body() createAlocacaoDto: CreateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    return this.alocacaoService.create(createAlocacaoDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: SwaggerPaginatedResponse(AlocacaoResponseDto) })
  async findAll(
    @Query() queryDto: GenericFilterableQueryDto,
  ): Promise<PaginatedResponseDto<AlocacaoResponseWithSalaBaseDto>> {
    return this.alocacaoService.findAll(queryDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: AlocacaoResponseDto })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AlocacaoResponseDto> {
    return this.alocacaoService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: AlocacaoResponseDto })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAlocacaoDto: UpdateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    return this.alocacaoService.update(id, updateAlocacaoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.alocacaoService.remove(id);
  }
}
