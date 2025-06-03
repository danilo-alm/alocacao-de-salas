import { applyDecorators, Delete, Get, Patch, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { CreateSalaDto } from './dto/create-sala.dto';
import { SalaResponseDto } from './dto/sala-response.dto';
import { SalaWithAlocacoesResponseDto } from './dto/sala-with-alocacoes-response.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

export function CreateDocs() {
  return applyDecorators(
    Post(),
    ApiOperation({ summary: 'Criar uma nova sala' }),
    ApiBody({
      type: CreateSalaDto,
      description: 'Dados para criar uma nova sala',
      examples: {
        exemplo1: {
          value: {
            Codigo: '101A',
            Capacidade: 30,
            TipoId: 1,
            BlocoId: 1,
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Sala criada com sucesso',
      type: SalaResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Já existe uma sala com este código',
    }),
  );
}

export function FindAllDocs() {
  return applyDecorators(
    Get(),
    ApiOperation({ summary: 'Listar todas as salas' }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Lista de salas retornada com sucesso',
      type: [SalaResponseDto],
    }),
  );
}

export function FindOneDocs() {
  return applyDecorators(
    Get(':id'),
    ApiOperation({ summary: 'Buscar uma sala por id' }),
    ApiParam({
      name: 'id',
      description: 'ID da sala',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Sala encontrada com sucesso',
      type: SalaWithAlocacoesResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Sala não encontrada',
    }),
  );
}

export function UpdateDocs() {
  return applyDecorators(
    Patch(':id'),
    ApiOperation({ summary: 'Atualizar uma sala' }),
    ApiParam({
      name: 'id',
      description: 'ID da sala a ser atualizada',
      example: 1,
      type: 'number',
    }),
    ApiBody({
      type: UpdateSalaDto,
      description: 'Dados para atualizar a sala',
      examples: {
        exemplo1: {
          value: {
            Codigo: '202B',
            Capacidade: 40,
            TipoId: 1,
            BlocoId: 1,
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Sala atualizada com sucesso',
      type: SalaResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Sala não encontrada',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Já existe uma sala com este código',
    }),
  );
}

export function RemoveDocs() {
  return applyDecorators(
    Delete(':id'),
    ApiOperation({ summary: 'Remover uma sala' }),
    ApiParam({
      name: 'id',
      description: 'ID da sala a ser removida',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'Sala removida com sucesso (se existia)',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'A sala possui alocações associadas e não pode ser removida',
    }),
  );
}
