import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDonationDto } from './create-donation.dto';
import { DonationStatusesEnum } from '@prisma/client';

export class UpdateDonationDto extends PartialType(CreateDonationDto) {
  @ApiProperty({ enum: DonationStatusesEnum })
  status: DonationStatusesEnum;
}
