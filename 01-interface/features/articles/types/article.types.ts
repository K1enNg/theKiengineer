import type { Author } from "@/shared/types/common.types";

/**
 * Article types for the articles feature
 */

export interface Article {
    id: string;
    slug: string;
    title: string;
    content: string;
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

/**
 * Article table row type - used for displaying articles in tables
 */
export type ArticleTableRow = Pick<Article, 'id' | 'slug' | 'title'> & {
    date: Date;
};
