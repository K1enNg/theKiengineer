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
