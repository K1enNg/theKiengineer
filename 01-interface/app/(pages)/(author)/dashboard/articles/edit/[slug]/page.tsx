import { articleService } from "@/features/articles"
import ComposeArticleForm from "@/features/articles/components/article-form"

const EditPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const article = await articleService.getBySlug(slug)

  return (
    <div>
      <ComposeArticleForm initialData={article} />
    </div>
  )
}

export default EditPage
