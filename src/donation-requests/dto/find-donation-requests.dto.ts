import { PartialType } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';
import { CreateDonationRequestDto } from './create-donation-request.dto';

export class FindDonationRequestsDto extends PartialType(
  CreateDonationRequestDto,
) {
  @IsInt()
  @IsPositive()
  cityId: number;
}
