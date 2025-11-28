import { articleService } from '@/features/articles/services/article.service'
import { cookies } from 'next/headers'
import type { Article } from '@/features/articles/types/article.types'
import { ROUTES } from '@/config/routes'
import Link from 'next/link'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const ArticleView = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    let article: Article | null = null;
    try {
        article = await articleService.getBySlug(slug, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        if (error?.response?.status !== 404) {
            console.error("Failed to fetch article:", error)
            return (
                <div className="flex items-center justify-center min-h-[400px]">
                    <Card className="w-full max-w-md">
                        <CardContent className="pt-6">
                            <div className="text-center">
                                <h2 className="text-xl font-semibold text-red-600 mb-2">Error Loading Article</h2>
                                <p className="text-gray-600 mb-4">Failed to load the article. Please try again later.</p>
                                <Link href={ROUTES.ARTICLES.LIST}>
                                    <Button variant="outline">
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Back to Articles
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )
        }
    }

    if (!article) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Card className="w-full max-w-md">
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Article Not Found</h2>
                            <p className="text-gray-600 mb-4">The article you're looking for doesn't exist or has been removed.</p>
                            <Link href={ROUTES.ARTICLES.LIST}>
                                <Button variant="outline">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Articles
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-10">
            {/* Back Button */}
            <div className="mb-6">
                <Link href={ROUTES.ARTICLES.LIST}>
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
                        {/* Author */}
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

export default ArticleView
