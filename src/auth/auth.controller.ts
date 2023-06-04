import {
  Controller,
  Post,
  Request,
  Body,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginOutputDto } from './dto/login-output.dto';
import { LoginInputDto } from './dto/login-input.dto';
import { UserPayloadType } from './types/jwt-payload.type';
import { GetUserPayload } from 'src/users/decorators/get-user.decorator';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from './guards/auth.guard';

const name: string = 'auth';

@Controller(name)
@ApiTags(name)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  async login(
    @Body() _: LoginInputDto,
    @Request() req: any,
  ): Promise<LoginOutputDto> {
    return this.authService.login(req.body);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  async getMe(@GetUserPayload() userPayload: UserPayloadType) {
    return this.usersService.findOne({ id: userPayload.id });
  }
}
