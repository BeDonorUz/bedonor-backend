import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UserType } from './user.type';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserUncheckedCreateInput): Promise<UserType> {
    return this.prisma.user.create({ data, include: { donations: true } });
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<UserType> {
    return this.prisma.user.findUniqueOrThrow({
      where,
      include: { donations: true },
    });
  }

  async findMany(where?: Prisma.UserWhereInput): Promise<UserType[]> {
    return this.prisma.user.findMany({ where, include: { donations: true } });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<UserType> {
    return this.prisma.user.update({
      data,
      where,
      include: { donations: true },
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<UserType> {
    return this.prisma.user.delete({ where, include: { donations: true } });
  }
}
