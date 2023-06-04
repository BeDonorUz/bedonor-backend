import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CommonException } from 'src/utils/common.exception';
import { CenterDemandEntity } from './entities/center-demand.entity';
import { CenterDemandsService } from './center-demands.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { SACreateCenterDemandDto } from './dto/sa.create-center-demand.dto';
import { UsersService } from 'src/users/users.service';
import { SAUpdateCenterDemandDto } from './dto/sa.update-center-demand.dto';

const name: string = 'sa/center-demands';

@Controller(name)
@ApiTags(name)
@Roles(UserRolesEnum.SYSTEM_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class CenterDemandsController {
  constructor(
    private readonly centerDemandsService: CenterDemandsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: CommonException })
  async create(@Body() dto: SACreateCenterDemandDto) {
    return this.centerDemandsService.create(dto);
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
  @ApiOkResponse({ type: CenterDemandEntity })
  async update(@Body() dto: SAUpdateCenterDemandDto, @Param('id') id: number) {
    return this.centerDemandsService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CenterDemandEntity })
  async remove(@Param('id') id: number) {
    return this.centerDemandsService.delete({ id });
  }
}
