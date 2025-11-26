"use client";

import React, { useEffect, useState } from "react";
import { articleService } from "../services/article.service";
import type { ArticleTableRow } from "../types/article.types";
import { ArticleTable } from "./article-table";
import { articleColumns } from "./article-columns";

export function ArticleList() {
    const [data, setData] = useState<ArticleTableRow[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async (slug: string) => {
        try {
            await articleService.delete(slug);
            setData((prev) => prev.filter((a) => a.slug !== slug));
        } catch (err) {
            console.error("Failed to delete article", err);
            setError("Failed to delete article");
        }
    };

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setIsLoading(true);
                const items = await articleService.getAll();
                const formatted: ArticleTableRow[] = items.map((a) => ({
                    id: a.id,
                    slug: a.slug,
                    title: a.title,
                    date: new Date(a.createdAt),
                }));
                setData(formatted);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch articles", err);
                setError("Failed to load articles");
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (error) {
        return <div className="text-red-600">{error}</div>;
    }

    return <ArticleTable columns={articleColumns(handleDelete)} data={data} isLoading={isLoading} />;
}
