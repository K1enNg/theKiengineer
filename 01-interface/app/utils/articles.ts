import api from "./api";
import { CreateArticleDto, UpdateArticleDto } from "../types/article";
import { Article } from "../types/article";
import { AxiosRequestConfig } from "axios";

export const createArticles = (data: CreateArticleDto) => api.post<Article>("/articles", data);
export const getAllArticles = async () => {
    const res = await api.get<Article[]>("/articles");
    return res.data;
}
export const getArticleById = async (slug: string, config?: AxiosRequestConfig) => {
    const res = await api.get<Article>(`/articles/${slug}`, config);
    return res.data;
}
export const getUpdateArticle = (slug: string, data: UpdateArticleDto) => api.patch<Article>(`/articles/${slug}`, data);
export const getDeleteArticle = (slug: string) => api.delete<Article>(`/articles/${slug}`);