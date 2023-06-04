import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';
import { CommonException } from 'src/utils/common.exception';

const name: string = 'cities';
@Controller(name)
@ApiTags(name)
export class CitiesController {
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
