import { DonationRequestStatusEnum } from '@prisma/client';
import { CreateDonationRequestDto } from './create-donation-request.dto';
import { IsEnum } from 'class-validator';

export class UpdateDonationRequestDto extends CreateDonationRequestDto {
  @IsEnum(DonationRequestStatusEnum)
  status: DonationRequestStatusEnum;
}
