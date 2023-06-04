import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRolesEnum } from 'src/users/enum/user-roles.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UsersService } from 'src/users/users.service';
import { UserPayloadType } from '../types/jwt-payload.type';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRolesEnum[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const { userPayload: payload } = context
      .switchToHttp()
      .getRequest<{ userPayload: UserPayloadType }>();

    const user = await this.usersService.findOne({ id: payload.id });

    return requiredRoles.some((role) => user.role === role);
  }
}
