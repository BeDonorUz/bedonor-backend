import { PrismaClient } from '@prisma/client';
import { ExtContext } from '../utils/types';

const prisma = new PrismaClient();

export const languageMiddleware = async (
  ctx: ExtContext,
  next: () => Promise<void>,
) => {
  const id = ctx.from.id;

  if (Object.prototype.hasOwnProperty.call(ctx.session, 'languageCode')) {
    ctx.i18n.locale(ctx.session.languageCode);
    return next();
  }

  const user = await prisma.botUser.findUnique({
    where: { id },
    select: { language: true },
  });
  const language = user?.language.toLowerCase();

  if (language) {
    ctx.i18n.locale(language);
    ctx.session.languageCode = language;
  }

  return next();
};
