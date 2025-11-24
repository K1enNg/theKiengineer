import { Author } from "./author";

export interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  coverImage: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
}

export interface CreateArticleDto {
  title: string;
  content: string;
  tags: string[];
  coverImage?: string | null;
}

export interface UpdateArticleDto {
  title?: string;
  content?: string;
  tags?: string[];
  coverImage?: string;
}


