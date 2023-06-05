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
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { SACreateUserDto } from './dto/sa.create-user.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from '@prisma/client';
import { SAUpdateUserDto } from './dto/sa.update-user.dto';

const name: string = 'sa/users';

@Controller(name)
@ApiTags(name)
@ApiBearerAuth()
@Roles(UserRolesEnum.SYSTEM_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
export class SAUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() dto: SACreateUserDto): Promise<UserEntity> {
    return this.usersService.create(dto);
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id') id: number): Promise<UserEntity> {
    return this.usersService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findMany(): Promise<UserEntity[]> {
    return this.usersService.findMany();
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  async update(
    @Param('id') id: number,
    @Body() dto: SAUpdateUserDto,
  ): Promise<UserEntity> {
    return this.usersService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  async remove(@Param('id') id: number): Promise<UserEntity> {
    return this.usersService.delete({ id });
  }
}
