import { Ctx, SceneLeave, Hears, Wizard, WizardStep } from 'nestjs-telegraf';
import { ExtContext, ExtWizardContext } from '../utils/types';
import { GeneralHandler } from '../handlers/general.handler';
import { TelegrafI18n } from '../utils/i18n';
import { Keyboard } from 'telegram-keyboard';
import { keyboardOptions } from '../utils/markup';
import { range } from '../utils/math';

@Wizard('create-request')
export class CreateRequestScene {
  constructor(private readonly generalHandler: GeneralHandler) {}

  @WizardStep(1)
  async step1(@Ctx() ctx: ExtWizardContext) {
    if (!Object.prototype.hasOwnProperty.call(ctx.session, 'cityName')) {
      ctx.session.nextScene = 'create-request';
      return ctx.scene.enter('choose-city');
    }

    const typesKeys = Keyboard.make([
      ctx.i18n.t('plasma'),
      ctx.i18n.t('whole-blood'),
      ctx.i18n.t('platelets'),
    ]);
    const backKey = Keyboard.make([ctx.i18n.t('button:back')]);

    await ctx.replyWithMarkdownV2(
      ctx.i18n.t('choose-donation-type'),
      Keyboard.combine(typesKeys, backKey).reply(),
    );

    ctx.wizard.next();
  }

  @WizardStep(2)
  step2(@Ctx() ctx: ExtWizardContext) {
    ctx.session.donationRequest = {};
    ctx.session.donationRequest.type = ctx.message.text;

    const numbersKeys = Keyboard.make(range(1, 10), keyboardOptions(5));
    const backKey = Keyboard.make([ctx.i18n.t('button:back')]);

    ctx.replyWithMarkdownV2(
      ctx.i18n.t('choose-donations-count'),
      Keyboard.combine(numbersKeys, backKey).reply(),
    );
  }

  @WizardStep(3)
  step3(@Ctx() ctx: ExtWizardContext) {
    ctx.session.donationRequest = {};
    ctx.session.donationRequest.type = ctx.message.text;

    const numbersKeys = Keyboard.make(range(1, 10), keyboardOptions(5));
    const backKey = Keyboard.make([ctx.i18n.t('button:back')]);

    ctx.replyWithMarkdownV2(
      ctx.i18n.t('choose-donations-count'),
      Keyboard.combine(numbersKeys, backKey).reply(),
    );
  }

  @WizardStep(4)
  async step4(@Ctx() ctx: ExtWizardContext) {
    ctx.session.donationRequest.count = +ctx.message.text;

    const numbersKeys = Keyboard.make(range(1, 10), keyboardOptions(5));
    const backKey = Keyboard.make([ctx.i18n.t('button:back')]);

    ctx.replyWithMarkdownV2(
      ctx.i18n.t('choose-donations-count'),
      Keyboard.combine(numbersKeys, backKey).reply(),
    );
  }

  @SceneLeave()
  leave(@Ctx() ctx: ExtContext) {
    this.generalHandler.start(ctx, false);
  }

  @Hears(TelegrafI18n.match('button:back'))
  back(@Ctx() ctx: ExtContext) {
    ctx.scene.leave();
  }
}
