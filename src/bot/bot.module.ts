import { Module } from '@nestjs/common';
import { GeneralBotService } from './services/general.bot.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GeneralBotService],
})
export class BotModule {}
