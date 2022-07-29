import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { DonationsModule } from './donations/donations.module';
import { CitiesModule } from './cities/cities.module';
import { CentersModule } from './centers/centers.module';
import { AuthModule } from './auth/auth.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';
import { botConfig } from './bot/bot.config';

@Module({
  imports: [
    TelegrafModule.forRoot(botConfig),
    UsersModule,
    PrismaModule,
    DonationsModule,
    CitiesModule,
    CentersModule,
    AuthModule,
    BotModule,
  ],
})
export class AppModule {}
