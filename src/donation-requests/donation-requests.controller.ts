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
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { DonationRequestEntity } from './entiites/donation-request.entity';
import { CreateDonationRequestDto } from './dto/create-donation-request.dto';
import { CommonException } from 'src/utils/common.exception';
import { DonationRequestStatusEnum, UserRolesEnum } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { GetUserPayload } from 'src/users/decorators/get-user.decorator';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { FindDonationRequestsDto } from './dto/find-donation-requests.dto';

const name: string = 'donation-requests';

@Controller(name)
@ApiTags(name)
export class DonationRequestsController {
  constructor(
    private readonly donationRequestsService: DonationRequestsService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: DonationRequestEntity })
  @ApiBearerAuth()
  @Roles(UserRolesEnum.APPLICANT, UserRolesEnum.DONOR)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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
  async findOne(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
  ) {
    return this.donationRequestsService.findOne({
      id,
      OR: [
        { status: DonationRequestStatusEnum.APPROVED },
        { applicantId: userPayload.id },
      ],
    });
  }

  @Get()
  @ApiOkResponse({ type: DonationRequestEntity, isArray: true })
  async findMany(
    @GetUserPayload() userPayload: UserPayloadType,
    @Query() dto: FindDonationRequestsDto,
  ) {
    const { groups, cityId, ...data } = dto;
    return this.donationRequestsService.findMany({
      ...data,
      center: {
        cityId,
      },
      groups: {
        hasSome: groups,
      },
      OR: [
        { status: DonationRequestStatusEnum.APPROVED },
        { applicantId: userPayload.id },
      ],
    });
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
