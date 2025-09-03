import { Injectable } from '@nestjs/common';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { DtoMapper } from 'src/common/mapper/dto-mapper';
import { PrismaService } from 'src/prisma/prisma.service';

import { SalaService } from '../sala/sala.service';
import { AlocacaoConflictChecker } from './conflict/alocacao-conflict-checker';
import { AlocacaoBaseDto } from './dto/alocacao-base.dto';
import { AlocacaoResponseDto } from './dto/alocacao-response.dto';
import { AlocacaoResponseWithSalaBaseDto } from './dto/alocacao-response-with-sala-base.dto';
import { AlocacaoScheduleDetails } from './dto/alocacao-schedule-details';
import { CreateAlocacaoDto } from './dto/create-alocacao.dto';
import { UpdateAlocacaoDto } from './dto/update-alocacao.dto';
import { InvalidBookingException } from './exceptions/invalid-booking-exception';
import { alocacaoFullSelect } from './select/alocacao-full-select';
import { AlocacaoWithSalaBaseSelect } from './select/alocacao-with-sala-base-select';

@Injectable()
export class AlocacaoService {
  constructor(
    private readonly salaService: SalaService,
    private readonly prisma: PrismaService,
    private readonly conflictChecker: AlocacaoConflictChecker,
  ) {}

  async create(
    createAlocacaoDto: CreateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    AlocacaoValidator.processDto(createAlocacaoDto);

    await this.conflictChecker.throwIfConflictingAlocacoesExist(
      createAlocacaoDto as AlocacaoScheduleDetails,
    );

    const alocacao = await this.prisma.alocacao.create({
      data: {
        ...createAlocacaoDto,
        dia_da_semana: createAlocacaoDto.dia_da_semana!,
      },
      select: alocacaoFullSelect,
    });

    return DtoMapper.toDto(AlocacaoResponseDto, alocacao);
  }

  async checkAvailability(
    createAlocacaoDto: CreateAlocacaoDto
  ): Promise<boolean> {
    const conflicts = await this.conflictChecker.findConflictingAlocacoesFor(
      createAlocacaoDto as AlocacaoScheduleDetails,
    )
    return conflicts.length > 0;
  }
  
  async findOne(id: number): Promise<AlocacaoResponseDto> {
    const result = await this.prisma.alocacao.findFirstOrThrow({
      where: { id: id, deleted_at: null },
      select: alocacaoFullSelect,
    });
    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  async findAll(
    queryDto: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<AlocacaoResponseWithSalaBaseDto>> {
    // TODO: A special query DTO for alocacoes. filtering needs to implemented!!
    const { page = 1, limit = 10 } = queryDto;

    const skip = (page - 1) * limit;

    const [alocacoes, total] = await this.prisma.$transaction([
      this.prisma.alocacao.findMany({
        skip,
        take: limit,
        where: { deleted_at: null },
        select: AlocacaoWithSalaBaseSelect,
      }),
      this.prisma.alocacao.count({ where: { deleted_at: null } }),
    ]);

    const alocacoesDtos = DtoMapper.toDtos(
      AlocacaoResponseWithSalaBaseDto,
      alocacoes,
    );

    return new PaginatedResponseDto(alocacoesDtos, total, limit, page);
  }

  async update(
    id: number,
    updateDto: UpdateAlocacaoDto,
  ): Promise<AlocacaoResponseDto> {
    // TODO / FIX: No validation is being done here.
    // Date validation, time validation... a solution for creating and updating must be implemented.

    const alocacaoToUpdate = await this.prisma.alocacao.findFirstOrThrow({
      where: { id: id, deleted_at: null },
    });

    const newSalaId = updateDto.sala_id;

    const salaHasChanged =
      newSalaId != null && newSalaId !== alocacaoToUpdate.sala_id;

    if (salaHasChanged) {
      await this.assertSalaExists(newSalaId);
    }

    const updatedAlocacaoDetails: AlocacaoBaseDto = {
      ...alocacaoToUpdate,
      ...updateDto,
    };
    AlocacaoValidator.processDto(updatedAlocacaoDetails);

    const result = await this.prisma.$transaction(async (tx) => {
      const conflictingAlocacoes =
        await this.conflictChecker.findConflictingAlocacoesFor(
          updatedAlocacaoDetails,
        );
      const blockingConflicts = conflictingAlocacoes.filter((x) => x != id);
      const hasBlockingConflicts = blockingConflicts.length > 0;

      if (hasBlockingConflicts) {
        throw new InvalidBookingException(
          'Não é possível atualizar a alocação, pois existem conflitos com outras alocações.',
        );
      }

      return await tx.alocacao.update({
        where: { id: id },
        data: updatedAlocacaoDetails,
        select: alocacaoFullSelect,
      });
    });

    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }

  private async assertSalaExists(salaId: number): Promise<void> {
    await this.salaService.findOne(salaId);
  }

  async remove(id: number): Promise<AlocacaoResponseDto> {
    const result = await this.prisma.alocacao.update({
      where: { id: id },
      data: { deleted_at: new Date() },
      select: alocacaoFullSelect,
    });
    return DtoMapper.toDto(AlocacaoResponseDto, result);
  }
}

class AlocacaoValidator {
  public static processDto(dto: CreateAlocacaoDto): void {
    this.ensureExactlyOneTimeSpecifierInDto(dto);
    this.ensureStartTimeAndEndTimeAreValid(dto);

    const date = dto.data;
    const isFixedDateBooking = date != null;

    if (isFixedDateBooking) {
      this.assertBookingDateIsValid(date);
      this.setWeekdayFromBookingDateInDto(dto);
    } else {
      this.validateDiaDaSemana(dto.dia_da_semana!);
    }
  }

  private static ensureStartTimeAndEndTimeAreValid(
    dto: CreateAlocacaoDto,
  ): void {
    if (dto.hora_inicio >= dto.hora_fim) {
      throw new InvalidBookingException(
        'hora_inicio deve ser menor que hora_fim',
      );
    }
  }

  private static ensureExactlyOneTimeSpecifierInDto(
    dto: CreateAlocacaoDto,
  ): void {
    if ((dto.dia_da_semana != null) === (dto.data != null)) {
      throw new InvalidBookingException(
        'Apenas um entre dia_da_semana e data deve ser especificado',
      );
    }
  }

  private static assertBookingDateIsValid(bookingDate: Date): void {
    if (bookingDate < this.getTodayDateAtMidnight()) {
      throw new InvalidBookingException(
        'Não é possível criar uma alocação em uma data passada.',
      );
    }
  }

  private static setWeekdayFromBookingDateInDto(dto: CreateAlocacaoDto): void {
    dto.dia_da_semana = dto.data!.getDay();
  }

  private static validateDiaDaSemana(day: number): void {
    if (day < 0 || day > 6) {
      throw new InvalidBookingException('Dia da semana deve estar entre 0 e 6');
    }
  }

  private static getTodayDateAtMidnight(): Date {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }
}
