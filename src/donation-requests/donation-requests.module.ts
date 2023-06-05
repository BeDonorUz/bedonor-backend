import { Module } from '@nestjs/common';
import { DonationRequestsController } from './donation-requests.controller';
import { DonationRequestsService } from './donation-requests.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CADonationRequestsController } from './ca.donation-requests.controller';
import { SADonationRequestsController } from './sa.donation-requests.controller';

@Module({
  imports: [PrismaModule],
  controllers: [
    DonationRequestsController,
    CADonationRequestsController,
    SADonationRequestsController,
  ],
  providers: [DonationRequestsService],
  exports: [DonationRequestsService],
})
export class DonationRequestsModule {}
