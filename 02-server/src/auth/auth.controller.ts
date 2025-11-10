import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthorDto } from 'src/authors/dto/create-author.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('register')
    async register(@Body() createAuthorDto: CreateAuthorDto) {
        const { firstName, lastName, email, password } = createAuthorDto;
        return this.authService.register(firstName, lastName, email, password);
    }
}
