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
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
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
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from 'src/users/enum/user-roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

const name: string = 'donations';

@Controller(name)
@ApiTags(name)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
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
  @Roles(
    UserRolesEnum.DONOR,
    UserRolesEnum.CENTER_ADMIN,
    UserRolesEnum.SYSTEM_ADMIN,
  )
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
