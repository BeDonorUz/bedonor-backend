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
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { CommonException } from 'src/utils/common.exception';
import { GetUserPayload } from './decorators/get-user.decorator';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from './enum/user-roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CAUpdateUserDto } from './dto/ca.update-user.dto';

const name: string = 'ca/users';

@Controller(name)
@ApiTags(name)
@ApiBearerAuth()
@Roles(UserRolesEnum.SYSTEM_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
export class CAUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiUnauthorizedResponse({ type: CommonException })
  async create() {
    throw new UnauthorizedException();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findMany() {
    return this.usersService.findMany();
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  async update(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
    @Body() dto: CAUpdateUserDto,
  ) {
    if (id !== userPayload.id) {
      throw new UnauthorizedException();
    }
    return this.usersService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiUnauthorizedResponse({ type: CommonException })
  async remove() {
    throw new UnauthorizedException();
  }
}
