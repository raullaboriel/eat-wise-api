import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersController } from './genders.controller';

@Module({
  providers: [GendersService],
  controllers: [GendersController]
})
export class GendersModule {}
