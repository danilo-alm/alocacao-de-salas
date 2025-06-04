import { applyDecorators } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { DisciplinaResponseDto } from './dto/disciplina-response.dto';
import { DisciplinaWithAlocacoesResponseDto } from './dto/disciplina-with-alocacoes-response.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

export function CreateDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Criar uma nova disciplina' }),
    ApiBody({
      type: CreateDisciplinaDto,
      description: 'Dados para criar uma nova disciplina',
      examples: {
        exemplo1: {
          value: {
            Nome: 'Teoria dos Grafos',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Disciplina criada com sucesso',
      type: DisciplinaResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Já existe uma disciplina com este nome',
    }),
  );
}

export function FindAllDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Listar todas as disciplinas' }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Lista de disciplinas retornada com sucesso',
      type: [DisciplinaResponseDto],
    }),
  );
}

export function FindOneDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Buscar uma disciplina por ID' }),
    ApiParam({
      name: 'id',
      description: 'ID da disciplina',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Disciplina encontrada com sucesso',
      type: DisciplinaWithAlocacoesResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Disciplina não encontrada',
    }),
  );
}

export function UpdateDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Atualizar uma disciplina' }),
    ApiParam({
      name: 'id',
      description: 'ID da disciplina a ser atualizada',
      example: 1,
      type: 'number',
    }),
    ApiBody({
      type: UpdateDisciplinaDto,
      description: 'Dados para atualizar a disciplina',
      examples: {
        exemplo1: {
          value: {
            Nome: 'Teoria dos Grafos',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Disciplina atualizada com sucesso',
      type: DisciplinaResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Disciplina não encontrada',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Já existe uma disciplina com este nome',
    }),
  );
}

export function RemoveDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Remover uma disciplina' }),
    ApiParam({
      name: 'id',
      description: 'ID da disciplina a ser removida',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'Se existe, disciplina removida com sucesso',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description:
        'Não é possível deletar uma disciplina que possui alocações associadas',
    }),
  );
}
