"use client";

import React, { useEffect, useState } from "react";
import { articleService } from "../services/article.service";
import type { ArticleTableRow } from "../types/article.types";
import { ArticleListContent } from "./article-list-content";
import { ErrorState } from "@/shared/components/states";

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
        return <ErrorState title="Error Loading Articles" message={error} />;
    }

    return <ArticleListContent data={data} isLoading={isLoading} onDelete={handleDelete} />;
}
