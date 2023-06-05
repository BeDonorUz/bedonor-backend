import { Module } from '@nestjs/common';
import { CentersController } from './centers.controller';
import { CentersService } from './centers.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CACentersController } from './ca.centers.controller';
import { SACentersController } from './sa.centers.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CentersController, CACentersController, SACentersController],
  providers: [CentersService],
  exports: [CentersService],
})
export class CentersModule {}
