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

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  async create(@Body() dto: CreateCityDto): Promise<City> {
    return this.citiesService.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<City> {
    return this.citiesService.findOne({ id });
  }

  @Get()
  async findMany(): Promise<City[]> {
    return this.citiesService.findMany();
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateCityDto,
  ): Promise<City> {
    return this.citiesService.update({ id }, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<City> {
    return this.citiesService.delete({ id });
  }
}
