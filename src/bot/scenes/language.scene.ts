import { Ctx, Scene, SceneEnter, SceneLeave, Hears } from 'nestjs-telegraf';
import { ExtContext, LanguagesType } from '../utils/types';
import { Keyboard } from 'telegram-keyboard';
import { GeneralHandler } from '../handlers/general.handler';
import { TelegrafI18n } from '../utils/i18n';
import { PrismaService } from '../../prisma/prisma.service';
import { BotLanguagesEnum, Prisma } from '@prisma/client';

@Scene('language')
export class LanguageScene {
  private static readonly languagesButtons: string[] = [
    'Uzbek',
    'English',
    'Russian',
  ];

  constructor(
    private readonly generalHandler: GeneralHandler,
    private readonly prisma: PrismaService,
  ) {}

  @SceneEnter()
  enter(@Ctx() ctx: ExtContext) {
    ctx.replyWithMarkdown(
      ctx.i18n.t('choose-language'),
      Keyboard.reply(LanguageScene.languagesButtons),
    );
  }

  @Hears(LanguageScene.languagesButtons)
  async chooseLang(@Ctx() ctx: ExtContext) {
    const { id } = ctx.from;
    const { text } = ctx.message;
    const langWithoutEnum: LanguagesType = text
      .substr(0, 2)
      .toUpperCase() as LanguagesType;
    const language = BotLanguagesEnum[langWithoutEnum];
    const user: Prisma.BotUserCreateInput = { id, language };

    await this.prisma.botUser.upsert({
      create: user,
      update: user,
      where: { id },
    });

    ctx.session.languageCode = langWithoutEnum.toLowerCase();
    ctx.i18n.locale(langWithoutEnum.toLowerCase());
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
