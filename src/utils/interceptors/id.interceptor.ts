import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class IdInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    if (
      Object.prototype.hasOwnProperty.call(req, 'params') &&
      Object.prototype.hasOwnProperty.call(req.params, 'id')
    ) {
      req.params.id = +req.params.id;
    }

    return next.handle();
  }
}
