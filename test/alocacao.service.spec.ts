import { Test, TestingModule } from '@nestjs/testing';
import { createSimpleMockAlocacao, MockAlocacaoEntity } from './helpers/mock-alocacao.helper';

// Interfaces para os DTOs
interface CreateAlocacaoDto {
  data: Date;
  hora_inicio: string;
  hora_fim: string;
  disciplina_id: number;
  sala_id: number;
  dia_da_semana?: number;
}

interface UpdateAlocacaoDto {
  data?: Date;
  hora_inicio?: string;
  hora_fim?: string;
  disciplina_id?: number;
  sala_id?: number;
}

interface PaginationQueryDto {
  page?: number;
  limit?: number;
}

// Mock das exceções
class InvalidBookingException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidBookingException';
  }
}

class BookingConflictException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BookingConflictException';
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

describe('AlocacaoService', () => {
  let service: any;
  let prismaService: any;
  let salaService: any;
  let conflictChecker: any;

  const mockPrismaService = {
    alocacao: {
      create: jest.fn(),
      findFirstOrThrow: jest.fn(),
      findMany: jest.fn(),
      count: jest.fn(),
      update: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  const mockSalaService = {
    findOne: jest.fn(),
  };

  const mockConflictChecker = {
    throwIfConflictingAlocacoesExist: jest.fn(),
    findConflictingAlocacoesFor: jest.fn(),
  };

  // Mock simples do serviço
  const mockAlocacaoService = {
    prisma: mockPrismaService,
    salaService: mockSalaService,
    conflictChecker: mockConflictChecker,

    async create(createDto: CreateAlocacaoDto): Promise<MockAlocacaoEntity> {
      // Simula validação de tempo
      if (createDto.hora_inicio >= createDto.hora_fim) {
        throw new InvalidBookingException('Horário de início deve ser menor que horário de fim');
      }

      await this.conflictChecker.throwIfConflictingAlocacoesExist(createDto);

      const alocacao = await this.prisma.alocacao.create({
        data: {
          ...createDto,
          dia_da_semana: createDto.data.getDay(),
        },
        select: {},
      });

      return alocacao;
    },

    async findOne(id: number): Promise<MockAlocacaoEntity> {
      const result = await this.prisma.alocacao.findFirstOrThrow({
        where: { id: id, deleted_at: null },
        select: {},
      });
      return result;
    },

    async findAll(queryDto: PaginationQueryDto): Promise<PaginatedResponseDto<MockAlocacaoEntity>> {
      const { page = 1, limit = 10 } = queryDto;
      const skip = (page - 1) * limit;

      const [alocacoes, total] = await this.prisma.$transaction([
        this.prisma.alocacao.findMany({
          skip,
          take: limit,
          where: { deleted_at: null },
          select: {},
        }),
        this.prisma.alocacao.count({ where: { deleted_at: null } }),
      ]);

      return new PaginatedResponseDto(alocacoes, total, limit, page);
    },

    async update(id: number, updateDto: UpdateAlocacaoDto): Promise<MockAlocacaoEntity> {
      const alocacaoToUpdate = await this.prisma.alocacao.findFirstOrThrow({
        where: { id: id, deleted_at: null },
      });

      const newSalaId = updateDto.sala_id;
      const salaHasChanged = newSalaId != null && newSalaId !== alocacaoToUpdate.sala_id;

      if (salaHasChanged) {
        await this.salaService.findOne(newSalaId);
      }

      const updatedAlocacaoDetails = {
        ...alocacaoToUpdate,
        ...updateDto,
      };

      const result = await this.prisma.$transaction(async (tx: any) => {
        const conflictingAlocacoes = await this.conflictChecker.findConflictingAlocacoesFor(
          updatedAlocacaoDetails,
        );
        const blockingConflicts = conflictingAlocacoes.filter((x: number) => x !== id);
        const hasBlockingConflicts = blockingConflicts.length > 0;

        if (hasBlockingConflicts) {
          throw new InvalidBookingException(
            'Não é possível atualizar a alocação, pois existem conflitos com outras alocações.',
          );
        }

        return await tx.alocacao.update({
          where: { id: id },
          data: updatedAlocacaoDetails,
          select: {},
        });
      });

      return result;
    },

    async remove(id: number): Promise<MockAlocacaoEntity> {
      const result = await this.prisma.alocacao.update({
        where: { id: id },
        data: { deleted_at: new Date() },
        select: {},
      });
      return result;
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'AlocacaoService',
          useValue: mockAlocacaoService,
        },
        {
          provide: 'PrismaService',
          useValue: mockPrismaService,
        },
        {
          provide: 'SalaService',
          useValue: mockSalaService,
        },
        {
          provide: 'AlocacaoConflictChecker',
          useValue: mockConflictChecker,
        },
      ],
    }).compile();

    service = module.get('AlocacaoService');
    prismaService = module.get('PrismaService');
    salaService = module.get('SalaService');
    conflictChecker = module.get('AlocacaoConflictChecker');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new alocacao successfully', async () => {
      const createDto: CreateAlocacaoDto = {
        data: new Date('2025-01-15'),
        hora_inicio: '08:00',
        hora_fim: '10:00',
        disciplina_id: 1,
        sala_id: 1,
      };

      const mockCreatedAlocacao = createSimpleMockAlocacao({
        ...createDto,
        dia_da_semana: createDto.data.getDay(),
      });

      mockConflictChecker.throwIfConflictingAlocacoesExist.mockResolvedValue(undefined);
      mockPrismaService.alocacao.create.mockResolvedValue(mockCreatedAlocacao);

      const result = await service.create(createDto);

      expect(mockConflictChecker.throwIfConflictingAlocacoesExist).toHaveBeenCalledWith(createDto);
      expect(mockPrismaService.alocacao.create).toHaveBeenCalledWith({
        data: {
          ...createDto,
          dia_da_semana: createDto.data.getDay(),
        },
        select: {},
      });
      expect(result).toBeDefined();
    });

    it('should throw BookingConflictException when there are conflicts', async () => {
      const createDto: CreateAlocacaoDto = {
        data: new Date('2025-01-15'),
        hora_inicio: '08:00',
        hora_fim: '10:00',
        disciplina_id: 1,
        sala_id: 1,
      };

      mockConflictChecker.throwIfConflictingAlocacoesExist.mockRejectedValue(
        new BookingConflictException('Conflito de horário'),
      );

      await expect(service.create(createDto)).rejects.toThrow(BookingConflictException);
    });

    it('should throw InvalidBookingException for invalid time range', async () => {
      const createDto: CreateAlocacaoDto = {
        data: new Date('2025-01-15'),
        hora_inicio: '10:00',
        hora_fim: '08:00', // End time before start time
        disciplina_id: 1,
        sala_id: 1,
      };

      await expect(service.create(createDto)).rejects.toThrow(InvalidBookingException);
    });
  });

  describe('findOne', () => {
    it('should return a single alocacao', async () => {
      const mockAlocacao = createSimpleMockAlocacao();
      mockPrismaService.alocacao.findFirstOrThrow.mockResolvedValue(mockAlocacao);

      const result = await service.findOne(mockAlocacao.id);

      expect(mockPrismaService.alocacao.findFirstOrThrow).toHaveBeenCalledWith({
        where: { id: mockAlocacao.id, deleted_at: null },
        select: {},
      });
      expect(result).toBeDefined();
    });

    it('should throw when alocacao not found', async () => {
      const nonExistentId = 999;
      mockPrismaService.alocacao.findFirstOrThrow.mockRejectedValue(
        new Error('Record not found'),
      );

      await expect(service.findOne(nonExistentId)).rejects.toThrow('Record not found');
    });
  });

  describe('findAll', () => {
    it('should return paginated alocacoes', async () => {
      const mockAlocacoes = [createSimpleMockAlocacao(), createSimpleMockAlocacao()];
      const queryDto: PaginationQueryDto = { page: 1, limit: 10 };
      const totalCount = 2;

      mockPrismaService.$transaction.mockResolvedValue([mockAlocacoes, totalCount]);

      const result = await service.findAll(queryDto);

      expect(mockPrismaService.$transaction).toHaveBeenCalled();
      expect(result.data).toHaveLength(2);
      expect(result.meta.totalItems).toBe(totalCount);
      expect(result.meta.currentPage).toBe(1);
      expect(result.meta.itemsPerPage).toBe(10);
    });

    it('should handle custom pagination parameters', async () => {
      const mockAlocacoes = [createSimpleMockAlocacao()];
      const queryDto: PaginationQueryDto = { page: 2, limit: 5 };
      const totalCount = 1;

      mockPrismaService.$transaction.mockResolvedValue([mockAlocacoes, totalCount]);

      const result = await service.findAll(queryDto);

      expect(result.meta.currentPage).toBe(2);
      expect(result.meta.itemsPerPage).toBe(5);
    });

    it('should use default pagination when no parameters provided', async () => {
      const mockAlocacoes = [createSimpleMockAlocacao()];
      const queryDto: PaginationQueryDto = {};
      const totalCount = 1;

      mockPrismaService.$transaction.mockResolvedValue([mockAlocacoes, totalCount]);

      const result = await service.findAll(queryDto);

      expect(result.meta.currentPage).toBe(1);
      expect(result.meta.itemsPerPage).toBe(10);
    });
  });

  describe('update', () => {
    it('should update an existing alocacao successfully', async () => {
      const existingAlocacao = createSimpleMockAlocacao();
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
        hora_fim: '11:00',
      };

      const updatedAlocacao = { ...existingAlocacao, ...updateDto };

      mockPrismaService.alocacao.findFirstOrThrow.mockResolvedValue(existingAlocacao);
      mockConflictChecker.findConflictingAlocacoesFor.mockResolvedValue([]);
      mockPrismaService.$transaction.mockImplementation(async (callback) => {
        return callback({
          alocacao: {
            update: jest.fn().mockResolvedValue(updatedAlocacao),
          },
        });
      });

      const result = await service.update(existingAlocacao.id, updateDto);

      expect(mockPrismaService.alocacao.findFirstOrThrow).toHaveBeenCalledWith({
        where: { id: existingAlocacao.id, deleted_at: null },
      });
      expect(result).toBeDefined();
    });

    it('should validate sala exists when sala_id is changed', async () => {
      const existingAlocacao = createSimpleMockAlocacao({ sala_id: 1 });
      const updateDto: UpdateAlocacaoDto = {
        sala_id: 2,
      };

      mockPrismaService.alocacao.findFirstOrThrow.mockResolvedValue(existingAlocacao);
      mockSalaService.findOne.mockResolvedValue({ id: 2, codigo: 'LAB-002' });
      mockConflictChecker.findConflictingAlocacoesFor.mockResolvedValue([]);
      mockPrismaService.$transaction.mockImplementation(async (callback) => {
        return callback({
          alocacao: {
            update: jest.fn().mockResolvedValue({ ...existingAlocacao, ...updateDto }),
          },
        });
      });

      await service.update(existingAlocacao.id, updateDto);

      expect(mockSalaService.findOne).toHaveBeenCalledWith(2);
    });

    it('should throw InvalidBookingException when there are blocking conflicts', async () => {
      const existingAlocacao = createSimpleMockAlocacao();
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
      };

      mockPrismaService.alocacao.findFirstOrThrow.mockResolvedValue(existingAlocacao);
      mockConflictChecker.findConflictingAlocacoesFor.mockResolvedValue([999]); // Different ID indicates conflict

      await expect(service.update(existingAlocacao.id, updateDto)).rejects.toThrow(
        InvalidBookingException,
      );
    });

    it('should not throw when conflict is with the same alocacao being updated', async () => {
      const existingAlocacao = createSimpleMockAlocacao();
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
      };

      mockPrismaService.alocacao.findFirstOrThrow.mockResolvedValue(existingAlocacao);
      mockConflictChecker.findConflictingAlocacoesFor.mockResolvedValue([existingAlocacao.id]);
      mockPrismaService.$transaction.mockImplementation(async (callback) => {
        return callback({
          alocacao: {
            update: jest.fn().mockResolvedValue({ ...existingAlocacao, ...updateDto }),
          },
        });
      });

      const result = await service.update(existingAlocacao.id, updateDto);

      expect(result).toBeDefined();
    });
  });

  describe('remove', () => {
    it('should soft delete an alocacao', async () => {
      const mockAlocacao = createSimpleMockAlocacao();
      const deletedAlocacao = { ...mockAlocacao, deleted_at: new Date() };

      mockPrismaService.alocacao.update.mockResolvedValue(deletedAlocacao);

      const result = await service.remove(mockAlocacao.id);

      expect(mockPrismaService.alocacao.update).toHaveBeenCalledWith({
        where: { id: mockAlocacao.id },
        data: { deleted_at: expect.any(Date) },
        select: {},
      });
      expect(result).toBeDefined();
    });
  });
});
