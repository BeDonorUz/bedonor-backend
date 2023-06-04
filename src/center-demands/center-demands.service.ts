import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CenterDemandsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CenterDemandUncheckedCreateInput) {
    return this.prisma.centerDemand.create({ data });
  }

  async findOne(where: Prisma.CenterDemandWhereInput) {
    return this.prisma.centerDemand.findFirstOrThrow({
      where,
    });
  }

  async findMany(where?: Prisma.CenterDemandWhereInput) {
    return this.prisma.centerDemand.findMany({
      where,
    });
  }

  async update(
    where: Prisma.CenterDemandWhereInput,
    data: Prisma.CenterDemandUpdateInput,
  ) {
    return this.prisma.centerDemand.updateMany({
      data,
      where,
    });
  }

  async delete(where: Prisma.CenterDemandWhereInput) {
    return this.prisma.centerDemand.deleteMany({ where });
  }
}
