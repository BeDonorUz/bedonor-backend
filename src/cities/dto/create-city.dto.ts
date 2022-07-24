import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  name: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
