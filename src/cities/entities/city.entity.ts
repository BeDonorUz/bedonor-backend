import { CommonEntity } from '../../common/entities/common.entity';
import { City, Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CityEntity extends CommonEntity implements City {
  id: number;

  name: string;

  @ApiProperty({ type: Number })
  latitude: Prisma.Decimal;

  @ApiProperty({ type: Number })
  longitude: Prisma.Decimal;
}
