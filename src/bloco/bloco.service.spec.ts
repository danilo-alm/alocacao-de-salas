import { Test, TestingModule } from '@nestjs/testing';
import { BlocoService } from './bloco.service';
import { PrismaClient } from '../generated/prisma/client';
import { EntityDoesNotExistException } from '../common/exceptions/entity-does-not-exist-exception';
import { EntityExistsException } from '../common/exceptions/entity-exists-exception';
import { EntityHasDependantsException } from '../common/exceptions/entity-has-dependants-exception.ts';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

describe('BlocoService', () => {
  let service: BlocoService;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    prisma = mockDeep<PrismaClient>();
    
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BlocoService,
        {
          provide: PrismaClient,
          useValue: prisma,
        },
      ],
    }).compile();

    service = module.get<BlocoService>(BlocoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    const createBlocoDto = {
      Nome: 'Bloco A',
    };

    it('should call prisma.bloco.create with correct parameters', async () => {
      await service.create(createBlocoDto);
      
      expect(prisma.bloco.create).toHaveBeenCalledWith({
        data: createBlocoDto,
        include: expect.any(Object),
      });
      expect(prisma.bloco.create).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityExistsException when bloco name already exists', async () => {
      const error = {
        code: 'P2002',
        message: 'Unique constraint failed',
      };

      prisma.bloco.create.mockRejectedValueOnce(error);

      await expect(service.create(createBlocoDto)).rejects.toThrow(EntityExistsException);
      expect(prisma.bloco.create).toHaveBeenCalledTimes(1);
    });

    it('should propagate other database errors', async () => {
      const dbError = new Error('Database connection failed');
      prisma.bloco.create.mockRejectedValueOnce(dbError);

      await expect(service.create(createBlocoDto)).rejects.toThrow(dbError);
    });
  });

  describe('findAll', () => {
    it('should call prisma.bloco.findMany with correct parameters', async () => {
      await service.findAll();
      
      expect(prisma.bloco.findMany).toHaveBeenCalledWith({
        include: expect.any(Object),
      });
      expect(prisma.bloco.findMany).toHaveBeenCalledTimes(1);
    });

    it('should propagate database errors', async () => {
      const dbError = new Error('Database connection failed');
      prisma.bloco.findMany.mockRejectedValueOnce(dbError);

      await expect(service.findAll()).rejects.toThrow(dbError);
    });
  });

  describe('findOne', () => {
    it('should call prisma.bloco.findUnique with correct parameters', async () => {
      await service.findOne(1);
      
      expect(prisma.bloco.findUnique).toHaveBeenCalledWith({
        where: { Id: 1 },
        include: { Salas: true },
      });
      expect(prisma.bloco.findUnique).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityDoesNotExistException when bloco is not found', async () => {
      prisma.bloco.findUnique.mockResolvedValueOnce(null);

      await expect(service.findOne(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(prisma.bloco.findUnique).toHaveBeenCalledTimes(1);
    });

    it('should propagate database errors', async () => {
      const dbError = new Error('Database connection failed');
      prisma.bloco.findUnique.mockRejectedValueOnce(dbError);

      await expect(service.findOne(1)).rejects.toThrow(dbError);
    });
  });

  describe('findByNameContains', () => {
    it('should call prisma.bloco.findMany with correct search parameters', async () => {
      const search = 'A';
      await service.findByNameContains(search);
      
      expect(prisma.bloco.findMany).toHaveBeenCalledWith({
        where: {
          Nome: {
            contains: search,
          },
        },
        include: expect.any(Object),
      });
      expect(prisma.bloco.findMany).toHaveBeenCalledTimes(1);
    });

    it('should propagate database errors', async () => {
      const dbError = new Error('Database connection failed');
      prisma.bloco.findMany.mockRejectedValueOnce(dbError);

      await expect(service.findByNameContains('A')).rejects.toThrow(dbError);
    });
  });

  describe('update', () => {
    const updateBlocoDto = {
      Nome: 'Bloco B',
    };

    it('should call prisma.bloco.update with correct parameters', async () => {
      await service.update(1, updateBlocoDto);
      
      expect(prisma.bloco.update).toHaveBeenCalledWith({
        where: { Id: 1 },
        data: updateBlocoDto,
        include: expect.any(Object),
      });
      expect(prisma.bloco.update).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityExistsException when bloco name already exists', async () => {
      const error = {
        code: 'P2002',
        message: 'Unique constraint failed',
      };

      prisma.bloco.update.mockRejectedValueOnce(error);

      await expect(service.update(1, updateBlocoDto)).rejects.toThrow(EntityExistsException);
      expect(prisma.bloco.update).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityDoesNotExistException when bloco is not found', async () => {
      const error = {
        code: 'P2025',
        message: 'Record not found',
      };

      prisma.bloco.update.mockRejectedValueOnce(error);

      await expect(service.update(999, updateBlocoDto)).rejects.toThrow(EntityDoesNotExistException);
      expect(prisma.bloco.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate other database errors', async () => {
      const dbError = new Error('Database connection failed');
      prisma.bloco.update.mockRejectedValueOnce(dbError);

      await expect(service.update(1, updateBlocoDto)).rejects.toThrow(dbError);
    });
  });

  describe('remove', () => {
    it('should call prisma.bloco.delete with correct parameters', async () => {
      await service.remove(1);
      
      expect(prisma.bloco.delete).toHaveBeenCalledWith({
        where: { Id: 1 },
        include: expect.any(Object),
      });
      expect(prisma.bloco.delete).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityDoesNotExistException when bloco is not found', async () => {
      const error = {
        code: 'P2025',
        message: 'Record not found',
      };

      prisma.bloco.delete.mockRejectedValueOnce(error);

      await expect(service.remove(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(prisma.bloco.delete).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityHasDependantsException when bloco has associated salas', async () => {
      const error = {
        code: 'P2014',
        message: 'Foreign key constraint failed',
      };

      prisma.bloco.delete.mockRejectedValueOnce(error);

      await expect(service.remove(1)).rejects.toThrow(EntityHasDependantsException);
      expect(prisma.bloco.delete).toHaveBeenCalledTimes(1);
    });

    it('should propagate other database errors', async () => {
      const dbError = new Error('Database connection failed');
      prisma.bloco.delete.mockRejectedValueOnce(dbError);

      await expect(service.remove(1)).rejects.toThrow(dbError);
    });
  });
}); 