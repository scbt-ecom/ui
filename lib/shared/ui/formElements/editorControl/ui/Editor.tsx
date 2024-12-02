import { type FieldError } from 'react-hook-form'
import { EditorContent, useEditor } from '@tiptap/react'
import { MessageView } from '../../ui'
import { type ICommonEditorProps, type TEditorControlClasses } from '../EditorControl'
import { editorConfig } from '../model/config'
import { Toolbar } from './Toolbar'
import { cn } from '$/shared/utils'

interface IEditorProps extends ICommonEditorProps {
  onChange: (value: string) => void
  value: string
  error?: FieldError
  classes?: TEditorControlClasses
}

export const Editor = ({ onChange, value, label, error, classes, editable, helperText, ...props }: IEditorProps) => {
  const editor = useEditor({
    extensions: editorConfig,
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
    },
    ...props
  })

  if (!editor) {
    return null
  }

  return (
    <div className={cn('flex flex-col', classes?.root)}>
      <div className={cn('relative flex w-full flex-col rounded-md border border-solid border-warm-grey-200', classes?.wrapper)}>
        <Toolbar editor={editor} />
        {!value && <p className={cn('absolute left-4 top-16 text-color-disabled', classes?.label)}>{label}</p>}
        <EditorContent editor={editor} />
      </div>
      <MessageView
        className={classes?.message}
        intent={error?.message ? 'error' : 'simple'}
        text={error?.message || helperText}
        disabled={!editable}
      />
    </div>
  )
}
