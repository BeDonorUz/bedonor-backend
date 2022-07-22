import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (Object.prototype.hasOwnProperty.call(req.body, 'id')) {
      req.body.id = +req.body.id;
    }
    if (Object.prototype.hasOwnProperty.call(req.query, 'id')) {
      req.body.id = +req.body.id;
    }
    next();
  }
}
