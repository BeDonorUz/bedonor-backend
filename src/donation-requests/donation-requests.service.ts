import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationRequestsService {
  private readonly include: { center: true };

  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.DonationRequestUncheckedCreateInput) {
    return this.prisma.donationRequest.create({ data, include: this.include });
  }

  async findOne(where: Prisma.DonationRequestWhereUniqueInput) {
    return this.prisma.donationRequest.findUniqueOrThrow({
      where,
      include: this.include,
    });
  }

  async findMany(where?: Prisma.DonationRequestWhereInput) {
    return this.prisma.donationRequest.findMany({
      where,
      include: this.include,
    });
  }

  async update(
    where: Prisma.DonationRequestWhereUniqueInput,
    data: Prisma.DonationUpdateInput,
  ) {
    return this.prisma.donationRequest.update({
      data,
      where,
      include: this.include,
    });
  }

  async delete(where: Prisma.DonationRequestWhereUniqueInput) {
    return this.prisma.donationRequest.delete({ where, include: this.include });
  }
}
