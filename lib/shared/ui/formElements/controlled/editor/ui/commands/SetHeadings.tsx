import type { Editor } from '@tiptap/react'
import { headingsOptions } from '../../model/helper'
import { Icon, KeyboardShortcuts, Popover } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface ISetHeadingsProps {
  editor: Editor
}

export const SetHeadings = ({ editor }: ISetHeadingsProps) => {
  return (
    <Popover
      classes={{ content: 'w-full ' }}
      triggerElement={
        <span
          title='Добавить заголовок'
          className='text-color-secondary hover:bg-color-primary-hover hover:text-color-white flex size-7 cursor-pointer items-center justify-center rounded-sm outline-hidden transition-colors'
        >
          <Icon name='editor/heading' className='size-4' />
        </span>
      }
    >
      <div className='flex w-full flex-1 flex-col gap-2'>
        {headingsOptions.map(({ level, shortcuts }) => (
          <div key={level} className='border-warm-grey-200 flex items-center gap-4 border-b border-solid pb-4 last:border-none'>
            <button
              type='button'
              onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
              className={cn(
                'desk-body-regular-l text-color-secondary hover:bg-color-primary-hover hover:text-color-white flex size-8 cursor-pointer items-center justify-center rounded-sm outline-hidden transition-colors',
                { 'bg-color-primary-hover! text-color-white!': editor.isActive('heading', { level }) }
              )}
            >
              {`H${level}`}
            </button>

            <KeyboardShortcuts keyList={shortcuts} />
          </div>
        ))}
      </div>
    </Popover>
  )
}
