import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Center, Prisma } from '@prisma/client';

@Injectable()
export class CentersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CenterUncheckedCreateInput): Promise<Center> {
    return this.prisma.center.create({ data, include: { city: true } });
  }

  async findOne(where: Prisma.CenterWhereUniqueInput): Promise<Center> {
    return this.prisma.center.findUniqueOrThrow({
      where,
      include: { city: true },
    });
  }

  async findMany(where?: Prisma.CenterWhereInput): Promise<Center[]> {
    return this.prisma.center.findMany({ where });
  }

  async update(
    where: Prisma.CenterWhereUniqueInput,
    data: Prisma.CenterUpdateInput,
  ): Promise<Center> {
    return this.prisma.center.update({ data, where });
  }

  async delete(where: Prisma.CenterWhereUniqueInput): Promise<Center> {
    return this.prisma.center.delete({ where });
  }
}
