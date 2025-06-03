import { applyDecorators, Delete, Get, Patch, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';

import { CreateTipoSalaDto } from './dto/create-tipo-sala.dto';
import { TipoSalaResponseDto } from './dto/tipo-sala-response.dto';
import { TipoSalaWithSalasResponseDto } from './dto/tipo-sala-with-salas-response.dto';
import { UpdateTipoSalaDto } from './dto/update-tipo-sala.dto';

export function CreateDocs() {
  return applyDecorators(
    Post(),
    ApiOperation({ summary: 'Criar um novo tipo de sala' }),
    ApiBody({
      type: CreateTipoSalaDto,
      description: 'Dados para criar um novo tipo de sala',
      examples: {
        exemplo1: {
          value: {
            Nome: 'Laboratório',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Tipo de sala criado com sucesso',
      type: TipoSalaResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Já existe um tipo de sala com este nome',
    }),
  );
}

export function FindAllDocs() {
  return applyDecorators(
    Get(),
    ApiOperation({ summary: 'Listar todos os tipos de salas' }),
    ApiQuery({
      name: 'search',
      required: false,
      description: 'Filtrar por nome',
      type: String,
      example: 'bloco',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Lista de tipos de salas retornada com sucesso',
      type: [TipoSalaResponseDto],
    }),
  );
}

export function FindOneDocs() {
  return applyDecorators(
    Get(':id'),
    ApiOperation({ summary: 'Buscar um tipo de sala por ID' }),
    ApiParam({
      name: 'id',
      description: 'ID do tipo de sala',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Tipo de sala encontrado com sucesso',
      type: TipoSalaWithSalasResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Tipo de sala não encontrado',
    }),
  );
}

export function UpdateDocs() {
  return applyDecorators(
    Patch(':id'),
    ApiOperation({ summary: 'Atualizar um tipo de sala' }),
    ApiParam({
      name: 'id',
      description: 'ID do tipo de sala a ser atualizado',
      example: 3,
      type: 'number',
    }),
    ApiBody({
      type: UpdateTipoSalaDto,
      description: 'Dados para atualizar o tipo de sala',
      examples: {
        exemplo1: {
          value: {
            Nome: 'Novo Nome',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Tipo de sala atualizado com sucesso',
      type: TipoSalaResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Tipo de sala não encontrado',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Já existe um tipo de sala com este nome',
    }),
  );
}

export function RemoveDocs() {
  return applyDecorators(
    Delete(':id'),
    ApiOperation({ summary: 'Remover um tipo de sala' }),
    ApiParam({
      name: 'id',
      description: 'ID do tipo de sala a ser removido',
      example: 4,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'Se existe, tipo de sala removido com sucesso',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description:
        'Ainda existem salas cadastradas neste tipo de sala. Remoção falhou',
    }),
  );
}
