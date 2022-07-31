import { DonationRequestsService } from './donation-requests.service';
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
import { DonationRequestEntity } from './entiites/donation-request.entity';
import { CreateDonationRequestDto } from './dto/create-donation-request.dto';
import { UpdateDonationRequestDto } from './dto/update-donation-request.dto';

const name: string = 'donation-requests';

@Controller(name)
@ApiTags(name)
export class DonationRequestsController {
  constructor(
    private readonly donationRequestsService: DonationRequestsService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: DonationRequestEntity })
  async create(
    @Body() dto: CreateDonationRequestDto,
  ): Promise<DonationRequestEntity> {
    return this.donationRequestsService.create(dto);
  }

  @Get(':id')
  @ApiOkResponse({ type: DonationRequestEntity })
  async findOne(@Param('id') id: number): Promise<DonationRequestEntity> {
    return this.donationRequestsService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: DonationRequestEntity, isArray: true })
  async findMany(): Promise<DonationRequestEntity[]> {
    return this.donationRequestsService.findMany();
  }

  @Patch(':id')
  @ApiOkResponse({ type: DonationRequestEntity })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateDonationRequestDto,
  ): Promise<DonationRequestEntity> {
    return this.donationRequestsService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DonationRequestEntity })
  async remove(@Param('id') id: number): Promise<DonationRequestEntity> {
    return this.donationRequestsService.delete({ id });
  }
}
