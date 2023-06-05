import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCenterDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  address: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsInt()
  @IsPositive()
  cityId: number;
}
