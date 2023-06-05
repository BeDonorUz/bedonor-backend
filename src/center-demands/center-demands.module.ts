import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CenterDemandsController } from './center-demands.controller';
import { CACenterDemandsController } from './ca.center-demands.controller';
import { SACenterDemandsController } from './sa.center-demands.controller';
import { CenterDemandsService } from './center-demands.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    CenterDemandsController,
    CACenterDemandsController,
    SACenterDemandsController,
  ],
  providers: [CenterDemandsService],
  exports: [CenterDemandsService],
})
export class CenterDemandsModule {}
