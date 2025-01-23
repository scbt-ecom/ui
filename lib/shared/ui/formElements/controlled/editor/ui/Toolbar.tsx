import { type Editor } from '@tiptap/react'
import { SetColor, SetCoreCommands, SetCustomLink, SetHeadings } from './commands'

interface ToolbarProps {
  editor: Editor
}
export const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <div className='mobile:customScrollbar-y bg-color-blue-grey-200 mobile:max-w-[340px] mobile:overflow-x-auto flex items-center gap-2 px-4 py-3'>
      <SetCoreCommands editor={editor} />
      <div className='flex items-center gap-2'>
        <SetColor editor={editor} />
        <SetHeadings editor={editor} />
        <SetCustomLink editor={editor} />
      </div>
    </div>
  )
}
