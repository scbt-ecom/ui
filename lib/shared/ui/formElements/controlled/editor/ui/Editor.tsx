import { forwardRef, type ReactElement, useEffect } from 'react'
import { type FieldError } from 'react-hook-form'
import CharacterCount from '@tiptap/extension-character-count'
import { EditorContent, type EditorEvents, useEditor, type UseEditorOptions } from '@tiptap/react'
import { type EditorControlClasses } from '../EditorControl'
import { editorConfig } from '../model/config'
import { Toolbar } from './Toolbar'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type ExternalHandlers = {
  onUpdate?: (editor: EditorEvents['update']) => void
}

interface EditorProps extends Partial<UseEditorOptions> {
  onChange: (value: string) => void
  value: string
  error?: FieldError
  classes?: EditorControlClasses
  externalHandlers?: ExternalHandlers
  /**
   * Заголовок
   */
  label?: string
  helperText?: string | ReactElement
  limit?: number
}

type EditorRef = React.ElementRef<typeof EditorContent>

const DEFAULT_LIMIT = Number.MAX_SAFE_INTEGER

export const Editor = forwardRef<EditorRef, EditorProps>(
  (
    {
      onChange,
      value = '',
      label,
      limit,
      error,
      classes,
      editable,
      helperText,
      shouldRerenderOnTransaction = true,
      externalHandlers,
      ...props
    },
    ref
  ) => {
    const { onUpdate: externalOnUpdate } = externalHandlers || {}

    const editor = useEditor({
      extensions: [
        ...editorConfig,
        CharacterCount.configure({
          limit: limit ?? DEFAULT_LIMIT
        })
      ],
      editable: editable,
      content: value,
      onUpdate: (props) => {
        const { editor } = props
        const content = editor?.getText() ? editor?.getHTML() : ''
        onChange(content)

        if (externalOnUpdate) {
          externalOnUpdate(props)
        }
      },
      editorProps: {
        transformPastedText(text) {
          return text.replace(/\xA0/g, ' ')
        },
        transformPastedHTML(html) {
          return html.replace(/\xA0/g, ' ')
        },
        attributes: {
          spellcheck: 'false',
          class: cn(
            'p-4 outline-none bg-color-blue-grey-100 min-h-[240px] max-h-[500px] customScrollbar-y overflow-y-auto break-keep',
            classes?.editor
          )
        }
      },
      shouldRerenderOnTransaction,
      ...props
    })

    useEffect(() => {
      if (editor && editor.getHTML() !== value) {
        editor.commands.setContent(value)
      }
    }, [editor, value])

    if (!editor) {
      return null
    }

    return (
      <div className={cn('flex w-full flex-col', classes?.root)}>
        <div
          className={cn('relative flex w-full flex-col rounded-md border border-solid border-warm-grey-200', classes?.wrapper)}
        >
          <Toolbar editor={editor} />
          {!value && <p className={cn('absolute left-4 top-16 z-10 text-color-disabled', classes?.label)}>{label}</p>}
          <EditorContent ref={ref} editor={editor} />
          {limit && (
            <p className='absolute bottom-4 right-4 text-color-disabled'>
              {editor.storage.characterCount.characters()} / {limit} символов
            </p>
          )}
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
)
