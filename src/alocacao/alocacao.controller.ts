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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AlocacaoService } from './alocacao.service';
import {
  CreateDocs,
  FindAllDocs,
  FindOneDocs,
  RemoveDocs,
  UpdateDocs,
} from './alocacao.swagger';
import { AlocacaoResponseDto } from './dto/alocacao-response.dto';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';

@ApiTags('Alocação')
@Controller('alocacao')
export class AlocacaoController {
  constructor(private readonly alocacaoService: AlocacaoService) {}

  @Post()
  @CreateDocs()
  async create(
    @Body() createAlocacaoDto: CreateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    return this.alocacaoService.create(createAlocacaoDto);
  }

  @Get()
  @FindAllDocs()
  async findAll(): Promise<AlocacaoResponseDto[]> {
    return this.alocacaoService.findAll();
  }

  @Get(':id')
  @FindOneDocs()
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AlocacaoResponseDto> {
    return this.alocacaoService.findOne(id);
  }

  @Patch(':id')
  @UpdateDocs()
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAlocacaoDto: UpdateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    return this.alocacaoService.update(id, updateAlocacaoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @RemoveDocs()
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.alocacaoService.remove(id);
  }
}
