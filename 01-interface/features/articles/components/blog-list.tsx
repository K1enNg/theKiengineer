"use client";

import React, { useEffect, useState } from "react";
import { articleService } from "../services/article.service";
import type { Article } from "../types/article.types";
import { BlogCard } from "./blog-card";
import { ErrorState } from "@/shared/components/states";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function BlogList() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setIsLoading(true);
                const data = await articleService.getAllPublic();
                setArticles(data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch articles", err);
                setError("Failed to load articles. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (error) {
        return <ErrorState title="Error Loading Articles" message={error} />;
    }

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                        <Skeleton className="h-48 w-full" />
                        <div className="p-6 space-y-4">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                            <div className="flex gap-2 pt-2">
                                <Skeleton className="h-6 w-16" />
                                <Skeleton className="h-6 w-16" />
                                <Skeleton className="h-6 w-16" />
                            </div>
                            <div className="flex justify-between pt-4 border-t">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center space-y-4 max-w-md">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-2xl font-bold">No Articles Yet</h3>
                    <p className="text-muted-foreground">
                        There are no published articles at the moment. Check back later for new content!
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
                <BlogCard key={article.id} article={article} />
            ))}
        </div>
    );
}
