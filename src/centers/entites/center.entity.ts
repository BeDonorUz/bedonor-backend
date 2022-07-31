import { Prisma } from '@prisma/client';
import { CommonEntity } from '../../common/entities/common.entity';
import { CenterType } from '../center.type';
import { CityEntity } from '../../cities/entities/city.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CenterEntity extends CommonEntity implements CenterType {
  name: string;

  address: string;

  cityId: number;

  city: CityEntity;

  @ApiProperty({ type: Number })
  latitude: Prisma.Decimal;

  @ApiProperty({ type: Number })
  longitude: Prisma.Decimal;
}
