import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { LoginOutputDto } from './dto/login-output.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    login: string,
    pass: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOne({ login });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  login(user: User): LoginOutputDto {
    const payload = { login: user.login, userId: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
