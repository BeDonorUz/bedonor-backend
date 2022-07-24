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
import { Donation } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';

@Controller('donations')
@UseGuards(JwtAuthGuard)
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  async create(@Body() dto: CreateDonationDto): Promise<Donation> {
    return this.donationsService.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Donation> {
    return this.donationsService.findOne({ id });
  }

  @Get()
  async findMany(): Promise<Donation[]> {
    return this.donationsService.findMany();
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateDonationDto,
  ): Promise<Donation> {
    return this.donationsService.update({ id }, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Donation> {
    return this.donationsService.delete({ id });
  }
}
