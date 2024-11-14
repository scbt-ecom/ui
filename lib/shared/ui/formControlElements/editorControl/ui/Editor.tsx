import { type FieldError } from 'react-hook-form'
import Color from '@tiptap/extension-color'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { EditorContent, mergeAttributes, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MessageView } from '../../ui'
import { type ICommonEditorProps, type TEditorControlClasses } from '../EditorControl'
import { editorHeadingClasses } from '../model/helper'
import { type THeadingLevel } from '../model/types'
import { Toolbar } from './Toolbar'
import { cn } from '$/shared/utils'

interface IEditorProps extends ICommonEditorProps {
  onChange: (value: string) => void
  value: string
  error?: FieldError
  classes?: Partial<TEditorControlClasses>
}

export const Editor = ({ onChange, value, label, error, classes, editable, helperText }: IEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bold: {
          HTMLAttributes: {
            class: 'font-bold'
          }
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc [&>li]:ml-4'
          }
        },
        paragraph: {
          HTMLAttributes: {
            class: 'text-dark'
          }
        }
      }),
      Underline,
      TextStyle,
      Color,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6]
      }).extend({
        renderHTML({ node, HTMLAttributes }) {
          const hasLevel = this.options.levels.includes(node.attrs.level)
          const level: THeadingLevel = hasLevel ? node.attrs.level : this.options.levels[0]
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${editorHeadingClasses[level]}`
            }),
            0
          ]
        }
      }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: 'text-color-primary-default underline underline-offset-4'
        }
      })
    ],
    editable: editable,
    content: value,
    onUpdate: ({ editor }) => {
      const content = editor.getText() ? editor.getHTML() : ''
      onChange(content)
    },
    editorProps: {
      transformPastedText(text) {
        return text.replace(/\xA0/g, ' ')
      },
      transformPastedHTML(html) {
        return html.replace(/\xA0/g, ' ')
      },
      attributes: {
        class: cn('p-4 outline-none min-h-[240px]', classes?.editor)
      }
    }
  })

  if (!editor) {
    return null
  }

  return (
    <div className={cn('flex flex-col', classes?.root)}>
      <div className={cn('relative flex w-full flex-col rounded-md border border-solid border-warm-grey-200', classes?.wrapper)}>
        <Toolbar editor={editor} />
        {!value && <p className='absolute left-4 top-16 text-color-disabled'>{label}</p>}
        <EditorContent editor={editor} />
      </div>
      <MessageView
        className={cn(classes?.message)}
        intent={error?.message ? 'error' : 'simple'}
        text={error?.message || helperText}
        disabled={!editable}
      />
    </div>
  )
}
