import { Module } from '@nestjs/common';
import { DonationsController } from './donations.controller';
import { DonationsService } from './donations.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { CADonationsController } from './ca.donations.controller';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule],
  controllers: [DonationsController, CADonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
