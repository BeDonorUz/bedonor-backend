import { Ctx, Wizard, WizardStep, On } from 'nestjs-telegraf';
import { ExtWizardContext } from '../utils/types';
import { Key, Keyboard } from 'telegram-keyboard';
import { GeneralHandler } from '../handlers/general.handler';
import { CentersService } from '../../centers/centers.service';
import { AbstractScene } from './abstract.scene';
import { UseFilters } from '@nestjs/common';
import { TelegrafExceptionFilter } from '../filters/telegraf.filter';

@Wizard('choose-center')
@UseFilters(TelegrafExceptionFilter)
export class ChooseCenterScene extends AbstractScene {
  constructor(
    protected readonly generalHandler: GeneralHandler,
    protected readonly centersService: CentersService,
  ) {
    super();
  }

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
    ctx.session.centerId = +ctx.update.callback_query?.data;

    await ctx.answerCbQuery();
    ctx.scene.enter(ctx.session.nextScene);
  }
}
