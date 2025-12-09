"use client"

import z from "zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { articleService } from "@/features/articles/services/article.service"
import { ROUTES } from "@/config/routes"
import { TiptapEditor } from "./tiptap-editor"
import { InputGroupButton } from "@/components/ui/input-group"

const articleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  tags: z.string().optional()
})

type ArticleForm = z.infer<typeof articleSchema>;

const ComposeArticleForm = () => {
  const router = useRouter();

  const form = useForm<ArticleForm>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: ""
    }
  })

  const { register, handleSubmit, formState: { errors, isSubmitting }, control } = form;

  const onSubmit = async (data: ArticleForm) => {
    try {
      const payload = {
        ...data,
        tags: data.tags ? data.tags.split(",").map(t => t.trim()) : [],
      };

      await articleService.create(payload);
      router.push(ROUTES.ARTICLES.LIST);
    } catch (err) {
      console.error("Failed to create article: ", err)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full max-w-4xl gap-4"
    >
      <div className="w-full mb-2">
        <Label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Title
        </Label>
        <Input
          type="text"
          id="title"
          placeholder="Title"
          className="w-full"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-sm text-red-600 mt-1">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="w-full mb-2">
        <Label
          htmlFor="tags"
          className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Tags (comma separated)
        </Label>
        <Input
          type="text"
          id="tags"
          placeholder="e.g. tech, ai, opinion"
          {...register("tags")}
        />
      </div>

      <div className="w-full mb-2">
        <Label
          htmlFor="content"
          className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Content
        </Label>

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TiptapEditor
              content={field.value}
              onChange={field.onChange}
              placeholder="Write your article content here..."
            />
          )}
        />

        {errors.content && (
          <p className="text-sm text-red-600 mt-1">
            {errors.content.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <InputGroupButton
          size="sm"
          variant="default"
          type="submit"
          disabled={isSubmitting}
          className="px-6"
        >
          {isSubmitting ? "Posting..." : "Post"}
        </InputGroupButton>
      </div>
    </form>
  )
}

export default ComposeArticleForm