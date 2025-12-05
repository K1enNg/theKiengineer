import { articleService } from '@/features/articles/services/article.service'
import type { Article } from '@/features/articles/types/article.types'
import { ROUTES } from '@/config/routes'
import { ErrorState, NotFoundState } from '@/shared/components/states'
import { ArticleViewContent } from '@/features/articles'

const BlogArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    let article: Article | null = null;
    try {
        // Fetch public article without authentication
        article = await articleService.getBySlug(slug)
    } catch (error: any) {
        if (error?.response?.status !== 404) {
            console.error("Failed to fetch article:", error)
            return (
                <ErrorState
                    title="Error Loading Article"
                    message="Failed to load the article. Please try again later."
                    actionLabel="Back to Blogs"
                    actionHref={ROUTES.BLOGS.LIST}
                />
            )
        }
    }

    if (!article) {
        return (
            <NotFoundState
                title="Article Not Found"
                message="The article you're looking for doesn't exist or has been removed."
                actionLabel="Back to Blogs"
                actionHref={ROUTES.BLOGS.LIST}
            />
        )
    }

    return <ArticleViewContent article={article} backHref={ROUTES.BLOGS.LIST} />
}

export default BlogArticlePage
