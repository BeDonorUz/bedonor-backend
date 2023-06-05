import { BloodGroupsEnum, DonationTypeEnum } from '@prisma/client';
import { CommonEntity } from '../../common/entities/common.entity';
import { ApiProperty } from '@nestjs/swagger';

export class DonationRequestEntity extends CommonEntity {
  id: number;

  firstName: string;

  lastName: string;

  patronymic?: string;

  applicantId: number;

  @ApiProperty({ enum: DonationTypeEnum })
  type: DonationTypeEnum;

  @ApiProperty({ enum: BloodGroupsEnum, isArray: true })
  groups: BloodGroupsEnum[];

  count: number;

  centerId: number;

  dateTo?: Date;

  createdAt: Date;

  updatedAt: Date;
}
