import type { ArticleTableRow } from '../types/article.types'
import { ArticleTable } from './article-table'
import { articleColumns } from './article-columns'

interface ArticleListContentProps {
    data: ArticleTableRow[]
    isLoading: boolean
    onDelete: (slug: string) => Promise<void>
}

/**
 * Pure presentation component for article list
 * Receives data and handlers as props, focuses on rendering
 */
export const ArticleListContent = ({ data, isLoading, onDelete }: ArticleListContentProps) => {
    return <ArticleTable columns={articleColumns(onDelete)} data={data} isLoading={isLoading} />
}
