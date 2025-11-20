import api from "./api";
import { CreateArticleDto, UpdateArticleDto } from "../types/article-dto";

export const createArticles = (data: CreateArticleDto) => api.post("/articles", data);
export const getAllArticles = () => api.get("/articles");
export const getArticle = (slug: string) => api.get(`/articles/${slug}`);
export const getUpdateArticle = (slug: string, data: UpdateArticleDto) => api.patch(`/articles/${slug}`, data);
export const getDeleteArticle = (slug: string) => api.delete(`/articles/${slug}`);