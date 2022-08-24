import {
  Ctx,
  SceneLeave,
  Hears,
  Wizard,
  WizardStep,
  Action,
  On,
  TelegrafArgumentsHost,
} from 'nestjs-telegraf';
import { ExtContext, ExtWizardContext } from '../utils/types';
import { CallbackButton, Key, Keyboard } from 'telegram-keyboard';
import { GeneralHandler } from '../handlers/general.handler';
import { TelegrafI18n } from '../utils/i18n';
import { CitiesService } from '../../cities/cities.service';
import { keyboardOptions } from '../utils/markup';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UseFilters,
} from '@nestjs/common';

@Catch()
export class TelegrafExceptionFilter implements ExceptionFilter {
  async catch(exception: Error, host: ArgumentsHost): Promise<void> {
    const telegrafHost = TelegrafArgumentsHost.create(host);
    const ctx = telegrafHost.getContext<ExtContext>();

    await ctx.replyWithMarkdownV2(
      `<b>Error</b>: ${exception.message}`,
      Keyboard.reply([ctx.i18n.t('button:back')]),
    );
  }
}

@Wizard('choose-city')
@UseFilters(TelegrafExceptionFilter)
export class ChooseCityScene {
  constructor(
    private readonly generalHandler: GeneralHandler,
    private readonly citiesService: CitiesService,
  ) {}

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

    ctx.scene.enter(ctx.session.nextScene);
  }

  @SceneLeave()
  leave(@Ctx() ctx: ExtContext) {
    this.generalHandler.start(ctx, false);
  }

  @Hears(TelegrafI18n.match('button:back'))
  back(@Ctx() ctx: ExtContext) {
    ctx.scene.leave();
  }

  @Action('back')
  async back2(@Ctx() ctx: ExtContext) {
    await ctx.answerCbQuery();
    ctx.scene.leave();
  }
}
