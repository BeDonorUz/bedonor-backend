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
import { CACreateCenterDemandDto } from './dto/ca.create-center-demand.dto';
import { GetUserPayload } from 'src/users/decorators/get-user.decorator';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { UsersService } from 'src/users/users.service';
import { CAUpdateCenterDemandDto } from './dto/ca.update-center-demand.dto';

const name: string = 'ca/center-demands';

@Controller(name)
@ApiTags(name)
@Roles(UserRolesEnum.CENTER_ADMIN)
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
  async create(
    @GetUserPayload() userPayload: UserPayloadType,
    @Body() dto: CACreateCenterDemandDto,
  ) {
    const user = await this.usersService.findOne({ id: userPayload.id });

    return this.centerDemandsService.create({
      ...dto,
      centerId: user.employedCenterId,
    });
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
  async update(
    @GetUserPayload() userPayload: UserPayloadType,
    @Body() dto: CAUpdateCenterDemandDto,
    @Param('id') id: number,
  ) {
    const user = await this.usersService.findOne({ id: userPayload.id });

    return this.centerDemandsService.update(
      { id, centerId: user.employedCenterId },
      dto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: CenterDemandEntity })
  async remove(@Param('id') id: number) {
    return this.centerDemandsService.delete({ id });
  }
}
