import { CommonEntity } from '../../common/entities/common.entity';
import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CityEntity extends CommonEntity {
  name: string;

  @ApiProperty({ type: String })
  latitude: Prisma.Decimal;

  @ApiProperty({ type: String })
  longitude: Prisma.Decimal;
}
