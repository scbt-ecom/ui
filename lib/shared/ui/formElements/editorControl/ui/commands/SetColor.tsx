import type { Editor } from '@tiptap/react'
import { editorAllowedColors } from '../../model/helper'
import { Icon, Popover } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface ISetColorProps {
  editor: Editor
}

export const SetColor = ({ editor }: ISetColorProps) => {
  return (
    <Popover
      classes={{
        content: 'w-full  bg-color-blue-grey-200 border border-solid border-warm-grey-300',
        arrowIcon: 'fill-dark-hover'
      }}
      triggerElement={
        <span
          title='Добавить цвет текста'
          className='flex size-8 cursor-pointer items-center justify-center rounded-sm text-color-secondary outline-none transition-colors hover:bg-color-primary-hover hover:text-color-white'
        >
          <Icon name='editor/palette' className='size-4' />
        </span>
      }
    >
      <div className='grid grid-cols-2 gap-3'>
        {editorAllowedColors.map(({ name, color }) => (
          <button
            key={name}
            type='button'
            style={{ background: color }}
            onClick={() => editor.chain().focus().setColor(color).run()}
            className={cn(
              'desk-body-regular-m cursor-pointer rounded-sm px-3 py-1 text-left text-color-white outline-none transition-transform hover:scale-105',
              { 'text-color-dark': color === '#FFFFFF' }
            )}
          >
            {name}
          </button>
        ))}
      </div>
    </Popover>
  )
}
