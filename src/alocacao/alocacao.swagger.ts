import { applyDecorators } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { AlocacaoResponseDto } from './dto/alocacao-response.dto';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';

export function CreateDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Criar uma nova alocação' }),
    ApiBody({
      type: CreateAlocacaoDto,
      description: 'Dados para criar uma nova alocação',
      examples: {
        alocacaoRecorrente: {
          summary: 'Alocação recorrente (Segunda-feira)',
          value: {
            SalaId: 1,
            DiaDaSemana: 1,
            HoraInicio: '08:00',
            HoraFim: '10:00',
          },
        },
        alocacaoDataFixa: {
          summary: 'Alocação com data específica',
          value: {
            SalaId: 1,
            Data: '2025-06-15',
            HoraInicio: '14:00',
            HoraFim: '16:00',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Alocação criada com sucesso',
      type: AlocacaoResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description:
        'Dados inválidos ou alocação em data passada (mensagem de erro será mais descritiva)',
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Sala não encontrada',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Conflito de horários com outra alocação',
    }),
  );
}

export function FindAllDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Listar todas as alocações' }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Lista de alocações retornada com sucesso',
      type: [AlocacaoResponseDto],
    }),
  );
}

export function FindOneDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Buscar uma alocação por ID' }),
    ApiParam({
      name: 'id',
      description: 'ID da alocação',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Alocação encontrada com sucesso',
      type: AlocacaoResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Alocação não encontrada',
    }),
  );
}

export function UpdateDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Atualizar uma alocação' }),
    ApiParam({
      name: 'id',
      description: 'ID da alocação a ser atualizada',
      example: 1,
      type: 'number',
    }),
    ApiBody({
      type: UpdateAlocacaoDto,
      description: 'Dados para atualizar a alocação',
      examples: {
        atualizarHorario: {
          summary: 'Atualizar horário',
          value: {
            HoraInicio: '09:00',
            HoraFim: '11:00',
          },
        },
        trocarSala: {
          summary: 'Trocar de sala',
          value: {
            SalaId: 2,
          },
        },
        atualizarData: {
          summary: 'Atualizar data específica',
          value: {
            Data: '2025-06-20',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Alocação atualizada com sucesso',
      type: AlocacaoResponseDto,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Dados inválidos para atualização',
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Alocação não encontrada',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'Conflito de horários com outra alocação',
    }),
  );
}

export function RemoveDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Remover uma alocação' }),
    ApiParam({
      name: 'id',
      description: 'ID da alocação a ser removida',
      example: 1,
      type: 'number',
    }),
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'Alocação removida com sucesso (se existir)',
    }),
  );
}
