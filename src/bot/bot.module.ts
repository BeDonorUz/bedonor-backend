import { Module } from '@nestjs/common';
import { GeneralHandler } from './handlers/general.handler';
import { PrismaModule } from '../prisma/prisma.module';
import { InfoHandler } from './handlers/info.handlers';
import { BecomeDonorScene } from './scenes/become-donor.scene';
import { LanguageScene } from './scenes/language.scene';
import { NeedDonorsScene } from './scenes/need-donors.scene';
import { CitiesModule } from '../cities/cities.module';
import { OnInitService } from './on-init.service';
import { CentersModule } from '../centers/centers.module';

@Module({
  imports: [PrismaModule, CitiesModule, CentersModule],
  providers: [
    OnInitService,
    GeneralHandler,
    InfoHandler,
    BecomeDonorScene,
    LanguageScene,
    NeedDonorsScene,
  ],
})
export class BotModule {}
