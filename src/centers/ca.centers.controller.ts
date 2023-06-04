import { CentersService } from './centers.service';
import { UpdateCenterDto } from './dto/update-center.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CenterEntity } from './entites/center.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from 'src/users/enum/user-roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CommonException } from 'src/utils/common.exception';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { GetUserPayload } from 'src/users/decorators/get-user.decorator';

const name: string = 'ca/centers';

@Controller(name)
@ApiTags(name)
@Roles(UserRolesEnum.CENTER_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@ApiBearerAuth()
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
  @ApiUnauthorizedResponse({ type: CommonException })
  async remove() {
    throw new UnauthorizedException();
  }
}
