import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { TelegrafArgumentsHost } from 'nestjs-telegraf';
import { ExtContext } from '../utils/types';

@Catch()
export class TelegrafExceptionFilter implements ExceptionFilter {
  async catch(exception: Error, host: ArgumentsHost): Promise<void> {
    console.error('TelegrafExceptionFilter caught an error:', exception);
    const telegrafHost = TelegrafArgumentsHost.create(host);
    const ctx = telegrafHost.getContext<ExtContext>();

    await ctx.reply(ctx.i18n.t('error'));
    ctx.scene.leave();
    ctx.session = null;
  }
}
