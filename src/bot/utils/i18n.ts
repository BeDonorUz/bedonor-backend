import { resolve } from 'path';

export const TelegrafI18n = require('telegraf-i18n');

export const i18n = new TelegrafI18n({
  defaultLanguage: 'en',
  allowMissing: false,
  directory: resolve(__dirname, '../../../../botLocales'),
});
