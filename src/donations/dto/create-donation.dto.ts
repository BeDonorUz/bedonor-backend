import { IsEnum, IsInt, IsPositive } from 'class-validator';
import { DonationTypeEnum } from '../enum/donation-type.enum';

export class CreateDonationDto {
  @IsEnum(DonationTypeEnum)
  type: DonationTypeEnum;

  @IsInt()
  @IsPositive()
  donorId: number;

  @IsInt()
  @IsPositive()
  centerId: number;

  @IsInt()
  @IsPositive()
  requestId: number;
}
