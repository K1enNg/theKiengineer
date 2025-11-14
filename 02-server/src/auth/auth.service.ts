import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthorsService } from 'src/authors/authors.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private authorsService: AuthorsService,
        private jwtService: JwtService
    ) {}

    async validateAuthor(email: string, password: string): Promise<any> {
        const author = await this.authorsService.findByEmail(email);
        if (author && (await bcrypt.compare(password, author.password))) {
            const { password, ...result } = author;
            return result;
        }
        throw new UnauthorizedException("Invalid credentials");
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const author = await this.authorsService.findByEmail(email);
        if (!author) {
            throw new UnauthorizedException("Invalid email or password");
        }


        const isPasswordValid = await bcrypt.compare(password, author.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid email or password");
        }

        const payload = { email: author.email, sub: author.id };
        return {
            access_token: this.jwtService.sign(payload),
            author: {
                id: author.id,
                firstName: author.firstName,
                lastName: author.lastName,
                email: author.email,
                avatar: author.avatar
            }
        };
    }

    async register(firstName: string, lastName: string, email: string, password: string) {
        const isExisting = await this.authorsService.findByEmail(email);
        if (isExisting) {
            throw new UnauthorizedException("Email already exists");
        }

        const hashed = await bcrypt.hash(password, 10);
        return this.authorsService.create({firstName, lastName, email, password: hashed});
    }
}
