import { IsEnum, IsInt, IsPositive, ValidateIf } from 'class-validator';
import { UserRolesEnum } from '../enum/user-roles.enum';
import { CreateUserDto } from './create-user.dto';
import { OmitType } from '@nestjs/swagger';

export class SACreateUserDto extends OmitType(CreateUserDto, ['role']) {
  @IsEnum(UserRolesEnum)
  role: UserRolesEnum;

  @IsInt()
  @IsPositive()
  @ValidateIf(
    (data: SACreateUserDto) => data.role === UserRolesEnum.CENTER_ADMIN,
  )
  employedCenterId?: number;
}
