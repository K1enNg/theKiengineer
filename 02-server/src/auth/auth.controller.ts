import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthorDto } from 'src/authors/dto/create-author.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('register')
    async register(@Body() createAuthorDto: CreateAuthorDto) {
        const { firstName, lastName, email, password } = createAuthorDto;
        return this.authService.register(firstName, lastName, email, password);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: any) {
      return req.user;
    }
}
