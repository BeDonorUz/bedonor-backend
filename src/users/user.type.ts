import { User, Donation } from '@prisma/client';

export type UserType = User & {
  donations?: Donation[];
  _count?: {
    donations?: number;
  };
};
