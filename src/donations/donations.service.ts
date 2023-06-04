import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma, UserRolesEnum } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DonationsService {
  private readonly include: Prisma.DonationInclude = { user: true };

  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async create(data: Prisma.DonationUncheckedCreateInput) {
    return this.prisma.donation.create({ data, include: this.include });
  }

  async findOne(
    userPayload: UserPayloadType,
    where: Prisma.DonationWhereInput = {},
  ) {
    await this._filterDonationsAccess(userPayload, where);
    return this.prisma.donation.findFirstOrThrow({
      where,
      include: this.include,
    });
  }

  async findMany(
    userPayload: UserPayloadType,
    where: Prisma.DonationWhereInput = {},
  ) {
    await this._filterDonationsAccess(userPayload, where);
    return this.prisma.donation.findMany({ where, include: this.include });
  }

  async update(
    userPayload: UserPayloadType,
    data: Prisma.DonationUpdateInput,
    where: Prisma.DonationWhereUniqueInput = {},
  ) {
    await this._filterDonationsAccess(userPayload, where);
    return this.prisma.donation.update({
      data,
      where,
      include: this.include,
    });
  }

  async delete(
    userPayload: UserPayloadType,
    where: Prisma.DonationWhereUniqueInput = {},
  ) {
    if (userPayload.role !== UserRolesEnum.SYSTEM_ADMIN) {
      throw new UnauthorizedException();
    }
    return this.prisma.donation.delete({ where, include: this.include });
  }

  private async _filterDonationsAccess(
    userPayload: UserPayloadType,
    where: Prisma.DonationWhereInput = {},
  ) {
    if (userPayload.role === UserRolesEnum.DONOR) {
      where.userId = userPayload.id;
    }
    if (userPayload.role === UserRolesEnum.CENTER_ADMIN) {
      const user = await this.usersService.findOne({ id: userPayload.id });
      where.centerId = user.employedCenterId;
    }
  }
}
