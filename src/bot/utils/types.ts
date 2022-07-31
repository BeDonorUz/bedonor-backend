import { Context } from 'telegraf';
import I18n from 'telegraf-i18n';
import { Message, Update } from 'telegraf/typings/core/types/typegram';
import { SceneContextScene } from 'telegraf/typings/scenes';

export type SessionContext = {
  languageCode: string;
};

export type ExtContext = Context & {
  i18n: I18n;
  scene: SceneContextScene<Context>;
  session: SessionContext;
  message: Update.New &
    Update.NonChannel &
    Message & {
      text: string;
    };
};

export type TextMessage = Message.TextMessage;

export type LanguagesType = 'UZ' | 'EN' | 'RU';
