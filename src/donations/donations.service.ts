import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DonationStatusesEnum, Prisma, UserRolesEnum } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DonationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async create(data: Omit<Prisma.DonationUncheckedCreateInput, 'status'>) {
    return this.prisma.donation.create({
      data: { ...data, status: DonationStatusesEnum.PENDING },
    });
  }

  async findOne(
    userPayload: UserPayloadType,
    where: Prisma.DonationWhereInput = {},
  ) {
    await this._filterDonationsAccess(userPayload, where);
    return this.prisma.donation.findFirstOrThrow({
      where,
    });
  }

  async findMany(
    userPayload: UserPayloadType,
    where: Prisma.DonationWhereInput = {},
  ) {
    await this._filterDonationsAccess(userPayload, where);
    return this.prisma.donation.findMany({ where });
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
    });
  }

  async delete(
    userPayload: UserPayloadType,
    where: Prisma.DonationWhereUniqueInput = {},
  ) {
    if (userPayload.role !== UserRolesEnum.SYSTEM_ADMIN) {
      throw new UnauthorizedException();
    }
    return this.prisma.donation.delete({ where });
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
