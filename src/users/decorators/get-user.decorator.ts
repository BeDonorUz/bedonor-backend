import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayloadType } from 'src/auth/types/jwt-payload.type';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    return ctx.switchToHttp().getRequest<{ user: JwtPayloadType }>().user;
  },
);
