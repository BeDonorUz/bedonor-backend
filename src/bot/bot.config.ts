import { TelegrafModuleOptions } from 'nestjs-telegraf';
import { i18n } from './utils/i18n';

export const botConfig: TelegrafModuleOptions = {
  token: process.env.BOT_TOKEN,
  middlewares: [i18n.middleware()],
  launchOptions: {
    dropPendingUpdates: true,
  },
};
