import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserPayloadType } from 'src/auth/types/jwt-payload.type';

export const GetUserPayload = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    return ctx.switchToHttp().getRequest<{ userPayload: UserPayloadType }>()
      .userPayload;
  },
);
