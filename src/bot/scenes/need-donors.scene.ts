import {
  Ctx,
  SceneLeave,
  Hears,
  Wizard,
  WizardStep,
  Action,
} from 'nestjs-telegraf';
import { ExtContext, ExtWizardContext } from '../utils/types';
import { CallbackButton, Key, Keyboard } from 'telegram-keyboard';
import { GeneralHandler } from '../handlers/general.handler';
import { TelegrafI18n } from '../utils/i18n';
import { CitiesService } from '../../cities/cities.service';
import { keyboardOptions } from '../utils/markup';
import { DonationRequestsService } from '../../donation-requests/donation-requests.service';

@Wizard('need-donors')
export class NeedDonorsScene {
  constructor(
    private readonly generalHandler: GeneralHandler,
    private readonly citiesService: CitiesService,
    private readonly donationRequestsService: DonationRequestsService,
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

  // @WizardStep(2)
  // @On('callback_query')
  // async chooseCenter(@Ctx() ctx: ExtWizardContext) {
  //   const { data } = ctx.update.callback_query;
  //   const centers = await this.centersService.findMany({
  //     city: { name: data },
  //   });

  //   await ctx.answerCbQuery();
  //   await ctx.editMessageText(
  //     `You choosed ${data}. Choose center:`,
  //     Keyboard.make(
  //       centers.map((center) => Key.callback(center.name, center.id)),
  //     ).inline(),
  //   );

  //   ctx.wizard.next();
  // }

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
