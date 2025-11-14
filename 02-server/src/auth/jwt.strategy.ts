import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authorsService: AuthorsService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'dev-secret',
    });
  }

  async validate(payload: any) {
    const author = await this.authorsService.findById(payload.sub);
    if (author) {
      const { id, firstName, lastName, email, avatar } = author as any;
      return { id, firstName, lastName, email, avatar };
    }
    return { id: payload.sub, email: payload.email };
  }
}
