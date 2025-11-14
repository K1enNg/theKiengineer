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

const TextArea = () => {
  return (
    <div className="grid w-full max-w-4xl gap-4">
      <div className="w-full mb-2">
        <Label htmlFor="title" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Title</Label>
        <Input type="text" id="title" placeholder="Title" className="w-full" />
      </div>
      <Label htmlFor="textarea-code-32" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Content</Label>
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
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px] w-full"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Post
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default TextArea
