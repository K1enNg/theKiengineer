"use client"

import z from "zod"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createArticles } from "@/app/utils/articles"

const articleSchema = z.object({
  title: z.string(),
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
      content: ""
    }
  })

  const { register, handleSubmit, formState: { errors, isSubmitting }, } = form;

  const onSubmit = async (data: ArticleForm) => {
    try {
      // const author = JSON.parse(localStorage.getItem("author") || "{}")
      const payload = {
        ...data,
        tags: data.tags ? data.tags.split(",").map(t => t.trim()) : [],
        // authorId: author.id
      };

      await createArticles(payload);
      router.push("dashboard/postlist");
    } catch (err) {
      console.log("failed to create article: ", err)
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
        <Label className="mb-2 block text-sm font-medium text-slate-700">
          Tags (comma separated)
        </Label>
        <Input
          type="text"
          id="tags"
          placeholder="e.g. tech, ai, opinion"
          {...register("tags")}
        />
      </div>
      <Label
        htmlFor="textarea-code-32"
        className="block text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        Content
      </Label>

      <InputGroup className="w-full">
        <InputGroupAddon align="block-start" className="border-b gap-1">
          <InputGroupButton size="icon-sm" aria-label="Bold"><Bold /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Italic"><Italic /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Underline"><Underline /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Strikethrough"><Strikethrough /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Bullet List"><List /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Numbered List"><ListOrdered /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Blockquote"><Quote /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Code"><Code /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Link"><LinkIcon /></InputGroupButton>
          <InputGroupButton size="icon-sm" aria-label="Image"><ImageIcon /></InputGroupButton>
        </InputGroupAddon>
        <InputGroupTextarea
          id="content"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px] w-full"
          {...register("content")}
        />

        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupButton size="sm" className="ml-auto" variant="default" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Posting..." : "Post"}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      {errors.content && (
        <p className="text-sm text-red-600 mt-1">
          {errors.content.message}
        </p>
      )}
    </form>
  )
}

export default ComposeArticleForm
