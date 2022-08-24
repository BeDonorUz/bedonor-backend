import { Context } from 'telegraf';
import I18n from 'telegraf-i18n';
import { Message, Update } from 'telegraf/typings/core/types/typegram';
import { SceneContextScene, WizardContext } from 'telegraf/typings/scenes';
import { BloodGroupsEnum, DonationTypeEnum } from '@prisma/client';

export type SessionDonationRequest = {
  type?: DonationTypeEnum;
  count?: number;
  groups?: BloodGroupsEnum[];
};

export type SessionContext = {
  leaveToStart?: boolean;
  languageCode?: string;
  cityName?: string;
  centerId?: number;
  nextScene?: string;
  donationRequest?: SessionDonationRequest;
  wizardStep?: number;
};

export type ExtUpdate = Context['update'] & {
  callback_query: {
    id: string;
    from: Context['from'];
    message: Context['message'];
    chat_instance: string;
    data: string;
  };
};

export type ExtContext = Context & {
  i18n: I18n;
  update: ExtUpdate;
  scene: SceneContextScene<Context>;
  session: SessionContext;
  message: Update.New &
    Update.NonChannel &
    Message & {
      text: string;
    };
};

export type ExtWizardContext = WizardContext & ExtContext;

export type TextMessage = Message.TextMessage;

export type LanguagesType = 'UZ' | 'EN' | 'RU';
