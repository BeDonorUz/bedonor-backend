import { Controller, Post, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginOutputDto } from './dto/login-output.dto';
import { LoginInputDto } from './dto/login-input.dto';

const name: string = 'auth';

@Controller(name)
@ApiTags(name)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() _: LoginInputDto,
    @Request() req: any,
  ): Promise<LoginOutputDto> {
    return this.authService.login(req.body);
  }
}
