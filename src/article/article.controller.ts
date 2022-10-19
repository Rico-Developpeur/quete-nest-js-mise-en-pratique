import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';

@Controller('article')
export class ArticleController {
  constructor(private service: ArticleService) {}

  @Get()
  getAll() {
    return this.service.getAllArticle();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }

  @Post()
  create(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Put()
  update(@Body() article: Article) {
    return this.service.updateArticle(article);
  }

  @Delete(':id')
  deleteArticle(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
