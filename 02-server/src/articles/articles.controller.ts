import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('articles')
@UseGuards(JwtAuthGuard)
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateArticleDto) {
    // console.log("AUTH HEADER:", req.headers.authorization);
    // console.log("USER:", req.user);
    return this.service.create(req.user.id, dto);
  }

  @Get()
  findAll(@Req() req) {
    return this.service.findAllByAuthor(req.user.id);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.service.findOne(slug);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() dto: UpdateArticleDto) {
    return this.service.update(slug, dto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.service.remove(slug);
  }
}
