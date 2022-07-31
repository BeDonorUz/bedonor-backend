import { Update, Hears, Ctx } from 'nestjs-telegraf';
import { ExtContext } from '../utils/types';
import { TelegrafI18n } from '../utils/i18n';
import { PrismaService } from '../../prisma/prisma.service';

@Update()
export class InfoHandler {
  constructor(private readonly prisma: PrismaService) {}

  @Hears(TelegrafI18n.match('button:how-to-become-donor'))
  howToBecomeDonor(@Ctx() ctx: ExtContext) {
    ctx.scene.enter('become-donor');
  }

  @Hears(TelegrafI18n.match('button:where-to-donate-blood'))
  async whereToDonateBlood(@Ctx() ctx: ExtContext) {
    const data = await this.prisma.center.findFirst();
    const latitude = +data.latitude.toString();
    const longitude = +data.longitude.toString();
    ctx.replyWithLocation(latitude, longitude);
  }
}
