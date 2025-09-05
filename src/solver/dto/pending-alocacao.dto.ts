import { OmitType } from '@nestjs/swagger';
import { CreateAlocacaoDto } from 'src/alocacao/dto/create-alocacao.dto';

export class PendingAlocacaoDto extends OmitType(CreateAlocacaoDto, ['sala_id', 'data'] as const) {
  uniqueId?: string;
}