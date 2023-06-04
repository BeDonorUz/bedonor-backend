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
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { DonationEntity } from './entities/donation.entity';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from 'src/users/enum/user-roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { GetUserPayload } from 'src/users/decorators/get-user.decorator';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { CommonException } from 'src/utils/common.exception';

const name: string = 'sa/donations';

@Controller(name)
@ApiTags(name)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@Roles(UserRolesEnum.SYSTEM_ADMIN)
@ApiBearerAuth()
export class SADonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  @ApiCreatedResponse({ type: DonationEntity })
  async create(@Body() dto: CreateDonationDto) {
    return this.donationsService.create(dto);
  }

  @Get(':id')
  @ApiOkResponse({ type: DonationEntity })
  async findOne(
    @Param('id') id: number,
    @GetUserPayload() userPayload: UserPayloadType,
  ) {
    return this.donationsService.findOne(userPayload, { id });
  }

  @Get()
  @ApiOkResponse({ type: DonationEntity, isArray: true })
  async findMany(@GetUserPayload() userPayload: UserPayloadType) {
    return this.donationsService.findMany(userPayload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DonationEntity })
  async update(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
    @Body() dto: UpdateDonationDto,
  ) {
    return this.donationsService.update(userPayload, dto, { id });
  }

  @Delete(':id')
  @ApiUnauthorizedResponse({ type: CommonException })
  async remove(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
  ) {
    return this.donationsService.delete(userPayload, { id });
  }
}
