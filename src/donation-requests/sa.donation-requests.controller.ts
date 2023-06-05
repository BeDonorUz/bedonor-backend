import { DonationRequestsService } from './donation-requests.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DonationRequestEntity } from './entiites/donation-request.entity';
import { CreateDonationRequestDto } from './dto/create-donation-request.dto';
import { UpdateDonationRequestDto } from './dto/update-donation-request.dto';
import { GetUserPayload } from 'src/users/decorators/get-user.decorator';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { FindDonationRequestsDto } from './dto/find-donation-requests.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRolesEnum } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';

const name: string = 'sa/donation-requests';

@Controller(name)
@ApiTags(name)
@ApiBearerAuth()
@Roles(UserRolesEnum.SYSTEM_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
export class SADonationRequestsController {
  constructor(
    private readonly donationRequestsService: DonationRequestsService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: DonationRequestEntity })
  async create(
    @GetUserPayload() userPayload: UserPayloadType,
    @Body() dto: CreateDonationRequestDto,
  ) {
    return this.donationRequestsService.create({
      ...dto,
      applicantId: userPayload.id,
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: DonationRequestEntity })
  async findOne(@Param('id') id: number) {
    return this.donationRequestsService.findOne({ id });
  }

  @Get()
  @ApiOkResponse({ type: DonationRequestEntity, isArray: true })
  async findMany(@Query() dto: FindDonationRequestsDto) {
    const { groups, cityId, ...data } = dto;

    return this.donationRequestsService.findMany({
      ...data,
      center: {
        cityId,
      },
      groups: {
        hasSome: groups,
      },
    });
  }

  @Patch(':id')
  @ApiOkResponse({ type: DonationRequestEntity })
  async update(@Param('id') id: number, @Body() dto: UpdateDonationRequestDto) {
    return this.donationRequestsService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DonationRequestEntity })
  async remove(@Param('id') id: number) {
    return this.donationRequestsService.delete({ id });
  }
}
