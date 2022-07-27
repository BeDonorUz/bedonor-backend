import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CenterType } from './center.type';

@Injectable()
export class CentersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CenterUncheckedCreateInput): Promise<CenterType> {
    return this.prisma.center.create({ data, include: { city: true } });
  }

  async findOne(where: Prisma.CenterWhereUniqueInput): Promise<CenterType> {
    return this.prisma.center.findUniqueOrThrow({
      where,
      include: { city: true },
    });
  }

  async findMany(where?: Prisma.CenterWhereInput): Promise<CenterType[]> {
    return this.prisma.center.findMany({ where, include: { city: true } });
  }

  async update(
    where: Prisma.CenterWhereUniqueInput,
    data: Prisma.CenterUpdateInput,
  ): Promise<CenterType> {
    return this.prisma.center.update({ data, where, include: { city: true } });
  }

  async delete(where: Prisma.CenterWhereUniqueInput): Promise<CenterType> {
    return this.prisma.center.delete({ where, include: { city: true } });
  }
}
