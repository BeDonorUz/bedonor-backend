import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { CACitiesController } from './ca.cities.controller';
import { SACitiesController } from './sa.cities.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CitiesController, CACitiesController, SACitiesController],
  providers: [CitiesService],
  exports: [CitiesService],
})
export class CitiesModule {}
