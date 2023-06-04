import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const centers: Prisma.CenterCreateInput[] = [
  {
    name: 'Республиканский Центр Переливания Крови',
    latitude: 41.26413125540165,
    longitude: 69.22924627613766,
    city: {
      connect: {
        name: 'Tashkent',
      },
    },
  },
];

export default async () => {
  for (const center of centers) {
    await prisma.center.create({ data: center });
  }
};
