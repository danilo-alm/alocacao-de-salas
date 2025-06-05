import { applyDecorators, Delete, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { AlocacaoResponseDto } from './dto/alocacao-response.dto';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';

export function CreateDocs() {
  return applyDecorators(
    Post(),
    ApiOperation({ summary: 'Criar uma nova alocação' }),
    ApiBody({
      type: CreateAlocacaoDto,
      description: 'Dados para criar uma nova alocação',
      examples: {
        exemplo1: {
          value: {
            Data: '2024-03-20',
            HoraInicio: '08:00',
            HoraFim: '10:00',
            Fixa: true,
            DisciplinaId: 1,
            SalaId: 1,
          },
        },
      },
    }),
    ApiResponse({
      status: 201,
      description: 'Alocação criada com sucesso',
      type: AlocacaoResponseDto,
    }),
    ApiResponse({
      status: 409,
      description: 'Esta sala já está alocada neste horário',
    }),
  );
}

export function FindAllDocs() {
  return applyDecorators(
    Get(),
    ApiOperation({ summary: 'Listar todas as alocações' }),
    ApiResponse({
      status: 200,
      description: 'Lista de alocações retornada com sucesso',
      type: [AlocacaoResponseDto],
    }),
  );
}

export function FindOneDocs() {
  return applyDecorators(
    Get(':id'),
    ApiOperation({ summary: 'Buscar uma alocação específica' }),
    ApiParam({
      name: 'id',
      description: 'ID da alocação',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: 200,
      description: 'Alocação encontrada com sucesso',
      type: AlocacaoResponseDto,
    }),
    ApiResponse({
      status: 404,
      description: 'Alocação não encontrada',
    }),
  );
}

export function RemoveDocs() {
  return applyDecorators(
    Delete(':id'),
    ApiOperation({ summary: 'Remover uma alocação' }),
    ApiParam({
      name: 'id',
      description: 'ID da alocação',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: 200,
      description: 'Alocação removida com sucesso',
      type: AlocacaoResponseDto,
    }),
    ApiResponse({
      status: 404,
      description: 'Alocação não encontrada',
    }),
  );
}
