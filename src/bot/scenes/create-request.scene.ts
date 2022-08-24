import { Action, Ctx, On, Wizard, WizardStep } from 'nestjs-telegraf';
import { ExtWizardContext } from '../utils/types';
import { GeneralHandler } from '../handlers/general.handler';
import { Key, Keyboard } from 'telegram-keyboard';
import { keyboardOptions } from '../utils/markup';
import { range } from '../utils/math';
import { AbstractScene } from './abstract.scene';
import { DonationRequestsService } from '../../donation-requests/donation-requests.service';
import { BLOOD_GROUPS } from '../utils/constants';
import { BloodGroupsEnum, DonationTypeEnum } from '@prisma/client';
import { UseFilters } from '@nestjs/common';
import { TelegrafExceptionFilter } from '../filters/telegraf.filter';

@Wizard('create-request')
@UseFilters(TelegrafExceptionFilter)
export class CreateRequestScene extends AbstractScene {
  constructor(
    protected readonly generalHandler: GeneralHandler,
    protected readonly donationRequestsService: DonationRequestsService,
  ) {
    super();
  }

  @WizardStep(1)
  async step1(@Ctx() ctx: ExtWizardContext) {
    if (!Object.prototype.hasOwnProperty.call(ctx.session, 'cityName')) {
      ctx.session.nextScene = 'create-request';
      return ctx.scene.enter('choose-city');
    }

    if (!Object.prototype.hasOwnProperty.call(ctx.session, 'centerId')) {
      ctx.session.nextScene = 'create-request';
      return ctx.scene.enter('choose-center');
    }
    const typesKeys = Keyboard.make([
      Key.callback(ctx.i18n.t('plasma'), DonationTypeEnum.PLASMA),
      Key.callback(ctx.i18n.t('whole-blood'), DonationTypeEnum.WHOLE_BLOOD),
      Key.callback(ctx.i18n.t('platelets'), DonationTypeEnum.PLATELETS),
    ]);
    const backKey = Keyboard.make([
      Key.callback(ctx.i18n.t('button:back'), 'back'),
    ]);

    await ctx.editMessageText(
      ctx.i18n.t('choose-donation-type'),
      Keyboard.combine(typesKeys, backKey).inline(),
    );
    await ctx.answerCbQuery();

    ctx.wizard.next();
  }

  @WizardStep(2)
  @On('callback_query')
  async step2(@Ctx() ctx: ExtWizardContext) {
    const data = ctx.update?.callback_query?.data;
    ctx.session.donationRequest = {};
    ctx.session.donationRequest.groups = [];
    ctx.session.donationRequest.type =
      DonationTypeEnum[data as DonationTypeEnum];

    await ctx.editMessageText(
      ctx.i18n.t('choose-blood-group'),
      Keyboard.inline(
        [
          ...Object.keys(BLOOD_GROUPS).map((key: BloodGroupsEnum) =>
            Key.callback(BLOOD_GROUPS[key], key),
          ),
          Key.callback(ctx.i18n.t('button:back'), 'back'),
          Key.callback(ctx.i18n.t('button:done'), 'done'),
        ],
        keyboardOptions(2),
      ),
    );

    ctx.wizard.next();
  }

  @WizardStep(3)
  @Action('done')
  async step3Done(@Ctx() ctx: ExtWizardContext) {
    await ctx.answerCbQuery();

    const numbersKeys = Keyboard.make(
      range(1, 10).map((x) => Key.callback(x, x)),
      keyboardOptions(5),
    );
    const backKey = Keyboard.make([
      Key.callback(ctx.i18n.t('button:back'), 'back'),
    ]);

    await ctx.editMessageText(
      ctx.i18n.t('choose-donations-count'),
      Keyboard.combine(numbersKeys, backKey).inline(),
    );

    ctx.wizard.next();
  }

  @WizardStep(3)
  @On('callback_query')
  async step3(@Ctx() ctx: ExtWizardContext) {
    const data = ctx.update?.callback_query?.data;
    const group = BloodGroupsEnum[data as BloodGroupsEnum];
    const groups = ctx.session.donationRequest.groups;
    const index = groups.indexOf(group);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    index === -1 ? groups.push(group) : groups.splice(index, 1);

    await ctx.answerCbQuery();
    await ctx.editMessageText(
      ctx.i18n.t('choose-blood-group'),
      Keyboard.inline(
        [
          ...Object.keys(BLOOD_GROUPS).map((key: BloodGroupsEnum) =>
            Key.callback(
              ctx.session.donationRequest.groups.includes(key)
                ? `${BLOOD_GROUPS[key]} ✔️`
                : BLOOD_GROUPS[key],
              key,
            ),
          ),
          Key.callback(ctx.i18n.t('button:back'), 'back'),
          Key.callback(ctx.i18n.t('button:done'), 'done'),
        ],
        keyboardOptions(2),
      ),
    );
  }

  @WizardStep(4)
  async step4(@Ctx() ctx: ExtWizardContext) {
    const count = +ctx.update?.callback_query?.data;
    const donationRequest = ctx.session.donationRequest;

    await ctx.answerCbQuery();
    const request = await this.donationRequestsService.create({
      centerId: ctx.session.centerId,
      type: donationRequest.type,
      count: count,
      groups: donationRequest.groups,
    });
    ctx.reply(`request #${request.id} successfully created`);
    ctx.scene.leave();
  }
}
