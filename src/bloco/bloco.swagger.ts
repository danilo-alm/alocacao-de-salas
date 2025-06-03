import { applyDecorators, Delete, Get, Patch, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';

import { BlocoResponseDto } from './dto/bloco-response.dto';
import { BlocoResponseWithSalasDto } from './dto/bloco-response-with-salas.dto';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';

export function CreateDocs() {
  return applyDecorators(
    Post(),
    ApiOperation({ summary: 'Criar um novo bloco' }),
    ApiBody({
      type: CreateBlocoDto,
      description: 'Dados para criar um novo bloco',
      examples: {
        exemplo1: {
          value: {
            Nome: 'Bloco A',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Bloco criado com sucesso',
      type: BlocoResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Já existe um bloco com este nome',
    }),
  );
}

export function FindAllDocs() {
  return applyDecorators(
    Get(),
    ApiOperation({ summary: 'Listar todos os blocos' }),
    ApiQuery({
      name: 'search',
      required: false,
      description: 'Filtrar por nome',
      type: String,
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Lista de blocos retornada com sucesso',
      type: [BlocoResponseDto],
    }),
  );
}

export function FindOneDocs() {
  return applyDecorators(
    Get(':id'),
    ApiOperation({ summary: 'Buscar um bloco por ID' }),
    ApiParam({
      name: 'id',
      description: 'ID do bloco',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Bloco encontrado com sucesso',
      type: BlocoResponseWithSalasDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Bloco não encontrado',
    }),
  );
}

export function UpdateDocs() {
  return applyDecorators(
    Patch(':id'),
    ApiOperation({ summary: 'Atualizar um bloco' }),
    ApiParam({
      name: 'id',
      description: 'ID do bloco a ser atualizado',
      example: 1,
      type: 'number',
    }),
    ApiBody({
      type: UpdateBlocoDto,
      description: 'Dados para atualizar o bloco',
      examples: {
        exemplo1: {
          value: {
            Nome: 'Bloco B',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Bloco atualizado com sucesso',
      type: BlocoResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Bloco não encontrado',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Já existe um bloco com este nome',
    }),
  );
}

export function RemoveDocs() {
  return applyDecorators(
    Delete(':id'),
    ApiOperation({ summary: 'Remover um bloco' }),
    ApiParam({
      name: 'id',
      description: 'ID do bloco a ser removido',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'Se existe, bloco removido com sucesso',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description:
        'Ainda existem salas cadastradas neste bloco. Remoção falhou',
    }),
  );
}
