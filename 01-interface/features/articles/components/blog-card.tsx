"use client";

import React from "react";
import Link from "next/link";
import { Article } from "../types/article.types";
import { Calendar, User, Tag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/config/routes";

interface BlogCardProps {
    article: Article;
}

export function BlogCard({ article }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // Extract first 150 characters from content as excerpt
    const getExcerpt = (content: string) => {
        const plainText = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
        return plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;
    };

    return (
        <Link href={ROUTES.BLOGS.VIEW(article.slug)} className="group block h-full">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 hover:border-primary/50">
                {/* Cover Image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {article.coverImage ? (
                        <img
                            src={article.coverImage}
                            alt={article.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
                            <span className="text-6xl font-bold text-primary/20">
                                {article.title.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                </div>

                <CardHeader className="space-y-2">
                    {/* Title */}
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                    </h3>

                    {/* Excerpt
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {getExcerpt(article.content)}
                    </p> */}
                </CardHeader>

                <CardContent className="space-y-3">
                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {article.tags.slice(0, 3).map((tag, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-xs font-medium"
                                >
                                    <Tag className="mr-1 h-3 w-3" />
                                    {tag}
                                </Badge>
                            ))}
                            {article.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{article.tags.length - 3} more
                                </Badge>
                            )}
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium">
                            {article.author.firstName} {article.author.lastName}
                        </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(article.createdAt)}</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
