import { SACreateCityDto } from './dto/sa.create-city.dto';
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
import { CitiesService } from './cities.service';
import { SAUpdateCityDto } from './dto/sa.update-city.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';

const name: string = 'sa/cities';
@Controller(name)
@ApiTags(name)
@Roles(UserRolesEnum.SYSTEM_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class SACitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @ApiCreatedResponse({ type: CityEntity })
  async create(@Body() dto: SACreateCityDto) {
    return this.citiesService.create(dto);
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
  @ApiOkResponse({ type: CityEntity })
  async update(@Param('id') id: number, @Body() dto: SAUpdateCityDto) {
    return this.citiesService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CityEntity })
  async remove(@Param('id') id: number) {
    return this.citiesService.delete({ id });
  }
}
