import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  name: string;
}
