import { Update, Ctx, Start, Help } from 'nestjs-telegraf';
import { ExtContext } from '../utils/types';
import { Keyboard } from 'telegram-keyboard';

@Update()
export class GeneralHandler {
  @Start()
  start(@Ctx() ctx: ExtContext) {
    ctx.reply(
      ctx.i18n.t('start'),
      Keyboard.reply([
        ctx.i18n.t('button:how-to-become-donor'),
        ctx.i18n.t('button:where-to-donate-blood'),
      ]),
    );
  }

  @Help()
  help(@Ctx() ctx: ExtContext) {
    ctx.reply(ctx.i18n.t('help'));
  }
}
