import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { createMockAlocacao } from 'test/factories/alocacao.factory';
import { createMockSala } from 'test/factories/sala.factory';

import { PrismaClient } from '../generated/prisma/client';
import { SalaService } from '../sala/sala.service';
import { AlocacaoService } from './alocacao.service';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';
import { BookingConflictException } from './exceptions/booking-conflict-exception';
import { InvalidBookingException } from './exceptions/invalid-booking-exception';

const ALOCACAO_WITH_SALA_DETAILS_INCLUDE = {
  Sala: {
    include: {
      Tipo: true,
      Bloco: true,
    },
  },
};

describe('AlocacaoService', () => {
  let service: AlocacaoService;
  let mockPrisma: DeepMockProxy<PrismaClient>;
  let mockSalaService: DeepMockProxy<SalaService>;

  beforeEach(async () => {
    mockPrisma = mockDeep<PrismaClient>();
    mockSalaService = mockDeep<SalaService>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlocacaoService,
        { provide: PrismaClient, useValue: mockPrisma },
        { provide: SalaService, useValue: mockSalaService },
      ],
    }).compile();

    service = module.get<AlocacaoService>(AlocacaoService);
  });

  beforeEach(() => {
    jest.clearAllMocks();

    const prismaTx = mockPrisma as jest.Mocked<PrismaClient>;
    prismaTx.$transaction.mockImplementation(
      (callback: (tx: PrismaClient) => Promise<unknown>) =>
        callback(mockPrisma),
    );
  });

  describe('findAll', () => {
    it('should call prisma.alocacao.findMany with correct parameters', async () => {
      mockPrisma.alocacao.findMany.mockResolvedValue([]);

      await service.findAll();

      expect(mockPrisma.alocacao.findMany).toHaveBeenCalledWith({
        where: {
          DeletedAt: null,
        },
        include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
      });
      expect(mockPrisma.alocacao.findMany).toHaveBeenCalledTimes(1);
    });

    it('should propagate database errors', async () => {
      const dbError = new Error('Database connection failed');
      mockPrisma.alocacao.findMany.mockRejectedValue(dbError);

      await expect(service.findAll()).rejects.toThrow(dbError);
    });
  });

  describe('findOne', () => {
    it('should call prisma.alocacao.findFirst with correct parameters', async () => {
      mockPrisma.alocacao.findFirst.mockResolvedValue(
        createMockAlocacao() as Alocacao,
      );

      await service.findOne(1);

      expect(mockPrisma.alocacao.findFirst).toHaveBeenCalledWith({
        where: {
          Id: 1,
          DeletedAt: null,
        },
        include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
      });
      expect(mockPrisma.alocacao.findFirst).toHaveBeenCalledTimes(1);
    });

    it('should throw EntityDoesNotExistException when alocacao is not found', async () => {
      mockPrisma.alocacao.findFirst.mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow(
        EntityDoesNotExistException,
      );
      expect(mockPrisma.alocacao.findFirst).toHaveBeenCalledTimes(1);
    });

    it('should propagate database errors', async () => {
      const dbError = new Error('Database connection failed');
      mockPrisma.alocacao.findFirst.mockRejectedValue(dbError);

      await expect(service.findOne(1)).rejects.toThrow(dbError);
    });
  });

  describe('create', () => {
    beforeEach(() => {
      mockSalaService.findOne.mockResolvedValue(createMockSala());
      mockPrisma.alocacao.findFirst.mockResolvedValue(null); // no conflicts
    });

    it('should set the DiaDaSemana on a fixed-date allocation', async () => {
      const mockAlocacao = createMockAlocacao({
        DiaDaSemana: undefined,
      }) as CreateAlocacaoDto;

      expect(mockAlocacao.DiaDaSemana).toBeUndefined();

      await service.create(mockAlocacao);

      expect(mockAlocacao.DiaDaSemana).toBe(mockAlocacao.Data?.getDay());

      expect(mockSalaService.findOne).toHaveBeenCalledWith(mockAlocacao.SalaId);
      expect(mockPrisma.alocacao.create).toHaveBeenCalledWith({
        data: mockAlocacao,
        include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
      });
    });

    it('should throw InvalidBookingException when both Data and DiaDaSemana are missing', async () => {
      const invalidDto = createMockAlocacao({
        Data: undefined,
        DiaDaSemana: undefined,
      }) as CreateAlocacaoDto;

      await expect(service.create(invalidDto)).rejects.toThrow(
        InvalidBookingException,
      );
    });

    it('should throw InvalidBookingException when allocation date is in the past', async () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      const invalidDto = createMockAlocacao({
        Data: yesterday,
      });

      await expect(service.create(invalidDto)).rejects.toThrow(
        InvalidBookingException,
      );
    });

    it('should throw BookingConflictException when there is a time conflict', async () => {
      const conflictingAlocacao = createMockAlocacao() as Alocacao;
      mockPrisma.alocacao.findFirst.mockResolvedValue(conflictingAlocacao);

      await expect(service.create(createMockAlocacao())).rejects.toThrow(
        BookingConflictException,
      );
    });

    it('should throw EntityDoesNotExistException when sala does not exist', async () => {
      mockSalaService.findOne.mockRejectedValue(
        new EntityDoesNotExistException('Sala não encontrada'),
      );

      await expect(service.create(createMockAlocacao())).rejects.toThrow(
        EntityDoesNotExistException,
      );
    });
  });

  describe('update', () => {
    const today = new Date();
    const alocacaoOverlapInfo = {
      Data: today,
      DiaDaSemana: today.getDay(),
      SalaId: 1,
      DisciplinaId: 1,
    };

    const existingAlocacao = createMockAlocacao({
      Id: 1,
      ...alocacaoOverlapInfo,
      HoraInicio: '08:00',
      HoraFim: '10:00',
    }) as Alocacao;
    const anotherExistingAlocacao = createMockAlocacao({
      Id: 2,
      ...alocacaoOverlapInfo,
      HoraInicio: '10:00',
      HoraFim: '11:00',
    }) as Alocacao;

    const updateAlocacaoDto: UpdateAlocacaoDto = {
      Data: existingAlocacao.Data || undefined,
      SalaId: existingAlocacao.SalaId,
      DiaDaSemana: existingAlocacao.DiaDaSemana,
      HoraInicio: '07:00',
      HoraFim: '08:00',
    };
    const conflictUpdateAlocacaoDto: UpdateAlocacaoDto = {
      HoraInicio: '10:30',
      HoraFim: '12:00',
    };

    beforeEach(() => {
      mockPrisma.alocacao.findFirst
        .mockResolvedValueOnce(existingAlocacao)
        .mockResolvedValueOnce(null) // for conflict check
        .mockResolvedValueOnce(anotherExistingAlocacao);

      mockSalaService.findOne.mockResolvedValue(createMockSala());
    });

    it('should update an existing allocation', async () => {
      const updatedAlocacao = {
        ...existingAlocacao,
        ...updateAlocacaoDto,
      };
      mockPrisma.alocacao.update.mockResolvedValue(updatedAlocacao);

      await service.update(existingAlocacao.Id, updateAlocacaoDto);

      expect(mockPrisma.alocacao.update).toHaveBeenCalledWith({
        where: { Id: existingAlocacao.Id },
        data: updateAlocacaoDto,
        include: ALOCACAO_WITH_SALA_DETAILS_INCLUDE,
      });
    });

    it('should throw EntityDoesNotExistException when alocacao is not found', async () => {
      mockPrisma.alocacao.findFirst.mockReset();
      mockPrisma.alocacao.findFirst.mockResolvedValue(null);

      await expect(service.update(999, updateAlocacaoDto)).rejects.toThrow(
        EntityDoesNotExistException,
      );
    });

    it('should throw BookingConflictException when there is a time conflict', async () => {
      mockPrisma.alocacao.findFirst.mockReset();
      mockPrisma.alocacao.findFirst
        .mockResolvedValueOnce(existingAlocacao)
        .mockResolvedValueOnce(existingAlocacao); // for conflict check
      await expect(
        service.update(1, conflictUpdateAlocacaoDto),
      ).rejects.toThrow(BookingConflictException);
    });

    it('should validate new sala when salaId is changed', async () => {
      const updateWithNewSala = {
        ...updateAlocacaoDto,
        SalaId: 2,
      };

      mockSalaService.findOne.mockResolvedValue(
        createMockSala({
          Id: 2,
        }),
      );

      await service.update(1, updateWithNewSala);

      expect(mockSalaService.findOne).toHaveBeenCalledWith(2);
    });

    it('should throw EntityDoesNotExistException when new sala does not exist', async () => {
      const updateWithNewSala = {
        ...updateAlocacaoDto,
        SalaId: 999,
      };

      mockSalaService.findOne.mockRejectedValue(
        new EntityDoesNotExistException('Sala não encontrada'),
      );

      await expect(service.update(1, updateWithNewSala)).rejects.toThrow(
        EntityDoesNotExistException,
      );
    });
  });

  // describe('remove', () => {
  //   it('should soft delete an allocation', async () => {
  //     await service.remove(1);

  //     expect(mockPrisma.alocacao.update).toHaveBeenCalledWith({
  //       where: { Id: 1 },
  //       data: {
  //         DeletedAt: expect.any(Date),
  //       },
  //       include: expect.any(Object),
  //     });
  //   });

  //   it('should propagate database errors', async () => {
  //     const dbError = new Error('Database connection failed');
  //     mockPrisma.alocacao.update.mockRejectedValue(dbError);

  //     await expect(service.remove(1)).rejects.toThrow(dbError);
  //   });
  // });
});
