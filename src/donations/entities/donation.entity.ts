import { DonationStatusesEnum, DonationTypeEnum } from '@prisma/client';
import { CommonEntity } from '../../common/entities/common.entity';
import { ApiProperty } from '@nestjs/swagger';

export class DonationEntity extends CommonEntity {
  id: number;

  @ApiProperty({ enum: DonationTypeEnum })
  type: DonationTypeEnum;

  @ApiProperty({ enum: DonationStatusesEnum })
  status: DonationStatusesEnum;

  userId: number;

  centerId: number;

  requestId: number;
}
