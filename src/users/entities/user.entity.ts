import { CommonEntity } from '../../common/entities/common.entity';
import { DonationEntity } from '../../donations/entities/donation.entity';
import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { Donation, UserRolesEnum } from '@prisma/client';

export class UserEntityPrivate extends CommonEntity {
  id: number;

  login: string;

  passwordHash: string;

  firstName: string;

  lastName: string;

  patronymic: string | null;

  @ApiProperty({ enum: UserRolesEnum })
  role: UserRolesEnum;

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

export class UserEntity extends OmitType(UserEntityPrivate, ['passwordHash']) {}
