import { SetMetadata } from '@nestjs/common';
import { UserRolesEnum } from 'src/users/enum/user-roles.enum';

export const ROLES_KEY = 'role';
export const Roles = (...roles: UserRolesEnum[]) =>
  SetMetadata(ROLES_KEY, roles);
