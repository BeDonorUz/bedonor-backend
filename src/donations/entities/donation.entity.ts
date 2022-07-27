import { DonationTypeEnum, User } from '@prisma/client';
import { CommonEntity } from '../../common/entities/common.entity';
import { DonationType } from '../donation.type';
import { UserEntity } from '../../users/entities/user.entity';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class DonationEntity extends CommonEntity implements DonationType {
  id: number;

  @ApiProperty({ enum: DonationTypeEnum })
  type: DonationTypeEnum;

  userId: number;

  @ApiProperty({ type: () => OmitType(UserEntity, ['donations']) })
  user: User;
}
