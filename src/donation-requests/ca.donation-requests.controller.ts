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
import { Roles } from 'src/auth/decorators/roles.decorator';
import { DonationRequestStatusEnum, UserRolesEnum } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { GetUserPayload } from 'src/users/decorators/get-user.decorator';
import { UsersService } from 'src/users/users.service';
import { FindDonationRequestsDto } from './dto/find-donation-requests.dto';

const name: string = 'donation-requests';

@Controller(name)
@ApiTags(name)
@Roles(UserRolesEnum.CENTER_ADMIN)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class DonationRequestsController {
  constructor(
    private readonly donationRequestsService: DonationRequestsService,
    private readonly usersServiceTs: UsersService,
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
  async findOne(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
  ) {
    const user = await this.usersServiceTs.findOne({ id: userPayload.id });

    return this.donationRequestsService.findOne({
      id,
      OR: [
        { status: DonationRequestStatusEnum.APPROVED },
        { centerId: user.employedCenterId },
      ],
    });
  }

  @Get()
  @ApiOkResponse({ type: DonationRequestEntity, isArray: true })
  async findMany(
    @GetUserPayload() userPayload: UserPayloadType,
    @Query() dto: FindDonationRequestsDto,
  ) {
    const user = await this.usersServiceTs.findOne({ id: userPayload.id });
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
        { centerId: user.employedCenterId },
      ],
    });
  }

  @Patch(':id')
  @ApiOkResponse({ type: DonationRequestEntity })
  async update(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
    @Body() dto: UpdateDonationRequestDto,
  ) {
    const user = await this.usersServiceTs.findOne({ id: userPayload.id });

    return this.donationRequestsService.update(
      {
        id,
        OR: [
          { status: DonationRequestStatusEnum.APPROVED },
          { centerId: user.employedCenterId },
        ],
      },
      dto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DonationRequestEntity })
  async remove(
    @GetUserPayload() userPayload: UserPayloadType,
    @Param('id') id: number,
  ) {
    const user = await this.usersServiceTs.findOne({ id: userPayload.id });

    return this.donationRequestsService.delete({
      id,
      OR: [
        { status: DonationRequestStatusEnum.APPROVED },
        { centerId: user.employedCenterId },
      ],
    });
  }
}
