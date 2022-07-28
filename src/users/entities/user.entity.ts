import { CommonEntity } from '../../common/entities/common.entity';
import { UserType } from '../user.type';
import { DonationEntity } from '../../donations/entities/donation.entity';
import { ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { Donation } from '@prisma/client';

console.log('DonationEntity', DonationEntity);

export class UserEntity extends CommonEntity implements UserType {
  id: number;

  login: string;

  password: string;

  firstName: string;

  lastName: string;

  patronymic: string | null;

  @ApiPropertyOptional({
    type: () => OmitType(DonationEntity, ['user']),
    isArray: true,
    maxItems: 20,
  })
  donations?: Donation[];

  @ApiPropertyOptional()
  _count?: {
    donations?: number;
  };
}
