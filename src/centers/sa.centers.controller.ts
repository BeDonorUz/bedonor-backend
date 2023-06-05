import { CentersService } from './centers.service';
import { CreateCenterDto } from './dto/create-center.dto';
import { UpdateCenterDto } from './dto/update-center.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CenterEntity } from './entites/center.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from 'src/users/enum/user-roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { GetUserPayload } from 'src/users/decorators/get-user.decorator';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';

const name: string = 'sa/centers';

@Controller(name)
@ApiTags(name)
@Roles(UserRolesEnum.SYSTEM_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class SACentersController {
  constructor(private readonly centersService: CentersService) {}

  @Post()
  @ApiCreatedResponse({ type: CenterEntity })
  async create(@Body() dto: CreateCenterDto) {
    return this.centersService.create(dto);
  }

  @Get(':id')
  @ApiOkResponse({ type: CenterEntity })
  async findOne(@Param('id') id: number) {
    return this.centersService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: CenterEntity, isArray: true })
  async findMany() {
    return this.centersService.findMany();
  }

  @Patch(':id')
  @ApiOkResponse({ type: CenterEntity })
  async update(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
    @Body() dto: UpdateCenterDto,
  ) {
    return this.centersService.update(userPayload, { id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CenterEntity })
  async remove(@Param('id') id: number) {
    return this.centersService.delete({ id });
  }
}
