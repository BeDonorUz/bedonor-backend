import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { PrismaService } from '../prisma/prisma.service';
import { i18n } from './utils/i18n';
import { ExtContext } from './utils/types';

@Injectable()
export class OnInitService implements OnModuleInit {
  constructor(
    @InjectBot() private bot: Telegraf<ExtContext>,
    private readonly prisma: PrismaService,
  ) {}

  async onModuleInit() {
    const locales = await this.prisma.botLocales.findMany({});

    this.bot.catch(console.error);

    for (const locale of locales) {
      i18n.loadLocale(locale.language.toLowerCase(), {
        [locale.name]: locale.text,
      });
    }
  }
}
