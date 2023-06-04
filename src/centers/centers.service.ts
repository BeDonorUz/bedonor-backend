import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CentersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CenterUncheckedCreateInput) {
    return this.prisma.center.create({ data });
  }

  async findOne(where: Prisma.CenterWhereUniqueInput) {
    return this.prisma.center.findUniqueOrThrow({
      where,
    });
  }

  async findMany(where?: Prisma.CenterWhereInput) {
    return this.prisma.center.findMany({ where });
  }

  async update(
    where: Prisma.CenterWhereUniqueInput,
    data: Prisma.CenterUpdateInput,
  ) {
    return this.prisma.center.update({ data, where });
  }

  async delete(where: Prisma.CenterWhereUniqueInput) {
    return this.prisma.center.delete({ where });
  }
}
