import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { hash } from 'bcryptjs';
import { SACreateUserDto } from './dto/sa.create-user.dto';
import { SAUpdateUserDto } from './dto/sa.update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: SACreateUserDto) {
    const { password, ...dto } = data;
    const passwordHash = await this._hashPassword(password);
    return this.prisma.user.create({
      data: { ...dto, passwordHash },
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUniqueOrThrow({
      where,
    });
  }

  async findMany(where?: Prisma.UserWhereInput) {
    return this.prisma.user.findMany({ where });
  }

  async update(where: Prisma.UserWhereUniqueInput, data: SAUpdateUserDto) {
    const passwordHash = data.password
      ? await this._hashPassword(data.password)
      : undefined;

    return this.prisma.user.update({
      data: {
        ...data,
        passwordHash,
      },
      where,
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }

  private async _hashPassword(password: string): Promise<string> {
    return hash(password, Number(process.env.BCRYPT_ROUNDS));
  }
}
