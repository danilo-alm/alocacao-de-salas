import { Test, TestingModule } from '@nestjs/testing';
import { SalaService } from './sala.service';
import { PrismaClient } from '@prisma/client';
import { EntityDoesNotExistException } from '../common/exceptions/entity-does-not-exist-exception';
import { EntityExistsException } from '../common/exceptions/entity-exists-exception';
import { EntityHasDependantsException } from '../common/exceptions/entity-has-dependants-exception.ts';

jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    sala: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };
  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
  };
});

describe('SalaService', () => {
  let service: SalaService;
  let prisma: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalaService],
    }).compile();

    service = module.get<SalaService>(SalaService);
    prisma = new PrismaClient();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should call prisma.sala.findMany with correct parameters', async () => {
      await service.findAll();
      
      expect(prisma.sala.findMany).toHaveBeenCalledWith({
        include: {
          Tipo: true,
          Bloco: true,
        },
      });
      expect(prisma.sala.findMany).toHaveBeenCalledTimes(1);
    });

    it('should propagate database errors', async () => {
      const dbError = new Error('Database connection failed');
      (prisma.sala.findMany as jest.Mock).mockRejectedValue(dbError);

      await expect(service.findAll()).rejects.toThrow(dbError);
    });
  });

  describe('findOne', () => {
    it('should call prisma.sala.findUnique with correct parameters', async () => {
      await service.findOne(1);
      
      expect(prisma.sala.findUnique).toHaveBeenCalledWith({
        where: { Id: 1 },
        include: {
          Tipo: true,
          Bloco: true,
          Alocacoes: true,
        },
      });
      expect(prisma.sala.findUnique).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityDoesNotExistException when sala is not found', async () => {
      (prisma.sala.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(prisma.sala.findUnique).toHaveBeenCalledTimes(1);
    });

    it('should propagate database errors', async () => {
      const dbError = new Error('Database connection failed');
      (prisma.sala.findUnique as jest.Mock).mockRejectedValue(dbError);

      await expect(service.findOne(1)).rejects.toThrow(dbError);
    });
  });

  describe('create', () => {
    const createSalaDto = {
      Codigo: 'SALA1',
      TipoId: 1,
      BlocoId: 1,
      Capacidade: 30,
    };

    it('should call prisma.sala.create with correct parameters', async () => {
      await service.create(createSalaDto);
      
      expect(prisma.sala.create).toHaveBeenCalledWith({
        data: createSalaDto,
      });
      expect(prisma.sala.create).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityExistsException when sala code already exists', async () => {
      const error = {
        code: 'P2002',
        message: 'Unique constraint failed',
      };

      (prisma.sala.create as jest.Mock).mockRejectedValue(error);

      await expect(service.create(createSalaDto)).rejects.toThrow(EntityExistsException);
      expect(prisma.sala.create).toHaveBeenCalledTimes(1);
    });

    it('should propagate other database errors', async () => {
      const dbError = new Error('Database connection failed');
      (prisma.sala.create as jest.Mock).mockRejectedValue(dbError);

      await expect(service.create(createSalaDto)).rejects.toThrow(dbError);
    });
  });

  describe('update', () => {
    const updateSalaDto = {
      Codigo: 'SALA1_UPDATED',
      TipoId: 1,
      BlocoId: 1,
      Capacidade: 40,
    };

    it('should call prisma.sala.update with correct parameters', async () => {
      await service.update(1, updateSalaDto);
      
      expect(prisma.sala.update).toHaveBeenCalledWith({
        where: { Id: 1 },
        data: updateSalaDto,
      });
      expect(prisma.sala.update).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityExistsException when sala code already exists', async () => {
      const error = {
        code: 'P2002',
        message: 'Unique constraint failed',
      };

      (prisma.sala.update as jest.Mock).mockRejectedValue(error);

      await expect(service.update(1, updateSalaDto)).rejects.toThrow(EntityExistsException);
      expect(prisma.sala.update).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityDoesNotExistException when sala is not found', async () => {
      const error = {
        code: 'P2025',
        message: 'Record not found',
      };

      (prisma.sala.update as jest.Mock).mockRejectedValue(error);

      await expect(service.update(999, updateSalaDto)).rejects.toThrow(EntityDoesNotExistException);
      expect(prisma.sala.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate other database errors', async () => {
      const dbError = new Error('Database connection failed');
      (prisma.sala.update as jest.Mock).mockRejectedValue(dbError);

      await expect(service.update(1, updateSalaDto)).rejects.toThrow(dbError);
    });
  });

  describe('remove', () => {
    it('should call prisma.sala.delete with correct parameters', async () => {
      await service.remove(1);
      
      expect(prisma.sala.delete).toHaveBeenCalledWith({
        where: { Id: 1 },
      });
      expect(prisma.sala.delete).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityDoesNotExistException when sala is not found', async () => {
      const error = {
        code: 'P2025',
        message: 'Record not found',
      };

      (prisma.sala.delete as jest.Mock).mockRejectedValue(error);

      await expect(service.remove(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(prisma.sala.delete).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityHasDependantsException when sala has associated allocations', async () => {
      const error = {
        code: 'P2014',
        message: 'Foreign key constraint failed',
      };

      (prisma.sala.delete as jest.Mock).mockRejectedValue(error);

      await expect(service.remove(1)).rejects.toThrow(EntityHasDependantsException);
      expect(prisma.sala.delete).toHaveBeenCalledTimes(1);
    });

    it('should propagate other database errors', async () => {
      const dbError = new Error('Database connection failed');
      (prisma.sala.delete as jest.Mock).mockRejectedValue(dbError);

      await expect(service.remove(1)).rejects.toThrow(dbError);
    });
  });
}); 