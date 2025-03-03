import { type Editor } from '@tiptap/react'
import { SetColor, SetCoreCommands, SetCustomLink, SetHeadings } from './commands'

interface ToolbarProps {
  editor: Editor
}
export const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <div className='customScrollbar-y flex w-full items-center gap-2 overflow-x-auto bg-color-blue-grey-200 px-4 py-3'>
      <SetCoreCommands editor={editor} />
      <SetColor editor={editor} />
      <SetHeadings editor={editor} />
      <SetCustomLink editor={editor} />
    </div>
  )
}
