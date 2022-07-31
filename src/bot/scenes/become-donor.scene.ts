import { Ctx, Scene, SceneEnter, SceneLeave, Hears } from 'nestjs-telegraf';
import { ExtContext } from '../utils/types';
import { Keyboard } from 'telegram-keyboard';
import { GeneralHandler } from '../handlers/general.handler';
import { TelegrafI18n } from '../utils/i18n';

@Scene('centers')
export class BecomeDonorScene {
  constructor(private readonly generalHandler: GeneralHandler) {}

  @SceneEnter()
  enter(@Ctx() ctx: ExtContext) {
    ctx.replyWithMarkdown(
      ctx.i18n.t('how-to-become-donor'),
      Keyboard.reply([ctx.i18n.t('button:back')]),
    );
  }

  @SceneLeave()
  leave(@Ctx() ctx: ExtContext) {
    this.generalHandler.start(ctx);
  }

  @Hears(TelegrafI18n.match('button:back'))
  back(@Ctx() ctx: ExtContext) {
    ctx.scene.leave();
  }
}
