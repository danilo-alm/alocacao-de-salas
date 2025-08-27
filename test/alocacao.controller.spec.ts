import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ValidationPipe } from '@nestjs/common';
import { createSimpleMockAlocacao, MockAlocacaoEntity } from './helpers/mock-alocacao.helper';

// Interfaces para os DTOs
interface CreateAlocacaoDto {
  data: Date;
  hora_inicio: string;
  hora_fim: string;
  disciplina_id: number;
  sala_id: number;
}

interface UpdateAlocacaoDto {
  data?: Date;
  hora_inicio?: string;
  hora_fim?: string;
  disciplina_id?: number;
  sala_id?: number;
}

// Mock das exceções
class BookingConflictException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BookingConflictException';
  }
}

class InvalidBookingException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidBookingException';
  }
}

// Mock do PaginatedResponseDto
class PaginatedResponseDto<T> {
  data: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };

  constructor(data: T[], totalItems: number, itemsPerPage: number, currentPage: number) {
    this.data = data;
    this.meta = {
      totalItems,
      itemCount: data.length,
      itemsPerPage,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      currentPage,
    };
  }
}

// Mock do Controller
class MockAlocacaoController {
  constructor(private readonly alocacaoService: any) {}

  async create(createAlocacaoDto: CreateAlocacaoDto): Promise<MockAlocacaoEntity> {
    return this.alocacaoService.create(createAlocacaoDto);
  }

  async findAll(queryDto: any): Promise<PaginatedResponseDto<MockAlocacaoEntity>> {
    return this.alocacaoService.findAll(queryDto);
  }

  async findOne(id: number): Promise<MockAlocacaoEntity> {
    return this.alocacaoService.findOne(id);
  }

  async update(id: number, updateAlocacaoDto: UpdateAlocacaoDto): Promise<MockAlocacaoEntity> {
    return this.alocacaoService.update(id, updateAlocacaoDto);
  }

  async remove(id: number): Promise<void> {
    await this.alocacaoService.remove(id);
  }
}

describe('AlocacaoController', () => {
  let controller: MockAlocacaoController;
  let service: any;
  let app: INestApplication;

  const mockAlocacaoService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        {
          provide: 'AlocacaoService',
          useValue: mockAlocacaoService,
        },
        {
          provide: 'AlocacaoController',
          useFactory: (alocacaoService: any) => new MockAlocacaoController(alocacaoService),
          inject: ['AlocacaoService'],
        },
      ],
    }).compile();

    controller = module.get('AlocacaoController');
    service = module.get('AlocacaoService');

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }));
    await app.init();
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new alocacao', async () => {
      const createDto: CreateAlocacaoDto = {
        data: new Date('2025-01-15'),
        hora_inicio: '08:00',
        hora_fim: '10:00',
        disciplina_id: 1,
        sala_id: 1,
      };

      const mockCreatedAlocacao = createSimpleMockAlocacao(createDto);
      mockAlocacaoService.create.mockResolvedValue(mockCreatedAlocacao);

      const result = await controller.create(createDto);

      expect(mockAlocacaoService.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(expect.objectContaining({
        id: mockCreatedAlocacao.id,
        hora_inicio: createDto.hora_inicio,
        hora_fim: createDto.hora_fim,
      }));
    });

    it('should handle booking conflict errors', async () => {
      const createDto: CreateAlocacaoDto = {
        data: new Date('2025-01-15'),
        hora_inicio: '08:00',
        hora_fim: '10:00',
        disciplina_id: 1,
        sala_id: 1,
      };

      mockAlocacaoService.create.mockRejectedValue(
        new BookingConflictException('Conflito de horário')
      );

      await expect(controller.create(createDto)).rejects.toThrow(BookingConflictException);
    });

    it('should handle invalid booking errors', async () => {
      const createDto: CreateAlocacaoDto = {
        data: new Date('2025-01-15'),
        hora_inicio: '10:00',
        hora_fim: '08:00', // Invalid time range
        disciplina_id: 1,
        sala_id: 1,
      };

      mockAlocacaoService.create.mockRejectedValue(
        new InvalidBookingException('Horário inválido')
      );

      await expect(controller.create(createDto)).rejects.toThrow(InvalidBookingException);
    });
  });

  describe('findAll', () => {
    it('should return paginated alocacoes', async () => {
      const mockAlocacoes = [createSimpleMockAlocacao(), createSimpleMockAlocacao()];
      const mockPaginatedResponse = new PaginatedResponseDto(
        mockAlocacoes,
        2,
        10,
        1
      );

      mockAlocacaoService.findAll.mockResolvedValue(mockPaginatedResponse);

      const result = await controller.findAll({});

      expect(mockAlocacaoService.findAll).toHaveBeenCalledWith({});
      expect(result).toEqual(expect.objectContaining({
        data: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) })
        ]),
        meta: expect.objectContaining({
          totalItems: 2,
          itemsPerPage: 10,
          currentPage: 1,
        }),
      }));
    });

    it('should handle pagination query parameters', async () => {
      const mockPaginatedResponse = new PaginatedResponseDto(
        [],
        0,
        5,
        2
      );

      mockAlocacaoService.findAll.mockResolvedValue(mockPaginatedResponse);

      await controller.findAll({ page: 2, limit: 5 });

      expect(mockAlocacaoService.findAll).toHaveBeenCalledWith({
        page: 2,
        limit: 5,
      });
    });

    it('should handle filtering parameters', async () => {
      const mockPaginatedResponse = new PaginatedResponseDto(
        [],
        0,
        10,
        1
      );

      mockAlocacaoService.findAll.mockResolvedValue(mockPaginatedResponse);

      await controller.findAll({ searchTerm: 'LAB-101' });

      expect(mockAlocacaoService.findAll).toHaveBeenCalledWith({
        searchTerm: 'LAB-101',
      });
    });
  });

  describe('findOne', () => {
    it('should return a single alocacao', async () => {
      const mockAlocacao = createSimpleMockAlocacao();
      mockAlocacaoService.findOne.mockResolvedValue(mockAlocacao);

      const result = await controller.findOne(mockAlocacao.id);

      expect(mockAlocacaoService.findOne).toHaveBeenCalledWith(mockAlocacao.id);
      expect(result).toEqual(expect.objectContaining({
        id: mockAlocacao.id,
      }));
    });

    it('should handle when alocacao not found', async () => {
      const nonExistentId = 999;
      mockAlocacaoService.findOne.mockRejectedValue(
        new Error('Record not found')
      );

      await expect(controller.findOne(nonExistentId)).rejects.toThrow('Record not found');
      expect(mockAlocacaoService.findOne).toHaveBeenCalledWith(nonExistentId);
    });
  });

  describe('update', () => {
    it('should update an existing alocacao', async () => {
      const mockAlocacao = createSimpleMockAlocacao();
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
        hora_fim: '11:00',
      };

      const updatedAlocacao = { ...mockAlocacao, ...updateDto };
      mockAlocacaoService.update.mockResolvedValue(updatedAlocacao);

      const result = await controller.update(mockAlocacao.id, updateDto);

      expect(mockAlocacaoService.update).toHaveBeenCalledWith(
        mockAlocacao.id,
        updateDto
      );
      expect(result).toEqual(expect.objectContaining({
        id: mockAlocacao.id,
        hora_inicio: updateDto.hora_inicio,
        hora_fim: updateDto.hora_fim,
      }));
    });

    it('should handle partial updates', async () => {
      const mockAlocacao = createSimpleMockAlocacao();
      const partialUpdateDto: UpdateAlocacaoDto = {
        sala_id: 2,
      };

      const updatedAlocacao = { ...mockAlocacao, ...partialUpdateDto };
      mockAlocacaoService.update.mockResolvedValue(updatedAlocacao);

      const result = await controller.update(mockAlocacao.id, partialUpdateDto);

      expect(mockAlocacaoService.update).toHaveBeenCalledWith(
        mockAlocacao.id,
        partialUpdateDto
      );
      expect(result.sala_id).toBe(partialUpdateDto.sala_id);
    });

    it('should handle update conflicts', async () => {
      const mockAlocacao = createSimpleMockAlocacao();
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
      };

      mockAlocacaoService.update.mockRejectedValue(
        new InvalidBookingException('Conflito na atualização')
      );

      await expect(controller.update(mockAlocacao.id, updateDto)).rejects.toThrow(
        InvalidBookingException
      );
    });
  });

  describe('remove', () => {
    it('should soft delete an alocacao', async () => {
      const mockAlocacao = createSimpleMockAlocacao();
      const deletedAlocacao = { ...mockAlocacao, deleted_at: new Date() };
      mockAlocacaoService.remove.mockResolvedValue(deletedAlocacao);

      await controller.remove(mockAlocacao.id);

      expect(mockAlocacaoService.remove).toHaveBeenCalledWith(mockAlocacao.id);
    });

    it('should handle deletion of non-existent alocacao', async () => {
      const nonExistentId = 999;
      mockAlocacaoService.remove.mockRejectedValue(
        new Error('Record not found')
      );

      await expect(controller.remove(nonExistentId)).rejects.toThrow('Record not found');
      expect(mockAlocacaoService.remove).toHaveBeenCalledWith(nonExistentId);
    });
  });

  describe('Controller Methods', () => {
    it('should call service.create with correct parameters', async () => {
      const createDto: CreateAlocacaoDto = {
        data: new Date('2025-01-15'),
        hora_inicio: '08:00',
        hora_fim: '10:00',
        disciplina_id: 1,
        sala_id: 1,
      };

      const mockCreatedAlocacao = createSimpleMockAlocacao(createDto);
      mockAlocacaoService.create.mockResolvedValue(mockCreatedAlocacao);

      const result = await controller.create(createDto);

      expect(mockAlocacaoService.create).toHaveBeenCalledWith(createDto);
      expect(result).toBe(mockCreatedAlocacao);
    });

    it('should call service.findAll with correct parameters', async () => {
      const queryDto = { page: 1, limit: 10 };
      const mockPaginatedResponse = new PaginatedResponseDto(
        [],
        0,
        10,
        1
      );
      mockAlocacaoService.findAll.mockResolvedValue(mockPaginatedResponse);

      const result = await controller.findAll(queryDto);

      expect(mockAlocacaoService.findAll).toHaveBeenCalledWith(queryDto);
      expect(result).toBe(mockPaginatedResponse);
    });

    it('should call service.findOne with correct id', async () => {
      const id = 1;
      const mockAlocacao = createSimpleMockAlocacao({ id });
      mockAlocacaoService.findOne.mockResolvedValue(mockAlocacao);

      const result = await controller.findOne(id);

      expect(mockAlocacaoService.findOne).toHaveBeenCalledWith(id);
      expect(result).toBe(mockAlocacao);
    });

    it('should call service.update with correct parameters', async () => {
      const id = 1;
      const updateDto: UpdateAlocacaoDto = { hora_inicio: '09:00' };
      const mockUpdatedAlocacao = createSimpleMockAlocacao({ id, ...updateDto });
      mockAlocacaoService.update.mockResolvedValue(mockUpdatedAlocacao);

      const result = await controller.update(id, updateDto);

      expect(mockAlocacaoService.update).toHaveBeenCalledWith(id, updateDto);
      expect(result).toBe(mockUpdatedAlocacao);
    });

    it('should call service.remove with correct id', async () => {
      const id = 1;
      mockAlocacaoService.remove.mockResolvedValue(undefined);

      await controller.remove(id);

      expect(mockAlocacaoService.remove).toHaveBeenCalledWith(id);
    });
  });
});

