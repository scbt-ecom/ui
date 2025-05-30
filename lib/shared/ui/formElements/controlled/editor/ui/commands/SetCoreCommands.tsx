import { type Editor } from '@tiptap/react'
import { renderEditorPanel } from '../../model/helper'
import { Hint } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface ISetCoreCommandsProps {
  editor: Editor
}

export const SetCoreCommands = ({ editor }: ISetCoreCommandsProps) => {
  return (
    <div className='flex items-center gap-2'>
      {renderEditorPanel(editor)?.map(({ label, icon, onClick, isActive }) => (
        <Hint
          key={label}
          sideOffset={12}
          classes={{
            content: 'w-max border border-warm-grey-200 desk-body-regular-s py-1 px-3'
          }}
          triggerElement={
            <span
              onClick={onClick}
              className={cn(
                'flex size-7 cursor-pointer items-center justify-center rounded-sm text-color-secondary outline-none transition-colors hover:bg-color-primary-hover hover:text-color-white focus:bg-color-primary-focus focus:text-color-white',
                { '!bg-color-primary-hover !text-color-white': isActive }
              )}
            >
              {icon}
            </span>
          }
        >
          {label}
        </Hint>
      ))}
    </div>
  )
}
