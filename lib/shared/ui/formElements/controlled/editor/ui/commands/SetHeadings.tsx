import type { Editor } from '@tiptap/react'
import { headingsOptions } from '../../model/helper'
import { Icon } from '$/shared/ui/icon'
import { Popover } from '$/shared/ui/popover'
import { cn } from '$/shared/utils'

interface ISetHeadingsProps {
  editor: Editor
}

export const SetHeadings = ({ editor }: ISetHeadingsProps) => {
  return (
    <Popover
      classes={{ content: 'w-full' }}
      triggerElement={
        <span
          title='Добавить заголовок'
          className='flex size-7 cursor-pointer items-center justify-center rounded-sm text-color-secondary outline-none transition-colors hover:bg-color-primary-hover hover:text-color-white'
        >
          <Icon name='editor/heading' className='size-4' />
        </span>
      }
    >
      <div className='flex flex-1 gap-2'>
        {headingsOptions.map((level) => (
          <div key={level} className='flex items-center gap-4'>
            <button
              type='button'
              onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
              className={cn(
                'desk-body-regular-l flex size-8 cursor-pointer items-center justify-center rounded-sm text-color-secondary outline-none transition-colors hover:bg-color-primary-hover hover:text-color-white',
                { '!bg-color-primary-hover !text-color-white': editor.isActive('heading', { level }) }
              )}
            >
              {`H${level}`}
            </button>
          </div>
        ))}
      </div>
    </Popover>
  )
}
