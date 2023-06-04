import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginOutputDto } from './dto/login-output.dto';
import { compare } from 'bcryptjs';
import { LoginInputDto } from './dto/login-input.dto';
import { UserPayloadType } from './types/jwt-payload.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginInputDto): Promise<LoginOutputDto> {
    const user = await this.usersService.findOne({ login: data.login });
    const isPasswordCorrect = await compare(data.password, user.passwordHash);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException();
    }

    const payload: UserPayloadType = {
      login: user.login,
      id: user.id,
      role: user.role,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
