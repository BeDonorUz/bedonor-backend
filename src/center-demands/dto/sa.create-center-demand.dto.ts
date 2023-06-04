import { IsInt, IsPositive } from 'class-validator';
import { CACreateCenterDemandDto } from './ca.create-center-demand.dto';

export class SACreateCenterDemandDto extends CACreateCenterDemandDto {
  @IsInt()
  @IsPositive()
  centerId: number;
}
