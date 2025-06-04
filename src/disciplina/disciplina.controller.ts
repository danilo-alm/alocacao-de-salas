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

import { DisciplinaService } from './disciplina.service';
import {
  CreateDocs,
  FindAllDocs,
  FindOneDocs,
  RemoveDocs,
  UpdateDocs,
} from './disciplina.swagger';
import { DisciplinaResponseDto } from './dto/disciplina-response.dto';
import { DisciplinaWithAlocacoesResponseDto } from './dto/disciplina-with-alocacoes-response.dto';

@ApiTags('Disciplina')
@Controller('disciplina')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post()
  @CreateDocs()
  async create(
    @Body() createDisciplinaDto: { Nome: string },
  ): Promise<DisciplinaResponseDto> {
    return this.disciplinaService.create(createDisciplinaDto);
  }

  @Get()
  @FindAllDocs()
  async findAll(): Promise<DisciplinaResponseDto[]> {
    return this.disciplinaService.findAll();
  }

  @Get(':id')
  @FindOneDocs()
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DisciplinaWithAlocacoesResponseDto> {
    return this.disciplinaService.findOne(id);
  }

  @Patch(':id')
  @UpdateDocs()
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDisciplinaDto: { Nome: string },
  ): Promise<DisciplinaResponseDto> {
    return this.disciplinaService.update(id, updateDisciplinaDto);
  }

  @Delete(':id')
  @RemoveDocs()
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.disciplinaService.remove(id);
  }
}
