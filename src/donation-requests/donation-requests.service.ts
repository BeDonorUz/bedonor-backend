import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { DonationRequestStatusEnum, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.DonationRequestUncheckedCreateInput) {
    return this.prisma.donationRequest.create({ data });
  }

  async findOne(where: Prisma.DonationRequestWhereInput) {
    return this.prisma.donationRequest.findFirstOrThrow({
      where,
    });
  }

  async findMany(where?: Prisma.DonationRequestWhereInput) {
    return this.prisma.donationRequest.findMany({
      where,
    });
  }

  async update(
    where: Prisma.DonationRequestWhereInput,
    data: Prisma.DonationRequestUpdateInput,
  ) {
    return this.prisma.donationRequest.updateMany({
      data,
      where,
    });
  }

  async delete(where: Prisma.DonationRequestWhereInput) {
    return this.prisma.donationRequest.deleteMany({ where });
  }

  @Cron('0 1 * * *')
  async markOutdatedRequests() {
    return this.prisma.donationRequest.updateMany({
      where: {
        dateTo: {
          lt: new Date(),
        },
      },
      data: {
        status: DonationRequestStatusEnum.OUTDATED,
      },
    });
  }
}
