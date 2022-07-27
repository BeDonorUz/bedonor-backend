import { CommonEntity } from '../../common/entities/common.entity';
import { UserType } from '../user.type';
import { DonationEntity } from '../../donations/entities/donation.entity';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Donation } from '@prisma/client';

console.log('DonationEntity', DonationEntity);

export class UserEntity extends CommonEntity implements UserType {
  id: number;

  login: string;

  password: string;

  firstName: string;

  lastName: string;

  patronymic: string | null;

  @ApiProperty({
    type: () => OmitType(DonationEntity, ['user']),
    isArray: true,
  })
  donations: Donation[];
}
