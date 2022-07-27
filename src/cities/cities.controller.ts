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
import { CitiesService } from './cities.service';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';

const name: string = 'cities';
@Controller(name)
@ApiTags(name)
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @ApiCreatedResponse({ type: CityEntity })
  async create(@Body() dto: CreateCityDto): Promise<CityEntity> {
    return this.citiesService.create(dto);
  }

  @Get(':id')
  @ApiOkResponse({ type: CityEntity })
  async findOne(@Param('id') id: number): Promise<CityEntity> {
    return this.citiesService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: CityEntity, isArray: true })
  async findMany(): Promise<CityEntity[]> {
    return this.citiesService.findMany();
  }

  @Patch(':id')
  @ApiOkResponse({ type: CityEntity })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateCityDto,
  ): Promise<CityEntity> {
    return this.citiesService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CityEntity })
  async remove(@Param('id') id: number): Promise<CityEntity> {
    return this.citiesService.delete({ id });
  }
}
