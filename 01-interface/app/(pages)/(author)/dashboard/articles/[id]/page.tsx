import React from 'react'
import { getArticleById } from '@/app/utils/articles'

const ArticleView = async ({ params }: { params: { id: string } }) => {
    const article = await getArticleById(params.id)

    return (
        <div className="prose">
            <h1>{article.data.title}</h1>
            <p>{article.data.content}</p>
        </div>
    )
}

export default ArticleView
