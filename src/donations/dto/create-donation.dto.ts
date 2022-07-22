import { DonationType } from '@prisma/client';
import { IsEnum, IsInt, IsPositive } from 'class-validator';

export class CreateDonationDto {
  @IsEnum(DonationType)
  type: DonationType;

  @IsInt()
  @IsPositive()
  userId: number;
}
