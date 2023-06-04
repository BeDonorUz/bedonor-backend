import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CityUncheckedCreateInput) {
    return this.prisma.city.create({ data });
  }

  async findOne(where: Prisma.CityWhereUniqueInput) {
    return this.prisma.city.findUniqueOrThrow({ where });
  }

  async findMany(where?: Prisma.CityWhereInput) {
    return this.prisma.city.findMany({ where });
  }

  async update(
    where: Prisma.CityWhereUniqueInput,
    data: Prisma.CityUpdateInput,
  ) {
    return this.prisma.city.update({ data, where });
  }

  async delete(where: Prisma.CityWhereUniqueInput) {
    return this.prisma.city.delete({ where });
  }
}
