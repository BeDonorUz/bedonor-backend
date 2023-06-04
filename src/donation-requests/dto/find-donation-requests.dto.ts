import { ApiProperty } from '@nestjs/swagger';
import { DonationTypeEnum, BloodGroupsEnum } from '@prisma/client';
import {
  IsDate,
  IsInt,
  IsPositive,
  Max,
  Min,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class FindDonationRequestsDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  lastName: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  patronymic: string;

  @IsInt()
  @Min(1)
  @Max(10)
  count: number;

  @IsOptional()
  @IsDate()
  dateTo?: Date;

  @IsInt()
  @IsPositive()
  centerId: number;

  @IsInt()
  @IsPositive()
  cityId: number;

  @ApiProperty({ enum: DonationTypeEnum })
  @IsEnum(DonationTypeEnum)
  type: DonationTypeEnum;

  @ApiProperty({ enum: BloodGroupsEnum, isArray: true })
  @IsEnum(BloodGroupsEnum, { each: true })
  groups: BloodGroupsEnum[];
}
