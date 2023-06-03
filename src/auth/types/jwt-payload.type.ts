import { UserRolesEnum } from '@prisma/client';

export type JwtPayloadType = {
  login: string;
  id: number;
  role: UserRolesEnum;
};
