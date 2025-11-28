import { articleService } from '@/features/articles/services/article.service'
import { cookies } from 'next/headers'
import type { Article } from '@/features/articles/types/article.types'
import { ROUTES } from '@/config/routes'
import { ErrorState, NotFoundState } from '@/shared/components/states'
import { ArticleViewContent } from '@/features/articles'

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
                <ErrorState
                    title="Error Loading Article"
                    message="Failed to load the article. Please try again later."
                    actionLabel="Back to Articles"
                    actionHref={ROUTES.ARTICLES.LIST}
                />
            )
        }
    }

    if (!article) {
        return (
            <NotFoundState
                title="Article Not Found"
                message="The article you're looking for doesn't exist or has been removed."
                actionLabel="Back to Articles"
                actionHref={ROUTES.ARTICLES.LIST}
            />
        )
    }

    return <ArticleViewContent article={article} backHref={ROUTES.ARTICLES.LIST} />
}

export default ArticleView
