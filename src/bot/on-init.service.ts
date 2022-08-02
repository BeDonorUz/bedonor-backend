import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { i18n } from './utils/i18n';

@Injectable()
export class OnInitService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const locales = await this.prisma.botLocales.findMany({});

    for (const locale of locales) {
      i18n.loadLocale(locale.language.toLowerCase(), {
        [locale.name]: locale.text,
      });
    }
  }
}
