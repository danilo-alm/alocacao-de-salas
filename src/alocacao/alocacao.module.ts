import { Module } from '@nestjs/common';

import { SalaModule } from '../sala/sala.module';
import { AlocacaoController } from './alocacao.controller';
import { AlocacaoService } from './alocacao.service';
import { AlocacaoConflictChecker } from './conflict/alocacao-conflict-checker';

@Module({
  imports: [SalaModule],
  controllers: [AlocacaoController],
  providers: [AlocacaoService, AlocacaoConflictChecker],
})
export class AlocacaoModule {}
