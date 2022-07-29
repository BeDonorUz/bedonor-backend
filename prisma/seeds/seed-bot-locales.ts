import { PrismaClient, Prisma, BotLanguagesEnum } from '@prisma/client';

const prisma = new PrismaClient();

const uzData: Prisma.BotLocalesCreateInput[] = [
  { name: 'start', text: 'Salom!', language: BotLanguagesEnum.UZ },
  {
    name: 'help',
    text: "Bu yerda yordam bo'ladi",
    language: BotLanguagesEnum.UZ,
  },
];

const enData: Prisma.BotLocalesCreateInput[] = [
  { name: 'start', text: 'Hi!', language: BotLanguagesEnum.EN },
  { name: 'help', text: 'Here will be FAQ', language: BotLanguagesEnum.EN },
];

const ruData: Prisma.BotLocalesCreateInput[] = [
  { name: 'start', text: 'Привет!', language: BotLanguagesEnum.RU },
  { name: 'help', text: 'Тут будет ЧАВО', language: BotLanguagesEnum.RU },
];

export default () => {
  return prisma.botLocales.createMany({
    data: [...uzData, ...enData, ...ruData],
    skipDuplicates: true,
  });
};
