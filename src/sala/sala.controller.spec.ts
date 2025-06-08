import { Test, TestingModule } from '@nestjs/testing';
import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { EntityDoesNotExistException } from '../common/exceptions/entity-does-not-exist-exception';
import { EntityExistsException } from '../common/exceptions/entity-exists-exception';
import { EntityHasDependantsException } from '../common/exceptions/entity-has-dependants-exception.ts';

describe('SalaController', () => {
  let controller: SalaController;
  let service: SalaService;

  const mockSalaService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalaController],
      providers: [
        {
          provide: SalaService,
          useValue: mockSalaService,
        },
      ],
    }).compile();

    controller = module.get<SalaController>(SalaController);
    service = module.get<SalaService>(SalaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    const createSalaDto: CreateSalaDto = {
      Codigo: 'SALA1',
      TipoId: 1,
      BlocoId: 1,
      Capacidade: 30,
    };

    it('should call service.create with correct parameters', async () => {
      await controller.create(createSalaDto);
      expect(service.create).toHaveBeenCalledWith(createSalaDto);
      expect(service.create).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityExistsException from service', async () => {
      const error = new EntityExistsException('Sala já existe');
      mockSalaService.create.mockRejectedValue(error);

      await expect(controller.create(createSalaDto)).rejects.toThrow(EntityExistsException);
      expect(service.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should call service.findAll', async () => {
      await controller.findAll();
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });

    it('should propagate errors from service', async () => {
      const error = new Error('Database error');
      mockSalaService.findAll.mockRejectedValue(error);

      await expect(controller.findAll()).rejects.toThrow(error);
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
      const error = new EntityDoesNotExistException('Sala não encontrada');
      mockSalaService.findOne.mockRejectedValue(error);

      await expect(controller.findOne(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    const updateSalaDto: UpdateSalaDto = {
      Codigo: 'SALA1_UPDATED',
      TipoId: 1,
      BlocoId: 1,
      Capacidade: 40,
    };

    it('should call service.update with correct parameters', async () => {
      await controller.update(1, updateSalaDto);
      expect(service.update).toHaveBeenCalledWith(1, updateSalaDto);
      expect(service.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityDoesNotExistException from service', async () => {
      const error = new EntityDoesNotExistException('Sala não encontrada');
      mockSalaService.update.mockRejectedValue(error);

      await expect(controller.update(999, updateSalaDto)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityExistsException from service', async () => {
      const error = new EntityExistsException('Código já existe');
      mockSalaService.update.mockRejectedValue(error);

      await expect(controller.update(1, updateSalaDto)).rejects.toThrow(EntityExistsException);
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
      const error = new EntityDoesNotExistException('Sala não encontrada');
      mockSalaService.remove.mockRejectedValue(error);

      await expect(controller.remove(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.remove).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityHasDependantsException from service', async () => {
      const error = new EntityHasDependantsException('Sala possui alocações');
      mockSalaService.remove.mockRejectedValue(error);

      await expect(controller.remove(1)).rejects.toThrow(EntityHasDependantsException);
      expect(service.remove).toHaveBeenCalledTimes(1);
    });
  });
}); 