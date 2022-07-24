import { PrismaClient, Prisma } from '@prisma/client';

// yandex.uz/maps data

const prisma = new PrismaClient();

const data: Prisma.CityCreateInput[] = [
  { name: 'Tashkent', latitude: 41.311158, longitude: 69.279737 },
  { name: 'Samarkand', latitude: 39.654404, longitude: 66.975827 },
  { name: 'Namangan', latitude: 41.000085, longitude: 71.672579 },
  { name: 'Andijan', latitude: 40.783388, longitude: 72.350663 },
  { name: 'Nukus', latitude: 42.460341, longitude: 59.617996 },
  { name: 'Fergana', latitude: 40.38942, longitude: 71.783009 },
  { name: 'Bukhara', latitude: 39.767966, longitude: 64.421728 },
  { name: 'Qarshi', latitude: 38.841612, longitude: 65.789988 },
  { name: 'Kokand', latitude: 40.539123, longitude: 70.940434 },
  { name: 'Margilan', latitude: 40.469051, longitude: 71.720765 },
  { name: 'Bukhara', latitude: 39.767966, longitude: 64.421728 },
];

export default () => {
  return prisma.city.createMany({ data });
};
