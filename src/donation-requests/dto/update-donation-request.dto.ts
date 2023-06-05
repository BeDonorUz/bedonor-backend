import { DonationRequestStatusEnum } from '@prisma/client';
import { CreateDonationRequestDto } from './create-donation-request.dto';
import { IsEnum } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class UpdateDonationRequestDto extends PartialType(
  CreateDonationRequestDto,
) {
  @IsEnum(DonationRequestStatusEnum)
  status: DonationRequestStatusEnum;
}
