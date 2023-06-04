import { PartialType } from '@nestjs/swagger';
import { SACreateCenterDemandDto } from './sa.create-center-demand.dto';

export class SAUpdateCenterDemandDto extends PartialType(
  SACreateCenterDemandDto,
) {}
