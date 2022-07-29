import { Context } from 'telegraf';
import I18n from 'telegraf-i18n';
import { Message } from 'telegraf/typings/core/types/typegram';

export type ExtContext = Context & {
  i18n: I18n;
};

export type TextMessage = Message.TextMessage;
