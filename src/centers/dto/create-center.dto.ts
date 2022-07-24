import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCenterDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  name: string;

  @IsInt()
  @IsPositive()
  cityId: number;
}
