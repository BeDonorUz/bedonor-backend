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
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DonationEntity } from './entities/donation.entity';

const name: string = 'donations';

@Controller(name)
@UseGuards(JwtAuthGuard)
@ApiTags(name)
@ApiBearerAuth()
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  @ApiCreatedResponse({ type: DonationEntity })
  async create(@Body() dto: CreateDonationDto): Promise<DonationEntity> {
    return this.donationsService.create(dto);
  }

  @Get(':id')
  @ApiOkResponse({ type: DonationEntity })
  async findOne(@Param('id') id: number): Promise<DonationEntity> {
    return this.donationsService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: DonationEntity, isArray: true })
  async findMany(): Promise<DonationEntity[]> {
    return this.donationsService.findMany();
  }

  @Patch(':id')
  @ApiOkResponse({ type: DonationEntity })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateDonationDto,
  ): Promise<DonationEntity> {
    return this.donationsService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DonationEntity })
  async remove(@Param('id') id: number): Promise<DonationEntity> {
    return this.donationsService.delete({ id });
  }
}
