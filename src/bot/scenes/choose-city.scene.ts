import { Ctx, Wizard, WizardStep, On } from 'nestjs-telegraf';
import { ExtWizardContext } from '../utils/types';
import { CallbackButton, Key, Keyboard } from 'telegram-keyboard';
import { GeneralHandler } from '../handlers/general.handler';
import { CitiesService } from '../../cities/cities.service';
import { keyboardOptions } from '../utils/markup';
import { UseFilters } from '@nestjs/common';
import { AbstractScene } from './abstract.scene';
import { TelegrafExceptionFilter } from '../filters/telegraf.filter';

@Wizard('choose-city')
@UseFilters(TelegrafExceptionFilter)
export class ChooseCityScene extends AbstractScene {
  constructor(
    protected readonly generalHandler: GeneralHandler,
    protected readonly citiesService: CitiesService,
  ) {
    super();
  }

  @WizardStep(1)
  async enter(@Ctx() ctx: ExtWizardContext) {
    const cities = await this.citiesService.findMany();
    const keyboard: CallbackButton[] = [];

    for (const city of cities) {
      keyboard.push(Key.callback(ctx.i18n.t(`city:${city.name}`), city.name));
    }

    const citiesKeys = Keyboard.make(keyboard, keyboardOptions(2));
    const backKey = Keyboard.make([
      Key.callback(ctx.i18n.t('button:back'), 'back'),
    ]);

    await ctx.reply(
      ctx.i18n.t('choose-city'),
      Keyboard.combine(citiesKeys, backKey).inline(),
    );

    ctx.wizard.next();
  }

  @WizardStep(2)
  @On('callback_query')
  async storeCity(@Ctx() ctx: ExtWizardContext) {
    const { data } = ctx.update.callback_query;
    ctx.session.cityName = data;

    await ctx.answerCbQuery();
    ctx.scene.enter(ctx.session.nextScene);
  }
}
