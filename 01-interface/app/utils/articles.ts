import api from "./api";
import { CreateArticleDto, UpdateArticleDto } from "../types/article";
import { Article } from "../types/article";
import { cookies } from "next/headers";

export const createArticles = (data: CreateArticleDto) => api.post<Article>("/articles", data);
export const getAllArticles = async () => {
    const res = await api.get<Article[]>("/articles");
    return res.data;
}
export const getArticleById = async (id: string) => {
    const cookie = await cookies();
    const token = cookie.get("access_token")?.value;
    return api.get<Article>(`/articles/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const getUpdateArticle = (id: string, data: UpdateArticleDto) => api.patch<Article>(`/articles/${id}`, data);
export const getDeleteArticle = (id: string) => api.delete<Article>(`/articles/${id}`);