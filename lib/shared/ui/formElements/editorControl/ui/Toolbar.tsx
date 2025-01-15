import { type Editor } from '@tiptap/react'
import { SetColor, SetCoreCommands, SetCustomLink, SetHeadings } from './commands'

interface IToolbarProps {
  editor: Editor
}
export const Toolbar = ({ editor }: IToolbarProps) => {
  return (
    <div className='mobile:customScrollbar-y flex items-center gap-2 bg-color-blue-grey-200 px-4 py-3 mobile:max-w-[340px] mobile:overflow-x-auto'>
      <SetCoreCommands editor={editor} />
      <div className='flex items-center gap-2'>
        <SetColor editor={editor} />
        <SetHeadings editor={editor} />
        <SetCustomLink editor={editor} />
      </div>
    </div>
  )
}
