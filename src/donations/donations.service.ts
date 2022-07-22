import { Injectable } from '@nestjs/common';
import { Donation, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.DonationUncheckedCreateInput): Promise<Donation> {
    return this.prisma.donation.create({ data });
  }

  async findOne(where: Prisma.DonationWhereUniqueInput): Promise<Donation> {
    return this.prisma.donation.findUniqueOrThrow({ where });
  }

  async findMany(where?: Prisma.DonationWhereInput): Promise<Donation[]> {
    return this.prisma.donation.findMany({ where });
  }

  async update(
    where: Prisma.DonationWhereUniqueInput,
    data: Prisma.DonationUpdateInput,
  ): Promise<Donation> {
    return this.prisma.donation.update({ data, where });
  }

  async delete(where: Prisma.DonationWhereUniqueInput): Promise<Donation> {
    return this.prisma.donation.delete({ where });
  }
}
