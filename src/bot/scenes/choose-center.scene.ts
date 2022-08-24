import {
  Ctx,
  SceneLeave,
  Hears,
  Wizard,
  WizardStep,
  Action,
  On,
} from 'nestjs-telegraf';
import { ExtContext, ExtWizardContext } from '../utils/types';
import { Key, Keyboard } from 'telegram-keyboard';
import { GeneralHandler } from '../handlers/general.handler';
import { TelegrafI18n } from '../utils/i18n';
import { CentersService } from '../../centers/centers.service';

@Wizard('choose-center')
export class ChooseCenterScene {
  constructor(
    private readonly generalHandler: GeneralHandler,
    private readonly centersService: CentersService,
  ) {}

  @WizardStep(1)
  async enter(@Ctx() ctx: ExtWizardContext) {
    const centers = await this.centersService.findMany({
      city: { name: ctx.session.cityName },
    });

    await ctx.editMessageText(
      ctx.i18n.t('choose-center'),
      Keyboard.make(
        centers.map((center) => Key.callback(center.name, center.id)),
      ).inline(),
    );
    await ctx.answerCbQuery();

    ctx.wizard.next();
  }

  @WizardStep(2)
  @On('callback_query')
  async storeCenter(@Ctx() ctx: ExtWizardContext) {
    const { data } = ctx.update.callback_query;
    ctx.session.centerId = data;

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
