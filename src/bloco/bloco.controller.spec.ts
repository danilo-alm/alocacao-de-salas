import { Test, TestingModule } from '@nestjs/testing';
import { BlocoController } from './bloco.controller';
import { BlocoService } from './bloco.service';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';
import { EntityDoesNotExistException } from '../common/exceptions/entity-does-not-exist-exception';
import { EntityExistsException } from '../common/exceptions/entity-exists-exception';
import { EntityHasDependantsException } from '../common/exceptions/entity-has-dependants-exception.ts';

describe('BlocoController', () => {
  let controller: BlocoController;
  let service: BlocoService;

  const mockBlocoService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    findByNameContains: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlocoController],
      providers: [
        {
          provide: BlocoService,
          useValue: mockBlocoService,
        },
      ],
    }).compile();

    controller = module.get<BlocoController>(BlocoController);
    service = module.get<BlocoService>(BlocoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    const createBlocoDto: CreateBlocoDto = {
      Nome: 'Bloco A',
    };

    it('should call service.create with correct parameters', async () => {
      await controller.create(createBlocoDto);
      expect(service.create).toHaveBeenCalledWith(createBlocoDto);
      expect(service.create).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityExistsException from service', async () => {
      const error = new EntityExistsException('Bloco já existe');
      mockBlocoService.create.mockRejectedValue(error);

      await expect(controller.create(createBlocoDto)).rejects.toThrow(EntityExistsException);
      expect(service.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should call service.findAll when no search parameter is provided', async () => {
      await controller.findAll('');
      expect(service.findAll).toHaveBeenCalledTimes(1);
      expect(service.findByNameContains).not.toHaveBeenCalled();
    });

    it('should call service.findByNameContains when search parameter is provided', async () => {
      const search = 'A';
      await controller.findAll(search);
      expect(service.findByNameContains).toHaveBeenCalledWith(search);
      expect(service.findByNameContains).toHaveBeenCalledTimes(1);
      expect(service.findAll).not.toHaveBeenCalled();
    });

    it('should propagate errors from service', async () => {
      const error = new Error('Database error');
      mockBlocoService.findAll.mockRejectedValue(error);

      await expect(controller.findAll('')).rejects.toThrow(error);
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should call service.findOne with correct parameters', async () => {
      await controller.findOne(1);
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(service.findOne).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityDoesNotExistException from service', async () => {
      const error = new EntityDoesNotExistException('Bloco não encontrado');
      mockBlocoService.findOne.mockRejectedValue(error);

      await expect(controller.findOne(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    const updateBlocoDto: UpdateBlocoDto = {
      Nome: 'Bloco B',
    };

    it('should call service.update with correct parameters', async () => {
      await controller.update(1, updateBlocoDto);
      expect(service.update).toHaveBeenCalledWith(1, updateBlocoDto);
      expect(service.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityDoesNotExistException from service', async () => {
      const error = new EntityDoesNotExistException('Bloco não encontrado');
      mockBlocoService.update.mockRejectedValue(error);

      await expect(controller.update(999, updateBlocoDto)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityExistsException from service', async () => {
      const error = new EntityExistsException('Nome já existe');
      mockBlocoService.update.mockRejectedValue(error);

      await expect(controller.update(1, updateBlocoDto)).rejects.toThrow(EntityExistsException);
      expect(service.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should call service.remove with correct parameters', async () => {
      await controller.remove(1);
      expect(service.remove).toHaveBeenCalledWith(1);
      expect(service.remove).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityDoesNotExistException from service', async () => {
      const error = new EntityDoesNotExistException('Bloco não encontrado');
      mockBlocoService.remove.mockRejectedValue(error);

      await expect(controller.remove(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.remove).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityHasDependantsException from service', async () => {
      const error = new EntityHasDependantsException('Bloco possui salas');
      mockBlocoService.remove.mockRejectedValue(error);

      await expect(controller.remove(1)).rejects.toThrow(EntityHasDependantsException);
      expect(service.remove).toHaveBeenCalledTimes(1);
    });
  });
}); 