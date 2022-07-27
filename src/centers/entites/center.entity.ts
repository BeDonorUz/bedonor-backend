import { Prisma } from '@prisma/client';
import { CommonEntity } from '../../common/entities/common.entity';
import { CenterType } from '../center.type';
import { CityEntity } from '../../cities/entities/city.entity';

export class CenterEntity extends CommonEntity implements CenterType {
  name: string;

  cityId: number;

  city: CityEntity;

  latitude: Prisma.Decimal;

  longitude: Prisma.Decimal;
}
