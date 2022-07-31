import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { DonationType } from './donation.type';

@Injectable()
export class DonationsService {
  private readonly include = { user: true };

  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: Prisma.DonationUncheckedCreateInput,
  ): Promise<DonationType> {
    return this.prisma.donation.create({ data, include: this.include });
  }

  async findOne(where: Prisma.DonationWhereUniqueInput): Promise<DonationType> {
    return this.prisma.donation.findUniqueOrThrow({
      where,
      include: this.include,
    });
  }

  async findMany(where?: Prisma.DonationWhereInput): Promise<DonationType[]> {
    return this.prisma.donation.findMany({ where, include: this.include });
  }

  async update(
    where: Prisma.DonationWhereUniqueInput,
    data: Prisma.DonationUpdateInput,
  ): Promise<DonationType> {
    return this.prisma.donation.update({
      data,
      where,
      include: this.include,
    });
  }

  async delete(where: Prisma.DonationWhereUniqueInput): Promise<DonationType> {
    return this.prisma.donation.delete({ where, include: this.include });
  }
}
