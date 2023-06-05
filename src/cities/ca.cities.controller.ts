import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CommonException } from 'src/utils/common.exception';

const name: string = 'ca/cities';
@Controller(name)
@ApiTags(name)
@Roles(UserRolesEnum.CENTER_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class CACitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @ApiUnauthorizedResponse({ type: CommonException })
  async create() {
    throw new UnauthorizedException();
  }

  @Get(':id')
  @ApiOkResponse({ type: CityEntity })
  async findOne(@Param('id') id: number) {
    return this.citiesService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: CityEntity, isArray: true })
  async findMany() {
    return this.citiesService.findMany();
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
