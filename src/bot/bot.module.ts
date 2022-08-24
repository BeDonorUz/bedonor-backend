import { Module } from '@nestjs/common';
import { GeneralHandler } from './handlers/general.handler';
import { PrismaModule } from '../prisma/prisma.module';
import { InfoHandler } from './handlers/info.handlers';
import { BecomeDonorScene } from './scenes/become-donor.scene';
import { LanguageScene } from './scenes/language.scene';
import { NeedDonorsScene } from './scenes/need-donors.scene';
import { CitiesModule } from '../cities/cities.module';
import { OnInitService } from './on-init.service';
import { DonationRequestsModule } from '../donation-requests/donation-requests.module';
import { CreateRequestScene } from './scenes/create-request.scene';
import { ChooseCenterScene } from './scenes/choose-center.scene';
import { ChooseCityScene } from './scenes/choose-city.scene';
import { CentersModule } from '../centers/centers.module';

@Module({
  imports: [PrismaModule, CitiesModule, CentersModule, DonationRequestsModule],
  providers: [
    OnInitService,
    GeneralHandler,
    InfoHandler,
    BecomeDonorScene,
    LanguageScene,
    NeedDonorsScene,
    CreateRequestScene,
    ChooseCityScene,
    ChooseCenterScene,
  ],
})
export class BotModule {}
