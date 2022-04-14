import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthUserDto } from './dto/auth.user.dto';
import { ApiOperation } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiOperation({ summary: 'Авторизация пользователя' })
  async login(@Body() req: AuthUserDto) {
    return this.authService.login(req.username);
  }
}
