import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { LocalAuthGuard } from './strategies/local-auth.guard';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginOutputDto } from './dto/login-output.dto';
import { LoginInputDto } from './dto/login-input.dto';

const name: string = 'auth';

@Controller(name)
@ApiTags(name)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() _: LoginInputDto,
    @Request() req: any,
  ): Promise<LoginOutputDto> {
    return this.authService.login(req);
  }
}
