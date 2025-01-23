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
        content: 'w-full max-w-[500px] bg-color-blue-grey-200 border border-solid border-warm-grey-300',
        arrowIcon: 'fill-dark-hover'
      }}
      triggerElement={
        <span
          title='Добавить цвет текста'
          className='text-color-secondary hover:bg-color-primary-hover hover:text-color-white flex size-7 cursor-pointer items-center justify-center rounded-sm outline-hidden transition-colors'
        >
          <Icon name='editor/palette' className='size-4' />
        </span>
      }
    >
      <div className='grid grid-cols-6 gap-3'>
        {editorAllowedColors.map((color) => (
          <button
            key={color}
            type='button'
            style={{ background: color }}
            onClick={() => editor.chain().focus().setColor(color).run()}
            className={cn(
              'desk-body-regular-m size-6 cursor-pointer rounded-full border border-solid border-transparent text-left outline-hidden transition-transform hover:scale-105',
              { 'border-warm-grey-300': color === '#FFFFFF' }
            )}
          />
        ))}
      </div>
    </Popover>
  )
}
