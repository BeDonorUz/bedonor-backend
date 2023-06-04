import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { DonationsModule } from './donations/donations.module';
import { CitiesModule } from './cities/cities.module';
import { CentersModule } from './centers/centers.module';
import { AuthModule } from './auth/auth.module';
import { DonationRequestsModule } from './donation-requests/donation-requests.module';
import { CenterDemandsModule } from './center-demands/center-demands.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    DonationsModule,
    CitiesModule,
    CentersModule,
    AuthModule,
    DonationRequestsModule,
    CenterDemandsModule,
  ],
})
export class AppModule {}
