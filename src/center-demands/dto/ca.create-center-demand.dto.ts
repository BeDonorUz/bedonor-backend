import { ApiProperty } from '@nestjs/swagger';
import { DonationTypeEnum, BloodGroupsEnum } from '@prisma/client';
import { IsInt, IsPositive, IsEnum, Max } from 'class-validator';

export class CACreateCenterDemandDto {
  @IsInt()
  @IsPositive()
  @Max(100)
  count: number;

  @ApiProperty({ enum: DonationTypeEnum })
  @IsEnum(DonationTypeEnum)
  type: DonationTypeEnum;

  @ApiProperty({ enum: BloodGroupsEnum })
  @IsEnum(BloodGroupsEnum)
  group: BloodGroupsEnum;
}
