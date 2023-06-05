import { CommonEntity } from '../../common/entities/common.entity';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { UserRolesEnum } from '@prisma/client';

export class UserPrivateEntity extends CommonEntity {
  login: string;

  passwordHash: string;

  firstName: string;

  lastName: string;

  patronymic: string | null;

  @ApiProperty({ enum: UserRolesEnum })
  role: UserRolesEnum;
}

export class UserEntity extends OmitType(UserPrivateEntity, ['passwordHash']) {}
