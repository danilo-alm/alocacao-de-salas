import { Module } from '@nestjs/common';

import { TipoSalaController } from './tipo-sala.controller';
import { TipoSalaService } from './tipo-sala.service';

@Module({
  controllers: [TipoSalaController],
  providers: [TipoSalaService],
})
export class TipoSalaModule {}
