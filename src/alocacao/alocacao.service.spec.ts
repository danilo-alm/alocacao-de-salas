import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { SalaService } from '../sala/sala.service';
import { AlocacaoService } from './alocacao.service';
import { AlocacaoConflictChecker } from './conflict/alocacao-conflict-checker';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';
import { InvalidBookingException } from './exceptions/invalid-booking-exception';
import { BookingConflictException } from './exceptions/booking-conflict-exception';
import { createMockAlocacao } from '../../test/factories/alocacao.factory';
import { createMockSala } from '../../test/factories/sala.factory';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';

describe('AlocacaoService', () => {
  let service: AlocacaoService;
  let prismaService: jest.Mocked<PrismaService>;
  let salaService: jest.Mocked<SalaService>;
  let conflictChecker: jest.Mocked<AlocacaoConflictChecker>;

  const mockPrismaTransaction = jest.fn();

  beforeEach(async () => {
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

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlocacaoService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: SalaService,
          useValue: mockSalaService,
        },
        {
          provide: AlocacaoConflictChecker,
          useValue: mockConflictChecker,
        },
      ],
    }).compile();

    service = module.get<AlocacaoService>(AlocacaoService);
    prismaService = module.get(PrismaService);
    salaService = module.get(SalaService);
    conflictChecker = module.get(AlocacaoConflictChecker);

    // Reset all mocks
    jest.clearAllMocks();

    // Setup default transaction behavior
    prismaService.$transaction.mockImplementation((callback) => {
      return callback({
        alocacao: {
          update: mockPrismaTransaction,
        },
      });
    });
  });

  describe('create', () => {
    it('should create alocacao with valid data', async () => {
      const mockAlocacao = createMockAlocacao();
      const createDto: CreateAlocacaoDto = {
        disciplina_id: 1,
        sala_id: 1,
        dia_da_semana: 1,
        hora_inicio: '08:00',
        hora_fim: '10:00',
      };

      conflictChecker.throwIfConflictingAlocacoesExist.mockResolvedValue();
      prismaService.alocacao.create.mockResolvedValue(mockAlocacao);

      const result = await service.create(createDto);

      expect(conflictChecker.throwIfConflictingAlocacoesExist).toHaveBeenCalledWith(
        createDto,
      );
      expect(prismaService.alocacao.create).toHaveBeenCalledWith({
        data: {
          ...createDto,
          dia_da_semana: createDto.dia_da_semana,
        },
        select: expect.any(Object),
      });
      expect(result).toBeDefined();
    });

    it('should create alocacao with date and set weekday automatically', async () => {
      const mockAlocacao = createMockAlocacao();
      const futureDate = new Date('2025-12-15'); // Monday
      const createDto: CreateAlocacaoDto = {
        disciplina_id: 1,
        sala_id: 1,
        data: futureDate,
        hora_inicio: '08:00',
        hora_fim: '10:00',
      };

      conflictChecker.throwIfConflictingAlocacoesExist.mockResolvedValue();
      prismaService.alocacao.create.mockResolvedValue(mockAlocacao);

      await service.create(createDto);

      expect(createDto.dia_da_semana).toBe(1); // Monday
    });

    it('should throw error when both date and weekday are provided', async () => {
      const createDto: CreateAlocacaoDto = {
        disciplina_id: 1,
        sala_id: 1,
        data: new Date('2025-12-15'),
        dia_da_semana: 1,
        hora_inicio: '08:00',
        hora_fim: '10:00',
      };

      await expect(service.create(createDto)).rejects.toThrow(
        InvalidBookingException,
      );
    });

    it('should throw error when neither date nor weekday are provided', async () => {
      const createDto: CreateAlocacaoDto = {
        disciplina_id: 1,
        sala_id: 1,
        hora_inicio: '08:00',
        hora_fim: '10:00',
      };

      await expect(service.create(createDto)).rejects.toThrow(
        InvalidBookingException,
      );
    });

    it('should throw error when start time is after end time', async () => {
      const createDto: CreateAlocacaoDto = {
        disciplina_id: 1,
        sala_id: 1,
        dia_da_semana: 1,
        hora_inicio: '10:00',
        hora_fim: '08:00',
      };

      await expect(service.create(createDto)).rejects.toThrow(
        InvalidBookingException,
      );
    });

    it('should throw error when date is in the past', async () => {
      const pastDate = new Date('2020-01-01');
      const createDto: CreateAlocacaoDto = {
        disciplina_id: 1,
        sala_id: 1,
        data: pastDate,
        hora_inicio: '08:00',
        hora_fim: '10:00',
      };

      await expect(service.create(createDto)).rejects.toThrow(
        InvalidBookingException,
      );
    });

    it('should throw error when weekday is invalid', async () => {
      const createDto: CreateAlocacaoDto = {
        disciplina_id: 1,
        sala_id: 1,
        dia_da_semana: 7, // Invalid weekday
        hora_inicio: '08:00',
        hora_fim: '10:00',
      };

      await expect(service.create(createDto)).rejects.toThrow(
        InvalidBookingException,
      );
    });

    it('should throw error when there are conflicts', async () => {
      const createDto: CreateAlocacaoDto = {
        disciplina_id: 1,
        sala_id: 1,
        dia_da_semana: 1,
        hora_inicio: '08:00',
        hora_fim: '10:00',
      };

      conflictChecker.throwIfConflictingAlocacoesExist.mockRejectedValue(
        new BookingConflictException('Conflict detected'),
      );

      await expect(service.create(createDto)).rejects.toThrow(BookingConflictException);
    });
  });

  describe('findOne', () => {
    it('should return alocacao when found', async () => {
      const mockAlocacao = createMockAlocacao();
      prismaService.alocacao.findFirstOrThrow.mockResolvedValue(mockAlocacao);

      const result = await service.findOne(1);

      expect(prismaService.alocacao.findFirstOrThrow).toHaveBeenCalledWith({
        where: { id: 1, deleted_at: null },
        select: expect.any(Object),
      });
      expect(result).toBeDefined();
    });

    it('should throw error when alocacao not found', async () => {
      prismaService.alocacao.findFirstOrThrow.mockRejectedValue(new Error('Not found'));

      await expect(service.findOne(999)).rejects.toThrow();
    });
  });

  describe('findAll', () => {
    it('should return paginated alocacoes', async () => {
      const mockAlocacoes = [createMockAlocacao(), createMockAlocacao()];
      prismaService.$transaction.mockResolvedValue([mockAlocacoes, 2]);

      const queryDto = { page: 1, limit: 10 };
      const result = await service.findAll(queryDto);

      expect(result).toBeInstanceOf(PaginatedResponseDto);
      expect(result.data).toHaveLength(2);
      expect(result.total).toBe(2);
    });

    it('should handle pagination correctly', async () => {
      const mockAlocacoes = [createMockAlocacao()];
      prismaService.$transaction.mockResolvedValue([mockAlocacoes, 15]);

      const queryDto = { page: 2, limit: 5 };
      await service.findAll(queryDto);

      // Verify skip calculation: (page - 1) * limit = (2 - 1) * 5 = 5
      expect(prismaService.$transaction).toHaveBeenCalledWith([
        expect.objectContaining({
          skip: 5,
          take: 5,
        }),
        expect.any(Object),
      ]);
    });
  });

  describe('update', () => {
    const mockExistingAlocacao = createMockAlocacao({ id: 1, sala_id: 1 });

    beforeEach(() => {
      prismaService.alocacao.findFirstOrThrow.mockResolvedValue(mockExistingAlocacao);
    });

    it('should update alocacao successfully', async () => {
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
        hora_fim: '11:00',
      };

      conflictChecker.findConflictingAlocacoesFor.mockResolvedValue([]);
      mockPrismaTransaction.mockResolvedValue(mockExistingAlocacao);

      const result = await service.update(1, updateDto);

      expect(prismaService.alocacao.findFirstOrThrow).toHaveBeenCalledWith({
        where: { id: 1, deleted_at: null },
      });
      expect(result).toBeDefined();
    });

    it('should validate sala exists when sala_id changes', async () => {
      const mockSala = createMockSala({ id: 2 });
      const updateDto: UpdateAlocacaoDto = {
        sala_id: 2,
      };

      salaService.findOne.mockResolvedValue(mockSala);
      conflictChecker.findConflictingAlocacoesFor.mockResolvedValue([]);
      mockPrismaTransaction.mockResolvedValue(mockExistingAlocacao);

      await service.update(1, updateDto);

      expect(salaService.findOne).toHaveBeenCalledWith(2);
    });

    it('should not validate sala when sala_id does not change', async () => {
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
      };

      conflictChecker.findConflictingAlocacoesFor.mockResolvedValue([]);
      mockPrismaTransaction.mockResolvedValue(mockExistingAlocacao);

      await service.update(1, updateDto);

      expect(salaService.findOne).not.toHaveBeenCalled();
    });

    it('should throw error when update creates conflicts', async () => {
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
        hora_fim: '11:00',
      };

      conflictChecker.findConflictingAlocacoesFor.mockResolvedValue([1, 2]); // Current ID + conflicting ID

      await expect(service.update(1, updateDto)).rejects.toThrow(InvalidBookingException);
    });

    it('should allow update when only conflict is with itself', async () => {
      const updateDto: UpdateAlocacaoDto = {
        hora_inicio: '09:00',
        hora_fim: '11:00',
      };

      conflictChecker.findConflictingAlocacoesFor.mockResolvedValue([1]); // Only current ID
      mockPrismaTransaction.mockResolvedValue(mockExistingAlocacao);

      const result = await service.update(1, updateDto);

      expect(result).toBeDefined();
    });
  });

  describe('remove', () => {
    it('should soft delete alocacao', async () => {
      const mockAlocacao = createMockAlocacao();
      prismaService.alocacao.update.mockResolvedValue(mockAlocacao);

      const result = await service.remove(1);

      expect(prismaService.alocacao.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { deleted_at: expect.any(Date) },
        select: expect.any(Object),
      });
      expect(result).toBeDefined();
    });
  });
});
