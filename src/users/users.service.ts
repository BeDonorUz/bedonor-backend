import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UserType } from './user.type';

@Injectable()
export class UsersService {
  private readonly include: Prisma.UserInclude = {
    _count: true,
    donations: {
      take: 20,
      orderBy: [{ createdAt: 'desc' }],
    },
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserUncheckedCreateInput): Promise<UserType> {
    return this.prisma.user.create({ data, include: this.include });
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<UserType> {
    return this.prisma.user.findUniqueOrThrow({
      where,
      include: this.include,
    });
  }

  async findMany(where?: Prisma.UserWhereInput): Promise<UserType[]> {
    return this.prisma.user.findMany({ where, include: this.include });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<UserType> {
    return this.prisma.user.update({
      data,
      where,
      include: this.include,
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<UserType> {
    return this.prisma.user.delete({ where, include: this.include });
  }
}
