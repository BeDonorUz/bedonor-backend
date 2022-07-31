import { Module } from '@nestjs/common';
import { DonationRequestsController } from './donation-requests.controller';
import { DonationRequestsService } from './donation-requests.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DonationRequestsController],
  providers: [DonationRequestsService],
})
export class DonationRequestsModule {}
