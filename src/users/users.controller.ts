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
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { CommonException } from 'src/utils/common.exception';
import { GetUserPayload } from './decorators/get-user.decorator';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { AuthGuard } from 'src/auth/guards/auth.guard';

const name: string = 'users';

@Controller(name)
@ApiTags(name)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
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
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async update(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
    @Body() dto: UpdateUserDto,
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
