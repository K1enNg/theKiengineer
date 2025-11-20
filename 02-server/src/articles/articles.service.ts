import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import slugify from 'slugify';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private repo: Repository<Article>
  ) { }


  async create(authorId: string, dto: CreateArticleDto) {
    const slug = slugify(dto.title, { lower: true })

    const article = this.repo.create({
      ...dto,
      slug,
      author: { id: authorId },
    })
    return this.repo.save(article);
  }

  findAllByAuthor(authorId: string) {
    return this.repo.find({
      where: { author: { id: authorId } },
      order: { createdAt: 'DESC' }
    })
  }

  findOne(slug: string) {
    return this.repo.findOne({ where: { slug } });
  }

  async update(slug: string, dto: UpdateArticleDto) {
    const article = await this.findOne(slug);
    if (!article) {
      throw new NotFoundException('Article not found')
    }

    Object.assign(article, dto);

    if (dto.title) {
      article.slug = slugify(dto.title, { lower: true })
    }

    return this.repo.save(article);
  }

  async remove(slug: string) {
    const article = await this.findOne(slug);
    if (!article) {
      throw new NotFoundException('Article not found')
    }

    return this.repo.remove(article);
  }
}
