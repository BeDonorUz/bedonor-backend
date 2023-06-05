import { Prisma } from '@prisma/client';
import { CommonEntity } from '../../common/entities/common.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CenterEntity extends CommonEntity {
  name: string;

  address: string;

  cityId: number;

  @ApiProperty({ type: String })
  latitude: Prisma.Decimal;

  @ApiProperty({ type: String })
  longitude: Prisma.Decimal;
}
