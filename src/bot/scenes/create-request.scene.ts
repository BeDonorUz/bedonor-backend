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
    console.log('step1');
    if (Object.prototype.hasOwnProperty.call(ctx.session, 'wizardStep')) {
      console.log('entering step', ctx.session.wizardStep);
      ctx.wizard.selectStep(ctx.session.wizardStep);
      delete ctx.session.wizardStep;
      return;
    }

    ctx.session.nextScene = 'create-request';
    ctx.session.wizardStep = 4;
    return ctx.scene.enter('choose-city');
  }

  @WizardStep(2)
  async step2(@Ctx() ctx: ExtWizardContext) {
    console.log('step2');
    ctx.session.nextScene = 'create-request';
    ctx.session.wizardStep = 3;
    return ctx.scene.enter('choose-center');
  }

  @WizardStep(3)
  async step3(@Ctx() ctx: ExtWizardContext) {
    console.log('step3');
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

  @WizardStep(4)
  step4(@Ctx() ctx: ExtWizardContext) {
    ctx.reply('scene 4');
    ctx.session.donationRequest = {};
    ctx.session.donationRequest.type = ctx.message.text;

    const numbersKeys = Keyboard.make(range(1, 10), keyboardOptions(5));
    const backKey = Keyboard.make([ctx.i18n.t('button:back')]);

    ctx.replyWithMarkdownV2(
      ctx.i18n.t('choose-donations-count'),
      Keyboard.combine(numbersKeys, backKey).reply(),
    );
  }

  @WizardStep(5)
  async step5(@Ctx() ctx: ExtWizardContext) {
    ctx.reply('scene 5');
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
    console.log('leaving create-request');
    this.generalHandler.start(ctx, false);
  }

  @Hears(TelegrafI18n.match('button:back'))
  back(@Ctx() ctx: ExtContext) {
    ctx.scene.leave();
  }
}
