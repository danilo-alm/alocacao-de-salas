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

import { TipoSalaResponseDto } from './dto/tipo-sala-response.dto';
import { TipoSalaWithSalasResponseDto } from './dto/tipo-sala-with-salas-response.dto';
import { TipoSalaService } from './tipo-sala.service';
import {
  CreateDocs,
  FindAllDocs,
  FindOneDocs,
  RemoveDocs,
  UpdateDocs,
} from './tipo-sala.swagger';

@ApiTags('Tipo de Sala')
@Controller('sala/tipo')
export class TipoSalaController {
  constructor(private readonly tipoSalaService: TipoSalaService) {}

  @Post()
  @CreateDocs()
  async create(
    @Body() createTipoSalaDto: { Nome: string },
  ): Promise<TipoSalaResponseDto> {
    return this.tipoSalaService.create(createTipoSalaDto);
  }

  @Get()
  @FindAllDocs()
  async findAll(): Promise<TipoSalaResponseDto[]> {
    return this.tipoSalaService.findAll();
  }

  @Get(':id')
  @FindOneDocs()
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TipoSalaWithSalasResponseDto> {
    return this.tipoSalaService.findOne(id);
  }

  @Patch(':id')
  @UpdateDocs()
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoSalaDto: { Nome: string },
  ): Promise<TipoSalaResponseDto> {
    return this.tipoSalaService.update(id, updateTipoSalaDto);
  }

  @Delete(':id')
  @RemoveDocs()
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.tipoSalaService.remove(id);
  }
}
