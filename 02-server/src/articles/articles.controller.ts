import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) { }

  @Get('public')
  findAllPublic() {
    return this.service.findAllPublic();
  }


  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Req() req, @Body() dto: CreateArticleDto) {
    // console.log("AUTH HEADER:", req.headers.authorization);
    // console.log("USER:", req.user);
    return this.service.create(req.user.id, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.service.findAllByAuthor(req.user.id);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.service.findOne(slug);
  }

  @Patch(':slug')
  @UseGuards(JwtAuthGuard)
  update(@Param('slug') slug: string, @Body() dto: UpdateArticleDto) {
    return this.service.update(slug, dto);
  }

  @Delete(':slug')
  @UseGuards(JwtAuthGuard)
  remove(@Param('slug') slug: string) {
    return this.service.remove(slug);
  }
}
