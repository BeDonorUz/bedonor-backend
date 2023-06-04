import { PartialType } from '@nestjs/swagger';
import { CACreateCenterDemandDto } from './ca.create-center-demand.dto';

export class CAUpdateCenterDemandDto extends PartialType(
  CACreateCenterDemandDto,
) {}
