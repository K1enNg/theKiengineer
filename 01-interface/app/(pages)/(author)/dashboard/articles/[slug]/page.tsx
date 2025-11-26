import { articleService } from '@/features/articles/services/article.service'
import { cookies } from 'next/headers'
import type { Article } from '@/features/articles/types/article.types'

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
            return <div>Error loading article</div>
        }
    }

    if (!article) {
        return <div>Article not found</div>
    }

    return (
        <div>
            <h1>ArticleView</h1>
            <p>{article.title}</p>
            <p>{article.content}</p>
        </div>
    )
}

export default ArticleView
