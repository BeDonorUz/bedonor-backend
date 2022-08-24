import { Update, Hears, Ctx } from 'nestjs-telegraf';
import { ExtContext } from '../utils/types';
import { match } from '../utils/i18n';
import { PrismaService } from '../../prisma/prisma.service';

@Update()
export class InfoHandler {
  constructor(private readonly prisma: PrismaService) {}

  @Hears(match('button:how-to-become-donor'))
  howToBecomeDonor(@Ctx() ctx: ExtContext) {
    ctx.scene.enter('become-donor');
  }

  @Hears(match('button:where-to-donate-blood'))
  async whereToDonateBlood(@Ctx() ctx: ExtContext) {
    ctx.reply('coming soon');
    // const data = await this.prisma.center.findFirst();
    // const latitude = +data.latitude.toString();
    // const longitude = +data.longitude.toString();
    // ctx.replyWithLocation(latitude, longitude);
  }

  @Hears(match('button:need-donors'))
  async enterNeedDonorsScene(@Ctx() ctx: ExtContext) {
    ctx.scene.enter('need-donors');
  }

  @Hears(match('button:create-request'))
  async enterRequestCreation(@Ctx() ctx: ExtContext) {
    ctx.scene.enter('create-request');
  }
}
