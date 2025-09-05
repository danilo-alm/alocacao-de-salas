import { Module } from '@nestjs/common';

import { AlocacaoModule } from './alocacao/alocacao.module';
import { BlocoModule } from './bloco/bloco.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { PrismaModule } from './prisma/prisma.module';
import { SalaModule } from './sala/sala.module';
import { SolverModule } from './solver/solver.module';
import { TipoSalaModule } from './tipo-sala/tipo-sala.module';

@Module({
  imports: [
    PrismaModule,
    BlocoModule,
    TipoSalaModule,
    SalaModule,
    DisciplinaModule,
    AlocacaoModule,
    SolverModule,
  ],
})
export class AppModule {}
