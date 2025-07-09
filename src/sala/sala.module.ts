import { Module } from '@nestjs/common';

import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';

@Module({
  controllers: [SalaController],
  providers: [SalaService],
  exports: [SalaService],
})
export class SalaModule {}
