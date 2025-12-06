import apiClient from "@/shared/lib/api/client";
import type { AxiosRequestConfig } from "axios";
import type { Article, CreateArticleDto, UpdateArticleDto } from "../types/article.types";

/**
 * Article service - handles all article-related API calls
 */
export const articleService = {
    /**
     * Get all articles for the authenticated user
     */
    getAll: async (): Promise<Article[]> => {
        const response = await apiClient.get<Article[]>("/articles");
        return response.data;
    },

    /**
     * Get all public articles (no authentication required)
     */
    getAllPublic: async (): Promise<Article[]> => {
        const response = await apiClient.get<Article[]>("/articles/public");
        return response.data;
    },

    /**
     * Get a single article by slug
     * @param slug - Article slug
     * @param config - Optional axios config (e.g., for server-side auth headers)
     */
    getBySlug: async (slug: string, config?: AxiosRequestConfig): Promise<Article> => {
        const response = await apiClient.get<Article>(`/articles/${slug}`, config);
        return response.data;
    },

    /**
     * Create a new article
     */
    create: async (data: CreateArticleDto): Promise<Article> => {
        const response = await apiClient.post<Article>("/articles", data);
        return response.data;
    },

    /**
     * Update an existing article
     */
    update: async (slug: string, data: UpdateArticleDto): Promise<Article> => {
        const response = await apiClient.patch<Article>(`/articles/${slug}`, data);
        return response.data;
    },

    /**
     * Delete an article
     */
    delete: async (slug: string): Promise<void> => {
        await apiClient.delete(`/articles/${slug}`);
    },
};
