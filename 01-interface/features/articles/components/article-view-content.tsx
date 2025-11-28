import Link from 'next/link'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { Article } from '@/features/articles/types/article.types'
import { formatDate } from '@/shared/utils/date.utils'

interface ArticleViewContentProps {
    article: Article
    backHref: string
}

/**
 * Pure presentation component for displaying article content
 * Receives article data as props and focuses solely on rendering
 */
export const ArticleViewContent = ({ article, backHref }: ArticleViewContentProps) => {
    return (
        <div className="w-12xl mx-auto px-4 sm:px-6 lg:px-10">
            {/* Back Button */}
            <div className="mb-6">
                <Link href={backHref}>
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Articles
                    </Button>
                </Link>
            </div>

            {/* Article Card */}
            <Card>
                <CardHeader className="space-y-4">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                        {article.title}
                    </h1>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        {/* Created Date */}
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(article.createdAt)}</span>
                        </div>

                        {/* Updated Date (if different) */}
                        {article.updatedAt !== article.createdAt && (
                            <div className="flex items-center gap-2 text-gray-500">
                                <span className="text-xs">Updated: {formatDate(article.updatedAt)}</span>
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap">
                            <Tag className="h-4 w-4 text-gray-500" />
                            {article.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </CardHeader>

                <CardContent>
                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {article.content}
                        </div>
                    </div>

                    {/* Footer Metadata */}
                    <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                        <div className="flex justify-between items-center">
                            <span>{article.id}</span>
                            <span>{article.slug}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
