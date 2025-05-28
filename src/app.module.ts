import { Module } from '@nestjs/common';
import { AlocacaoModule } from './alocacao/alocacao.module';
import { BlocoModule } from './bloco/bloco.module';
import { SalaModule } from './sala/sala.module';
import { TipoSalaModule } from './tipo-sala/tipo-sala.module';

@Module({
  imports: [AlocacaoModule, BlocoModule, SalaModule, TipoSalaModule],
})
export class AppModule {}
