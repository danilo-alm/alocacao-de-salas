import { Injectable } from '@nestjs/common';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { DtoMapper } from 'src/common/mapper/dto-mapper';
import { PrismaService } from 'src/prisma/prisma.service';

import { SalaService } from '../sala/sala.service';
import { AlocacaoConflictChecker } from './conflict/alocacao-conflict-checker';
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
    CreateAlocacaoProcessor.process(createAlocacaoDto);

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
    const alocacao = await this.prisma.alocacao.findFirstOrThrow({
      where: { id: id, deleted_at: null },
    });

    const newSalaId = updateDto.sala_id;

    const salaHasChanged = newSalaId != null && newSalaId !== alocacao.sala_id;
    if (salaHasChanged) {
      await this.assertSalaExists(newSalaId);
    }

    const updatedAlocacaoDetails: AlocacaoScheduleDetails = {
      ...alocacao,
      ...updateDto,
    };

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

class CreateAlocacaoProcessor {
  public static process(dto: CreateAlocacaoDto): void {
    // Validates the object and populates dia_da_semana if Date is passed
    this.validateRequest(dto);
    if (dto.data) {
      dto.dia_da_semana = dto.data.getDay();
      this.assertBookingDateIsValid(dto.data);
    }
  }

  private static validateRequest(dto: CreateAlocacaoDto): void {
    this.ensureExactlyOneTimeSpecifier(dto);
    if (dto.dia_da_semana != null) {
      this.validateDiaDaSemana(dto.dia_da_semana);
    }
  }

  private static ensureExactlyOneTimeSpecifier(dto: CreateAlocacaoDto): void {
    if ((dto.dia_da_semana != null) === (dto.data != null)) {
      throw new InvalidBookingException(
        'Apenas um entre dia_da_semana e data deve ser especificado',
      );
    }
  }

  private static validateDiaDaSemana(dia: number): void {
    if (dia < 0 || dia > 6) {
      throw new InvalidBookingException('Dia da semana deve estar entre 0 e 6');
    }
  }

  private static assertBookingDateIsValid(bookingDate: Date): void {
    if (bookingDate < this.getTodayDateAtMidnight()) {
      throw new InvalidBookingException(
        'Não é possível criar uma alocação em uma data passada.',
      );
    }
  }

  private static getTodayDateAtMidnight(): Date {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }
}
