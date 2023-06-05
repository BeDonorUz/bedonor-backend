import { PartialType } from '@nestjs/swagger';
import { SACreateCityDto } from './sa.create-city.dto';

export class SAUpdateCityDto extends PartialType(SACreateCityDto) {}
