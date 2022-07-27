import { CreateCityDto } from './dto/create-city.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { City } from '@prisma/client';
import { CitiesService } from './cities.service';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';

@Controller('cities')
@ApiTags('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @ApiCreatedResponse({ type: CityEntity })
  async create(@Body() dto: CreateCityDto): Promise<City> {
    return this.citiesService.create(dto);
  }

  @Get(':id')
  @ApiOkResponse({ type: CityEntity })
  async findOne(@Param('id') id: number): Promise<City> {
    return this.citiesService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: CityEntity, isArray: true })
  async findMany(): Promise<City[]> {
    return this.citiesService.findMany();
  }

  @Patch(':id')
  @ApiOkResponse({ type: CityEntity })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateCityDto,
  ): Promise<City> {
    return this.citiesService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CityEntity })
  async remove(@Param('id') id: number): Promise<City> {
    return this.citiesService.delete({ id });
  }
}
