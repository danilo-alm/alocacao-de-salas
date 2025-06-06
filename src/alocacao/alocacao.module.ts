import { Module } from '@nestjs/common';

import { SalaModule } from '../sala/sala.module';
import { AlocacaoController } from './alocacao.controller';
import { AlocacaoService } from './alocacao.service';

@Module({
  imports: [SalaModule],
  controllers: [AlocacaoController],
  providers: [AlocacaoService],
})
export class AlocacaoModule {}
