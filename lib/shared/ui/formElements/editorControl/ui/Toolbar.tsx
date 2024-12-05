import { type Editor } from '@tiptap/react'
import { SetColor, SetCoreCommands, SetHeadings, SetLink } from './commands'

interface IToolbarProps {
  editor: Editor
}
export const Toolbar = ({ editor }: IToolbarProps) => {
  return (
    <div className='flex items-center gap-12 bg-color-blue-grey-200 px-4 py-3'>
      <SetCoreCommands editor={editor} />
      <div className='flex items-center gap-2'>
        <SetColor editor={editor} />
        <SetHeadings editor={editor} />
        <SetLink editor={editor} />
      </div>
    </div>
  )
}
