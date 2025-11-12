import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';


@Injectable()
export class AuthServiceSpec {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService
  ) {}
};
