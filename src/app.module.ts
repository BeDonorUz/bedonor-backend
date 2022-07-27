import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { DonationsModule } from './donations/donations.module';
import { CitiesModule } from './cities/cities.module';
import { CentersModule } from './centers/centers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    DonationsModule,
    CitiesModule,
    CentersModule,
    AuthModule,
  ],
})
export class AppModule {}
