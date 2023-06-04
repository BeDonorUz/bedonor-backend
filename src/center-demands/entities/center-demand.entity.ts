import { CommonEntity } from 'src/common/entities/common.entity';
import { ApiProperty } from '@nestjs/swagger';
import { BloodGroupsEnum, DonationTypeEnum } from '@prisma/client';

export class CenterDemandEntity extends CommonEntity {
  centerId: number;

  count: number;

  @ApiProperty({ enum: DonationTypeEnum })
  type: DonationTypeEnum;

  @ApiProperty({ enum: BloodGroupsEnum })
  group: BloodGroupsEnum;
}
