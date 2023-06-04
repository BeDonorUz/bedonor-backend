import { IsEnum, IsInt, IsPositive } from 'class-validator';
import { DonationTypeEnum } from '../enum/donation-type.enum';

export class CreateDonationDto {
  @IsEnum(DonationTypeEnum)
  type: DonationTypeEnum;

  @IsInt()
  @IsPositive()
  userId: number;

  @IsInt()
  @IsPositive()
  centerId: number;

  @IsInt()
  @IsPositive()
  requestId: number;
}
