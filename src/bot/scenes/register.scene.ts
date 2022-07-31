import {
  Ctx,
  Scene,
  SceneEnter,
  SceneLeave,
  Hears,
  Action,
} from 'nestjs-telegraf';
import { ExtContext, LanguagesType } from '../utils/types';
import { Key, Keyboard } from 'telegram-keyboard';
import { GeneralHandler } from '../handlers/general.handler';
import { TelegrafI18n } from '../utils/i18n';
import { PrismaService } from '../../prisma/prisma.service';
import { BotLanguagesEnum, Prisma } from '@prisma/client';

@Scene('register')
export class RegisterScene {
  constructor(
    private readonly generalHandler: GeneralHandler,
    private readonly prisma: PrismaService,
  ) {}

  @SceneEnter()
  enter(@Ctx() ctx: ExtContext) {
    console.log('enter lang');
    ctx.replyWithMarkdown(
      ctx.i18n.t('choose-language'),
      Keyboard.inline([
        Key.callback('🇺🇿 Uz', 'choose-lang:uz'),
        Key.callback('🇬🇧 En', 'choose-lang:en'),
        Key.callback('🇷🇺 Ru', 'choose-lang:ru'),
      ]),
    );
  }

  @Action(['choose-lang:uz', 'choose-lang:en', 'choose-lang:ru'])
  async chooseLang(@Ctx() ctx: ExtContext) {
    console.log('enter chooseLang');
    const { id } = ctx.from;
    const { data } = ctx.callbackQuery;
    const langWithoutEnum: LanguagesType = data
      .substr(data.indexOf(':') + 1)
      .toUpperCase() as LanguagesType;
    const language = BotLanguagesEnum[langWithoutEnum];
    const user: Prisma.BotUserCreateInput = { id, language };

    await this.prisma.botUser.upsert({
      create: user,
      update: user,
      where: { id },
    });

    ctx.i18n.locale(langWithoutEnum.toLowerCase());
    await ctx.answerCbQuery();
    await ctx.replyWithMarkdown(ctx.i18n.t('language-changed'));
    ctx.scene.leave();
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
