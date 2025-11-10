import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthorsService } from 'src/authors/authors.service';
import { CreateAuthorDto } from 'src/authors/dto/create-author.dto';

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

    async login(author: any) {
        const payload = { email: author.email, sub: author.id };
        return {
            access_token: this.jwtService.sign(payload),
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
