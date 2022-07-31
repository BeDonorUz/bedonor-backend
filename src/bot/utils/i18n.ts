import { resolve } from 'path';
import { LanguagesType } from './types';

export const TelegrafI18n = require('telegraf-i18n');

export const i18n = new TelegrafI18n({
  defaultLanguage: 'en',
  allowMissing: false,
  directory: resolve(__dirname, '../../../../botLocales'),
});

export const languages: LanguagesType[] = ['UZ', 'EN', 'RU'];

export const match = (name: string): string[] => {
  const result: string[] = [];

  languages.forEach((language) => {
    result.push(i18n.t(language.toLowerCase(), name));
  });

  return result;
};
