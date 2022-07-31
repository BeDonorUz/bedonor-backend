import { DonationRequest, Center } from '@prisma/client';

export type DonationRequestType = DonationRequest & {
  center: Center;
};
