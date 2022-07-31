import { Update, Ctx, Start, Help, Hears } from 'nestjs-telegraf';
import { ExtContext } from '../utils/types';
import { Keyboard } from 'telegram-keyboard';
import { needToRegister } from '../utils/user';
import { match } from '../utils/i18n';

@Update()
export class GeneralHandler {
  @Start()
  start(@Ctx() ctx: ExtContext, direct: boolean = true) {
    ctx.scene.leave();
    if (direct && needToRegister(ctx)) {
      return;
    }

    ctx.reply(
      ctx.i18n.t('start'),
      Keyboard.reply([
        [ctx.i18n.t('button:how-to-become-donor')],
        [ctx.i18n.t('button:where-to-donate-blood')],
        [ctx.i18n.t('button:change-language')],
      ]),
    );
  }

  @Help()
  help(@Ctx() ctx: ExtContext) {
    ctx.reply(ctx.i18n.t('help'));
  }

  @Hears(match('button:change-language'))
  changeLanguage(@Ctx() ctx: ExtContext) {
    ctx.scene.enter('language');
  }
}
