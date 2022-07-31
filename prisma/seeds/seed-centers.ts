import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const getTashkentCenters = async (): Promise<
  Prisma.CenterCreateManyInput[]
> => {
  const tashkent = await prisma.city.findUniqueOrThrow({
    where: { name: 'Tashkent' },
    select: { id: true },
  });

  return [
    {
      name: 'Республиканский Центр Переливания Крови',
      latitude: 41.26413125540165,
      longitude: 69.22924627613766,
      cityId: tashkent.id,
    },
  ];
};

export default async () => {
  const tashkentCenters = await getTashkentCenters();

  return prisma.center.createMany({
    data: [...tashkentCenters],
    skipDuplicates: true,
  });
};
