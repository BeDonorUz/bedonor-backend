import { Update, Ctx, Start, Help } from 'nestjs-telegraf';
import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { i18n } from '../utils/i18n';
import { ExtContext } from '../utils/types';

@Update()
export class GeneralBotService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const locales = await this.prisma.botLocales.findMany({});

    locales.forEach((locale) => {
      i18n.loadLocale(locale.language.toLowerCase(), {
        [locale.name]: locale.text,
      });
    });
  }

  @Start()
  start(@Ctx() ctx: ExtContext) {
    ctx.reply(ctx.i18n.t('start'));
  }

  @Help()
  help(@Ctx() ctx: ExtContext) {
    ctx.reply(ctx.i18n.t('help'));
  }
}
