import { DonationTypeEnum } from '@prisma/client';
import { IsEnum, IsInt, IsPositive } from 'class-validator';

export class CreateDonationDto {
  @IsEnum(DonationTypeEnum)
  type: DonationTypeEnum;

  @IsInt()
  @IsPositive()
  userId: number;
}
