import { Center, City } from '@prisma/client';

export type CenterType = Center & {
  city: City;
};
