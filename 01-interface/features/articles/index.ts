/**
 * Articles feature - Public API
 * Export all public components, services, and types
 */

// Components
export { ArticleList } from './components/article-list';
export { ArticleTable } from './components/article-table';
export { articleColumns } from './components/article-columns';
export { default as ComposeArticleForm } from './components/article-form';
export { ArticleViewContent } from './components/article-view-content';

// Services
export { articleService } from './services/article.service';

// Types
export type { Article, CreateArticleDto, UpdateArticleDto, ArticleTableRow } from './types/article.types';
