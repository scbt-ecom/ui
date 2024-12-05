import { useCallback } from 'react'
import { type Editor } from '@tiptap/react'
import { z } from 'zod'
import { Icon } from '$/shared/ui'
import { Notification } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface ISetLinkProps {
  editor: Editor
}

const linkSchema = z.string().url()

export const SetLink = ({ editor }: ISetLinkProps) => {
  const handleCreateLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href
    const url = window?.prompt('URL', previousUrl)

    if (url === null) {
      return
    }

    const validateLinkResult = linkSchema.safeParse(url)

    if (!validateLinkResult.success) {
      Notification({ intent: 'error', text: 'Невалидная ссылка' })
      return
    } else {
      Notification({ intent: 'info', text: 'Ссылка успешно вставлена' })
    }

    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    editor?.chain().focus().extendMarkRange('link').setLink({ href: url, rel: 'noopener noreferrer', target: '_blank' }).run()
  }, [editor])

  return (
    <button
      title='Обернуть в ссылку'
      onClick={handleCreateLink}
      className={cn(
        'flex size-8 cursor-pointer items-center justify-center rounded-sm text-color-secondary outline-none transition-colors hover:bg-color-primary-hover hover:text-color-white focus:bg-color-primary-focus focus:text-color-white',
        { '!bg-color-primary-hover !text-color-white': editor.isActive('link') }
      )}
    >
      <Icon name='editor/link' className='size-4' />
    </button>
  )
}
