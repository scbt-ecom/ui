import { BubbleMenu, type Editor } from '@tiptap/react'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type Props = {
  editor: Editor
}

export const Menu = ({ editor }: Props) => {
  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className='bg-white flex items-center rounded-md border border-blue-grey-700 p-2'
    >
      <div className='flex items-center gap-2 px-2 first:pl-0 last:pr-0'>
        <button
          type='button'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className={cn('text-grey size-24 rounded-sm p-2 transition-colors', {
            'text-main hover:bg-grey/20': editor.can().undo()
          })}
        >
          <Icon name='arrows/arrowRight' className='size-full scale-y-[-1]' />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className={cn('text-grey size-24 rounded-sm p-2 transition-colors', {
            'text-main hover:bg-grey/20': editor.can().redo()
          })}
        >
          <Icon name='arrows/arrowRight' className='size-full scale-[-1]' />
        </button>
      </div>
      <div className='flex items-center gap-2 px-2 first:pl-0 last:pr-0'>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={cn('text-grey hover:bg-grey/20 hover:text-main size-24 rounded-sm p-2 transition-colors', {
            'bg-grey/20 text-main': editor.isActive('bold')
          })}
        >
          <Icon name='arrows/arrowRight' className='size-4' />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={cn('text-grey hover:bg-grey/20 hover:text-main size-24 rounded-sm p-2 transition-colors', {
            'bg-grey/20 text-main': editor.isActive('italic')
          })}
        >
          <Icon name='arrows/arrowRight' className='size-4' />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={cn('text-grey hover:bg-grey/20 hover:text-main size-24 rounded-sm p-2 transition-colors', {
            'bg-grey/20 text-main': editor.isActive('underline')
          })}
        >
          <Icon name='arrows/arrowRight' className='size-4' />
        </button>
      </div>
      <div className='flex items-center gap-2 px-2 first:pl-0 last:pr-0'>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={cn('text-grey hover:bg-grey/20 hover:text-main size-24 rounded-sm p-2 transition-colors', {
            'bg-grey/20 text-main': editor.isActive('strike')
          })}
        >
          <Icon name='arrows/arrowRight' className='size-4' />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={cn('text-grey hover:bg-grey/20 hover:text-main size-24 rounded-sm p-2 transition-colors', {
            'bg-grey/20 text-main': editor.isActive('subscript')
          })}
        >
          <Icon name='arrows/arrowRight' className='size-4' />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={cn('text-grey hover:bg-grey/20 hover:text-main size-24 rounded-sm p-2 transition-colors', {
            'bg-grey/20 text-main': editor.isActive('superscript')
          })}
        >
          <Icon name='arrows/arrowRight' className='size-4' />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={cn('text-grey hover:bg-grey/20 hover:text-main size-24 rounded-sm p-2 transition-colors', {
            'bg-grey/20 text-main': editor.isActive('code')
          })}
        >
          <Icon name='arrows/arrowRight' className='size-4' />
        </button>
      </div>
    </BubbleMenu>
  )
}
