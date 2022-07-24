import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'login',
    });
  }

  async validate(login: string, pass: string): Promise<Omit<User, 'password'>> {
    const user = await this.authService.validateUser(login, pass);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
