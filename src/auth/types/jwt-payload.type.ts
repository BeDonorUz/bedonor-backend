import { UserRolesEnum } from '@prisma/client';

export type UserPayloadType = {
  login: string;
  id: number;
  role: UserRolesEnum;
};
