import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { DonationType } from './donation.type';

@Injectable()
export class DonationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: Prisma.DonationUncheckedCreateInput,
  ): Promise<DonationType> {
    return this.prisma.donation.create({ data, include: { user: true } });
  }

  async findOne(where: Prisma.DonationWhereUniqueInput): Promise<DonationType> {
    return this.prisma.donation.findUniqueOrThrow({
      where,
      include: { user: true },
    });
  }

  async findMany(where?: Prisma.DonationWhereInput): Promise<DonationType[]> {
    return this.prisma.donation.findMany({ where, include: { user: true } });
  }

  async update(
    where: Prisma.DonationWhereUniqueInput,
    data: Prisma.DonationUpdateInput,
  ): Promise<DonationType> {
    return this.prisma.donation.update({
      data,
      where,
      include: { user: true },
    });
  }

  async delete(where: Prisma.DonationWhereUniqueInput): Promise<DonationType> {
    return this.prisma.donation.delete({ where, include: { user: true } });
  }
}
