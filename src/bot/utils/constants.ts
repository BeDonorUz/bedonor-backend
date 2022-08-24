import { BloodGroupsEnum } from '@prisma/client';

export const BLOOD_GROUPS: Record<BloodGroupsEnum, string> = {
  Pos0: '1 +',
  Neg0: '1 -',
  PosA: '2 +',
  NegA: '2 -',
  PosB: '3 +',
  NegB: '3 -',
  PosAB: '4 +',
  NegAB: '4 -',
};
