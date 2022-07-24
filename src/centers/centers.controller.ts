import { Center } from '@prisma/client';
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

@Controller('centers')
export class CentersController {
  constructor(private readonly centersService: CentersService) {}

  @Post()
  async create(@Body() dto: CreateCenterDto): Promise<Center> {
    return this.centersService.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Center> {
    return this.centersService.findOne({ id });
  }

  @Get()
  async findMany(): Promise<Center[]> {
    return this.centersService.findMany();
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateCenterDto,
  ): Promise<Center> {
    return this.centersService.update({ id }, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Center> {
    return this.centersService.delete({ id });
  }
}
