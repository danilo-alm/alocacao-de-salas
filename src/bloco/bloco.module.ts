import { Module } from '@nestjs/common';

import { BlocoController } from './bloco.controller';
import { BlocoService } from './bloco.service';

@Module({
  controllers: [BlocoController],
  providers: [BlocoService],
})
export class BlocoModule {}
