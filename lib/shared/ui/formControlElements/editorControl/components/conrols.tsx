import { type Editor } from '@tiptap/core'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type Props = {
  editor: Editor
}

export const Controls = ({ editor }: Props) => {
  return (
    <div
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => editor.commands.focus()}
      className={cn(
        'divide-grey/20 rounded-7 bg-white mt-auto flex h-[40px] w-full cursor-text items-center divide-x p-4 opacity-0 transition-opacity',
        { 'cursor-default opacity-100': editor.isFocused }
      )}
    >
      {editor.isFocused && (
        <>
          <div className='flex items-center gap-2 px-8 first:pl-0 last:pr-0'>
            <section title='Отменить'>
              <span className='size-32'>
                <button
                  type='button'
                  onClick={() => editor.chain().focus().undo().run()}
                  disabled={!editor.can().undo()}
                  className={cn('rounded-7 text-grey pointer-events-none size-32 p-4 transition-colors', {
                    'text-main hover:bg-grey/20 pointer-events-auto': editor.can().undo()
                  })}
                >
                  <Icon name='arrows/arrowRight' className='size-full scale-y-[-1]' />
                </button>
              </span>
            </section>
            <section title='Вернуть'>
              <span className='size-32'>
                <button
                  type='button'
                  onClick={() => editor.chain().focus().redo().run()}
                  disabled={!editor.can().redo()}
                  className={cn('rounded-7 text-grey pointer-events-none size-32 p-4 transition-colors', {
                    'text-main hover:bg-grey/20 pointer-events-auto': editor.can().redo()
                  })}
                >
                  <Icon name='arrows/arrowRight' className='size-full scale-[-1]' />
                </button>
              </span>
            </section>
          </div>
          <div className='flex items-center gap-2 px-8 first:pl-0 last:pr-0'>
            <section title='Полужирный'>
              <button
                type='button'
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={cn('rounded-7 text-grey hover:bg-grey/20 hover:text-main size-32 p-4 transition-colors', {
                  'bg-grey/20 text-main': editor.isActive('bold')
                })}
              >
                <Icon name='arrows/arrowRight' className='size-4' />
              </button>
            </section>
            <section title='Курсив'>
              <button
                type='button'
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={cn('rounded-7 text-grey hover:bg-grey/20 hover:text-main size-32 p-4 transition-colors', {
                  'bg-grey/20 text-main': editor.isActive('italic')
                })}
              >
                <Icon name='arrows/arrowRight' className='size-4' />
              </button>
            </section>
            <section title='Подчеркнутый'>
              <button
                type='button'
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={cn('rounded-7 text-grey hover:bg-grey/20 hover:text-main size-32 p-4 transition-colors', {
                  'bg-grey/20 text-main': editor.isActive('underline')
                })}
              >
                <Icon name='arrows/arrowRight' className='size-4' />
              </button>
            </section>
          </div>
          <div className='flex items-center gap-2 px-8 first:pl-0 last:pr-0'>
            <section title='Зачеркнутый'>
              <button
                type='button'
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={cn('rounded-7 text-grey hover:bg-grey/20 hover:text-main size-32 p-4 transition-colors', {
                  'bg-grey/20 text-main': editor.isActive('strike')
                })}
              >
                <Icon name='arrows/arrowRight' className='size-4' />
              </button>
            </section>
            <section title='Нижний регистр'>
              <button
                type='button'
                onClick={() => editor.chain().focus().toggleSubscript().run()}
                className={cn('rounded-7 text-grey hover:bg-grey/20 hover:text-main size-32 p-4 transition-colors', {
                  'bg-grey/20 text-main': editor.isActive('subscript')
                })}
              >
                <Icon name='arrows/arrowRight' className='size-4' />
              </button>
            </section>
            <section title='Верхний регистр'>
              <button
                type='button'
                onClick={() => editor.chain().focus().toggleSuperscript().run()}
                className={cn('rounded-7 text-grey hover:bg-grey/20 hover:text-main size-32 p-4 transition-colors', {
                  'bg-grey/20 text-main': editor.isActive('superscript')
                })}
              >
                <Icon name='arrows/arrowRight' className='size-4' />
              </button>
            </section>
            <section title='Код'>
              <button
                type='button'
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={cn('rounded-7 text-grey hover:bg-grey/20 hover:text-main size-32 p-4 transition-colors', {
                  'bg-grey/20 text-main': editor.isActive('code')
                })}
              >
                <Icon name='arrows/arrowRight' className='size-4' />
              </button>
            </section>
          </div>
        </>
      )}
    </div>
  )
}
