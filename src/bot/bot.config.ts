import { TelegrafModuleOptions } from 'nestjs-telegraf';
import { languageMiddleware } from './middlewares/language.middleware';
import { sessionMiddleware } from './middlewares/session.middleware';
import { i18n } from './utils/i18n';

export const botConfig: TelegrafModuleOptions = {
  token: process.env.BOT_TOKEN,
  middlewares: [i18n.middleware(), sessionMiddleware, languageMiddleware],
  launchOptions: {
    dropPendingUpdates: true,
  },
};
