import { Action, Ctx, Hears, SceneLeave, Start } from 'nestjs-telegraf';
import { GeneralHandler } from '../handlers/general.handler';
import { TelegrafI18n } from '../utils/i18n';
import { ExtContext } from '../utils/types';

export abstract class AbstractScene {
  protected abstract readonly generalHandler: GeneralHandler;

  @Start()
  start(@Ctx() ctx: ExtContext) {
    ctx.session.leaveToStart = true;
    ctx.scene.leave();
  }

  @SceneLeave()
  leave(@Ctx() ctx: ExtContext) {
    if (ctx.session.leaveToStart) {
      delete ctx.session.leaveToStart;
      this.generalHandler.start(ctx, false);
    }
  }

  @Hears(TelegrafI18n.match('button:back'))
  back(@Ctx() ctx: ExtContext) {
    this.start(ctx);
  }

  @Action('back')
  async backInline(@Ctx() ctx: ExtContext) {
    ctx.session.leaveToStart = true;
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    ctx.scene.leave();
  }
}
