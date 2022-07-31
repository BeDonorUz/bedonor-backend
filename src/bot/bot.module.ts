import { Module } from '@nestjs/common';
import { GeneralHandler } from './handlers/general.handler';
import { PrismaModule } from '../prisma/prisma.module';
import { InfoHandler } from './handlers/info.handlers';
import { BecomeDonorScene } from './scenes/become-donor.scene';
import { LanguageScene } from './scenes/language.scene';

@Module({
  imports: [PrismaModule],
  providers: [GeneralHandler, InfoHandler, BecomeDonorScene, LanguageScene],
})
export class BotModule {}
