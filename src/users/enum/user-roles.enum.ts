/* eslint-disable @typescript-eslint/no-redeclare */
export const UserRolesPublicEnum = {
  DONOR: 'DONOR',
  APPLICANT: 'APPLICANT',
} as const;

export type UserRolesPublicEnum =
  typeof UserRolesPublicEnum[keyof typeof UserRolesPublicEnum];

export const UserRolesEnum = {
  ...UserRolesPublicEnum,
  CENTER_ADMIN: 'CENTER_ADMIN',
  SYSTEM_ADMIN: 'SYSTEM_ADMIN',
} as const;

export type UserRolesEnum = typeof UserRolesEnum[keyof typeof UserRolesEnum];
