import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateSalaDto } from './dto/create-sala.dto';
import { SalaResponseDto } from './dto/sala-response.dto';
import { SalaWithAlocacoesResponseDto } from './dto/sala-with-alocacoes-response.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { SalaService } from './sala.service';
import {
  CreateDocs,
  FindAllDocs,
  FindOneDocs,
  RemoveDocs,
  UpdateDocs,
} from './sala.swagger';

@ApiTags('sala')
@Controller('sala')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Post()
  @CreateDocs()
  async create(@Body() createSalaDto: CreateSalaDto): Promise<SalaResponseDto> {
    return this.salaService.create(createSalaDto);
  }

  @Get()
  @FindAllDocs()
  async findAll(): Promise<SalaResponseDto[]> {
    return this.salaService.findAll();
  }

  @Get(':id')
  @FindOneDocs()
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SalaWithAlocacoesResponseDto> {
    return this.salaService.findOne(id);
  }

  @Patch(':id')
  @UpdateDocs()
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSalaDto: UpdateSalaDto,
  ): Promise<SalaResponseDto> {
    return this.salaService.update(id, updateSalaDto);
  }

  @Delete(':id')
  @RemoveDocs()
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.salaService.remove(id);
  }
}
