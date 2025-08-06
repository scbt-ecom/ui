import { useEffect, useState } from 'react'
import type { Editor } from '@tiptap/react'
import { fontSizesOptions } from '../../model'
import { Button, Icon, Popover } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface SetFontSizeProps {
  editor: Editor
}

export const SetFontSize = ({ editor }: SetFontSizeProps) => {
  const [currentSize, setCurrentSize] = useState<string | null>(null)

  const updateCurrentSize = () => {
    const size = getCurrentFontSize()
    setCurrentSize(size)
  }

  useEffect(() => {
    if (!editor) return
    updateCurrentSize()
    const handleUpdate = () => updateCurrentSize()

    editor.on('selectionUpdate', handleUpdate)
    editor.on('transaction', handleUpdate)

    return () => {
      editor.off('selectionUpdate', handleUpdate)
      editor.off('transaction', handleUpdate)
    }
  }, [editor])

  const handleFontSizeChange = (size: string) => editor.chain().focus().setFontSize(size).run()

  const handleRemoveFontSize = () => editor.chain().focus().unsetFontSize().run()

  const getCurrentFontSize = () => {
    const { fontSize } = editor.getAttributes('textStyle')
    return fontSize || '16px'
  }

  return (
    <Popover
      classes={{ content: 'w-full' }}
      triggerElement={
        <span
          title='Размер шрифта'
          className='flex size-7 cursor-pointer items-center justify-center rounded-sm text-color-secondary outline-none transition-colors hover:bg-color-primary-hover hover:text-color-white'
        >
          <Icon name='editor/fonts' className='size-4' />
        </span>
      }
    >
      <div className='flex flex-col gap-3'>
        {fontSizesOptions.map(({ value, label }) => {
          const isActive = currentSize === value
          return (
            <button
              type='button'
              key={value}
              onClick={() => handleFontSizeChange(value)}
              className={cn('text-left', {
                'text-color-primary-default': isActive
              })}
            >
              <span>{label}</span>
            </button>
          )
        })}

        <Button intent='secondary' size='sm' type='button' onClick={handleRemoveFontSize}>
          Сбросить
        </Button>
      </div>
    </Popover>
  )
}
