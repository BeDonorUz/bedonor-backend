import { CentersService } from './centers.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CenterEntity } from './entites/center.entity';
import { CommonException } from 'src/utils/common.exception';

const name: string = 'centers';

@Controller(name)
@ApiTags(name)
export class CentersController {
  constructor(private readonly centersService: CentersService) {}

  @Post()
  @ApiUnauthorizedResponse({ type: CommonException })
  async create() {
    throw new UnauthorizedException();
  }

  @Get(':id')
  @ApiOkResponse({ type: CenterEntity })
  async findOne(@Param('id') id: number) {
    return this.centersService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: CenterEntity, isArray: true })
  async findMany(@Query('cityId') cityIdSrc: string) {
    const cityId = cityIdSrc ? Number(cityIdSrc) : undefined;
    return this.centersService.findMany({ cityId });
  }

  @Patch(':id')
  @ApiUnauthorizedResponse({ type: CommonException })
  async update() {
    throw new UnauthorizedException();
  }

  @Delete(':id')
  @ApiUnauthorizedResponse({ type: CommonException })
  async remove() {
    throw new UnauthorizedException();
  }
}
