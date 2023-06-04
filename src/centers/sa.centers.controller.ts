import { CentersService } from './centers.service';
import { CreateCenterDto } from './dto/create-center.dto';
import { UpdateCenterDto } from './dto/update-center.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CenterEntity } from './entites/center.entity';

const name: string = 'centers';

@Controller(name)
@ApiTags(name)
export class CentersController {
  constructor(private readonly centersService: CentersService) {}

  @Post()
  @ApiCreatedResponse({ type: CenterEntity })
  async create(@Body() dto: CreateCenterDto) {
    return this.centersService.create(dto);
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
  async update(@Param('id') id: number, @Body() dto: UpdateCenterDto) {
    return this.centersService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CenterEntity })
  async remove(@Param('id') id: number) {
    return this.centersService.delete({ id });
  }
}
