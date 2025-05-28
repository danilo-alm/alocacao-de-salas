import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BlocoService } from './bloco.service';
import {
  CreateDocs,
  FindAllDocs,
  FindOneDocs,
  RemoveDocs,
  UpdateDocs,
} from './bloco.swagger';
import { BlocoResponseDto } from './dto/bloco-response.dto';
import { BlocoResponseWithSalasDto } from './dto/bloco-response-with-salas.dto';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';

@ApiTags('Bloco')
@Controller('bloco')
export class BlocoController {
  constructor(private readonly blocoService: BlocoService) {}

  @Post()
  @CreateDocs()
  async create(
    @Body() createBlocoDto: CreateBlocoDto,
  ): Promise<BlocoResponseDto> {
    return this.blocoService.create(createBlocoDto);
  }

  @Get()
  @FindAllDocs()
  async findAll(@Query('search') search: string): Promise<BlocoResponseDto[]> {
    if (search) {
      return this.blocoService.findByNameContains(search);
    }
    return this.blocoService.findAll();
  }

  @Get(':id')
  @FindOneDocs()
  async findOne(@Param('id') id: string): Promise<BlocoResponseWithSalasDto> {
    return this.blocoService.findOne(+id);
  }

  @Patch(':id')
  @UpdateDocs()
  async update(
    @Param('id') id: string,
    @Body() updateBlocoDto: UpdateBlocoDto,
  ): Promise<BlocoResponseDto> {
    return this.blocoService.update(+id, updateBlocoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @RemoveDocs()
  async remove(@Param('id') id: string): Promise<void> {
    await this.blocoService.remove(+id);
  }
}
