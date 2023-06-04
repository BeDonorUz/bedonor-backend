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
import { CommonException } from 'src/utils/common.exception';
import { CenterDemandEntity } from './entities/center-demand.entity';
import { CenterDemandsService } from './center-demands.service';

const name: string = 'center-demands';

@Controller(name)
@ApiTags(name)
export class CenterDemandsController {
  constructor(private readonly centerDemandsService: CenterDemandsService) {}

  @Post()
  @ApiUnauthorizedResponse({ type: CommonException })
  async create() {
    throw new UnauthorizedException();
  }

  @Get(':id')
  @ApiOkResponse({ type: CenterDemandEntity })
  async findOne(@Param('id') id: number) {
    return this.centerDemandsService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: CenterDemandEntity, isArray: true })
  async findMany(@Query('centerId') centerId: string) {
    return this.centerDemandsService.findMany({ centerId: Number(centerId) });
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
