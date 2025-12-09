"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    List,
    ListOrdered,
    Quote,
    Code,
    Link as LinkIcon,
    Image as ImageIcon,
    Undo,
    Redo,
} from "lucide-react"
import { InputGroupButton } from "@/components/ui/input-group"
import { useEffect } from 'react'

interface TiptapEditorProps {
    content: string
    onChange: (content: string) => void
    placeholder?: string
}

export const TiptapEditor = ({ content, onChange, placeholder }: TiptapEditorProps) => {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Underline,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-600 underline cursor-pointer',
                },
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'max-w-full h-auto rounded-lg',
                },
            }),
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none min-h-[200px] max-w-none p-4',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
    })

    // Update editor content when prop changes
    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content)
        }
    }, [content, editor])

    if (!editor) {
        return null
    }

    const addLink = () => {
        const url = window.prompt('Enter URL:')
        if (url) {
            editor.chain().focus().setLink({ href: url }).run()
        }
    }

    const addImage = () => {
        const url = window.prompt('Enter image URL:')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    return (
        <div className="border rounded-lg overflow-hidden bg-white dark:bg-slate-900">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-1 p-2 border-b bg-slate-50 dark:bg-slate-800">
                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Bold"
                >
                    <Bold />
                </InputGroupButton>

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Italic"
                >
                    <Italic />
                </InputGroupButton>

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive('underline') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Underline"
                >
                    <UnderlineIcon />
                </InputGroupButton>

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Strikethrough"
                >
                    <Strikethrough />
                </InputGroupButton>

                <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1" />

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Bullet List"
                >
                    <List />
                </InputGroupButton>

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Numbered List"
                >
                    <ListOrdered />
                </InputGroupButton>

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Blockquote"
                >
                    <Quote />
                </InputGroupButton>

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={editor.isActive('code') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Inline Code"
                >
                    <Code />
                </InputGroupButton>

                <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1" />

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={addLink}
                    className={editor.isActive('link') ? 'bg-slate-200 dark:bg-slate-700' : ''}
                    aria-label="Link"
                >
                    <LinkIcon />
                </InputGroupButton>

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={addImage}
                    aria-label="Image"
                >
                    <ImageIcon />
                </InputGroupButton>

                <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1" />

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    aria-label="Undo"
                >
                    <Undo />
                </InputGroupButton>

                <InputGroupButton
                    size="icon-sm"
                    type="button"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    aria-label="Redo"
                >
                    <Redo />
                </InputGroupButton>
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} />
        </div>
    )
}
