import { Context } from 'telegraf';
import I18n from 'telegraf-i18n';
import { Message } from 'telegraf/typings/core/types/typegram';
import { SceneContextScene } from 'telegraf/typings/scenes';

export type SessionContext = {
  languageCode: string;
};

export type ExtContext = Context & {
  i18n: I18n;
  scene: SceneContextScene<Context>;
  session: SessionContext;
};

export type TextMessage = Message.TextMessage;
