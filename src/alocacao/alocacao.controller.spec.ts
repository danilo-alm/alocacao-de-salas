import { Test, TestingModule } from '@nestjs/testing';
import { AlocacaoController } from './alocacao.controller';
import { AlocacaoService } from './alocacao.service';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';
import { EntityDoesNotExistException } from '../common/exceptions/entity-does-not-exist-exception';
import { BookingConflictException } from './exceptions/booking-conflict-exception';
import { InvalidBookingException } from './exceptions/invalid-booking-exception';

describe('AlocacaoController', () => {
  let controller: AlocacaoController;
  let service: AlocacaoService;

  const mockAlocacaoService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlocacaoController],
      providers: [
        {
          provide: AlocacaoService,
          useValue: mockAlocacaoService,
        },
      ],
    }).compile();

    controller = module.get<AlocacaoController>(AlocacaoController);
    service = module.get<AlocacaoService>(AlocacaoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    const createAlocacaoDto: CreateAlocacaoDto = {
      SalaId: 1,
      DisciplinaId: 1,
      Data: new Date('2024-03-20'),
      DiaDaSemana: 3,
      HoraInicio: '08:00',
      HoraFim: '10:00',
    };

    it('should call service.create with correct parameters', async () => {
      await controller.create(createAlocacaoDto);
      expect(service.create).toHaveBeenCalledWith(createAlocacaoDto);
      expect(service.create).toHaveBeenCalledTimes(1);
    });

    it('should propagate InvalidBookingException from service', async () => {
      const error = new InvalidBookingException('Data inválida');
      mockAlocacaoService.create.mockRejectedValue(error);

      await expect(controller.create(createAlocacaoDto)).rejects.toThrow(InvalidBookingException);
      expect(service.create).toHaveBeenCalledTimes(1);
    });

    it('should propagate BookingConflictException from service', async () => {
      const error = new BookingConflictException('Conflito de horário');
      mockAlocacaoService.create.mockRejectedValue(error);

      await expect(controller.create(createAlocacaoDto)).rejects.toThrow(BookingConflictException);
      expect(service.create).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityDoesNotExistException from service', async () => {
      const error = new EntityDoesNotExistException('Sala não encontrada');
      mockAlocacaoService.create.mockRejectedValue(error);

      await expect(controller.create(createAlocacaoDto)).rejects.toThrow(EntityDoesNotExistException);
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
      mockAlocacaoService.findAll.mockRejectedValue(error);

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
      const error = new EntityDoesNotExistException('Alocação não encontrada');
      mockAlocacaoService.findOne.mockRejectedValue(error);

      await expect(controller.findOne(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    const updateAlocacaoDto: UpdateAlocacaoDto = {
      HoraInicio: '09:00',
      HoraFim: '11:00',
    };

    it('should call service.update with correct parameters', async () => {
      await controller.update(1, updateAlocacaoDto);
      expect(service.update).toHaveBeenCalledWith(1, updateAlocacaoDto);
      expect(service.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate EntityDoesNotExistException from service', async () => {
      const error = new EntityDoesNotExistException('Alocação não encontrada');
      mockAlocacaoService.update.mockRejectedValue(error);

      await expect(controller.update(999, updateAlocacaoDto)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate BookingConflictException from service', async () => {
      const error = new BookingConflictException('Conflito de horário');
      mockAlocacaoService.update.mockRejectedValue(error);

      await expect(controller.update(1, updateAlocacaoDto)).rejects.toThrow(BookingConflictException);
      expect(service.update).toHaveBeenCalledTimes(1);
    });

    it('should propagate InvalidBookingException from service', async () => {
      const error = new InvalidBookingException('Data inválida');
      mockAlocacaoService.update.mockRejectedValue(error);

      await expect(controller.update(1, updateAlocacaoDto)).rejects.toThrow(InvalidBookingException);
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
      const error = new EntityDoesNotExistException('Alocação não encontrada');
      mockAlocacaoService.remove.mockRejectedValue(error);

      await expect(controller.remove(999)).rejects.toThrow(EntityDoesNotExistException);
      expect(service.remove).toHaveBeenCalledTimes(1);
    });

    it('should propagate other errors from service', async () => {
      const error = new Error('Database error');
      mockAlocacaoService.remove.mockRejectedValue(error);

      await expect(controller.remove(1)).rejects.toThrow(error);
      expect(service.remove).toHaveBeenCalledTimes(1);
    });
  });
}); 