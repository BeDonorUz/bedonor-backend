import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { hash } from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';

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

  async create(data: CreateUserDto) {
    const { password, ...dto } = data;
    const passwordHash = await hash(
      password,
      Number(process.env.BCRYPT_ROUNDS),
    );
    return this.prisma.user.create({
      data: { ...dto, passwordHash },
      include: this.include,
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUniqueOrThrow({
      where,
      include: this.include,
    });
  }

  async findMany(where?: Prisma.UserWhereInput) {
    return this.prisma.user.findMany({ where, include: this.include });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ) {
    return this.prisma.user.update({
      data,
      where,
      include: this.include,
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where, include: this.include });
  }
}
