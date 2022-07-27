import { Donation, User } from '@prisma/client';

export type DonationType = Donation & {
  user: User;
};
