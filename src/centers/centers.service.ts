import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, UserRolesEnum } from '@prisma/client';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CentersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

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
    userPayload: UserPayloadType,
    where: Prisma.CenterWhereUniqueInput,
    data: Prisma.CenterUpdateInput,
  ) {
    if (userPayload.role === UserRolesEnum.CENTER_ADMIN) {
      await this._checkCenterAdminAttachment(userPayload.id, where.id);
    }

    return this.prisma.center.update({ data, where });
  }

  async delete(where: Prisma.CenterWhereUniqueInput) {
    return this.prisma.center.delete({ where });
  }

  private async _checkCenterAdminAttachment(
    userId: number,
    centerId: number,
  ): Promise<void> {
    const user = await this.usersService.findOne({ id: userId });

    if (user.employedCenterId !== centerId) {
      throw new UnauthorizedException();
    }
  }
}
