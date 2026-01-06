import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthorsModule } from './authors/authors.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { MailModule } from './mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    AuthorsModule,
    ArticlesModule,
    SubscribersModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
