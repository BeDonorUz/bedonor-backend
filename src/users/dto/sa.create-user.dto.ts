import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { UserRolesEnum } from '../enum/user-roles.enum';

export class SACreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  login: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 128)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  lastName: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  patronymic: string;

  @IsEnum(UserRolesEnum)
  role: UserRolesEnum;
}
