import { Prisma, City } from '@prisma/client';
import { CommonEntity } from '../../common/entities/common.entity';

export class CenterEntity extends CommonEntity {
  name: string;

  cityId: number;

  city: City;

  latitude: Prisma.Decimal;

  longitude: Prisma.Decimal;
}
