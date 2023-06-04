import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.DonationRequestUncheckedCreateInput) {
    return this.prisma.donationRequest.create({ data });
  }

  async findOne(where: Prisma.DonationRequestWhereUniqueInput) {
    return this.prisma.donationRequest.findUniqueOrThrow({
      where,
    });
  }

  async findMany(where?: Prisma.DonationRequestWhereInput) {
    return this.prisma.donationRequest.findMany({
      where,
    });
  }

  async update(
    where: Prisma.DonationRequestWhereUniqueInput,
    data: Prisma.DonationUpdateInput,
  ) {
    return this.prisma.donationRequest.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.DonationRequestWhereUniqueInput) {
    return this.prisma.donationRequest.delete({ where });
  }
}
