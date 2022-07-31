import { BloodGroupsEnum, DonationTypeEnum } from '@prisma/client';
import { CommonEntity } from '../../common/entities/common.entity';
import { DonationRequestType } from '../donation-request.type';
import { CenterEntity } from '../../centers/entites/center.entity';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class DonationRequestEntity
  extends CommonEntity
  implements DonationRequestType
{
  id: number;

  firstName: string;

  lastName: string;

  patronymic: string | null;

  @ApiProperty({ enum: DonationTypeEnum })
  type: DonationTypeEnum;

  @ApiProperty({ enum: BloodGroupsEnum, isArray: true })
  groups: BloodGroupsEnum[];

  count: number;

  centerId: number;

  dateTo: Date | null;

  @ApiProperty({ type: OmitType(CenterEntity, ['city']) })
  center: Omit<CenterEntity, 'city'>;

  createdAt: Date;

  updatedAt: Date;
}
