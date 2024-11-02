import { useEffect } from 'react'
import Bold from '@tiptap/extension-bold'
import Code from '@tiptap/extension-code'
import Document from '@tiptap/extension-document'
import History from '@tiptap/extension-history'
import Italic from '@tiptap/extension-italic'
import Paragraph from '@tiptap/extension-paragraph'
import Placeholder from '@tiptap/extension-placeholder'
import Strike from '@tiptap/extension-strike'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Text from '@tiptap/extension-text'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import { Controls } from './components/conrols'
import { Menu } from './components/menu'
import { cn } from '$/shared/utils'

export interface IEditorControlProps {
  value: string
  setValue: (value: string) => void
  placeholder?: string
  className?: string
}

export const EditorControl = ({ value, setValue, placeholder, className }: IEditorControlProps) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({
        placeholder,
        emptyNodeClass:
          'first:before:text-grey first:before:float-left first:before:h-0 first:before:content-[attr(data-placeholder)] first:before:pointer-events-none'
      }),
      Bold,
      Italic,
      Underline,
      Strike,
      Subscript,
      Superscript,
      Code,
      History
    ],
    editorProps: {
      attributes: {
        class: 'h-full flex flex-col gap-8 outline-none rounded p-4'
      }
    },
    autofocus: true,
    onUpdate: ({ editor }) => {
      setValue(editor.getHTML())
    },
    content: value || '',
    immediatelyRender: false
  })

  useEffect(() => {
    if (editor && value !== undefined && value !== editor.getHTML()) {
      editor.commands.setContent(value || '')
    }
  }, [editor, value])

  if (!editor) {
    return <div className='grow px-24'>NO EDITOR</div>
  }

  return (
    <div
      className={cn(
        'relative mt-10 flex h-[700px] grow cursor-text flex-col rounded-md border border-transparent transition-colors hover:border-blue-grey-700',
        { 'border-blue-grey-700': editor.isFocused },
        className
      )}
    >
      {editor && <Menu editor={editor} />}
      <EditorContent editor={editor} className='flex-1 px-4' />
      <Controls editor={editor} />
    </div>
  )
}
