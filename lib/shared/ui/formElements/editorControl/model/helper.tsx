import type { Editor } from '@tiptap/react'
import type { TColorOption, THeadingOptions } from './types'
import { Icon } from '$/shared/ui'

export const headingsOptions: THeadingOptions[] = [
  { shortcuts: ['ctrl', 'alt', '3'], level: 3 },
  { shortcuts: ['ctrl', 'alt', '4'], level: 4 }
]

export const editorHeadingClasses: Record<number, string> = {
  3: 'mob-title-bold-l desktop:desk-title-bold-l',
  4: 'mob-title-bold-m desktop:desk-title-bold-s'
}

export const editorAllowedColors: TColorOption[] = [
  '#292929',
  '#FFFFFF',
  '#40465A',
  '#5A6E85',
  '#A9B6C5',
  '#94A4B7',
  '#003790',
  '#042E73',
  '#809BC7',
  '#76BC21',
  '#F49F00',
  '#F42500'
]

export const renderEditorPanel = (editor: Editor) => [
  {
    label: 'Жирный текст',
    icon: <Icon name='editor/bold' className='size-4' />,
    onClick: () => editor.chain().focus().toggleBold().run(),
    isActive: editor.isActive('bold')
  },
  {
    label: 'Курсивный текст',
    icon: <Icon name='editor/italic' className='size-4' />,
    onClick: () => editor.chain().focus().toggleItalic().run(),
    isActive: editor.isActive('italic')
  },
  {
    label: 'Подчеркнутый текст',
    icon: <Icon name='editor/underline' className='size-4' />,
    onClick: () => editor.chain().focus().toggleUnderline().run(),
    isActive: editor.isActive('underline')
  },
  {
    label: 'Зачеркнутый текст',
    icon: <Icon name='editor/strikethrough' className='size-4' />,
    onClick: () => editor.chain().focus().toggleStrike().run(),
    isActive: editor.isActive('strike')
  },
  {
    label: 'Обычный текст',
    icon: <Icon name='editor/typography' className='size-4' />,
    onClick: () => editor.chain().focus().setParagraph().run()
  },
  {
    label: 'Маркированный список',
    icon: <Icon name='editor/list' className='size-4' />,
    onClick: () => editor.chain().focus().toggleBulletList().run(),
    isActive: editor.isActive('bulletList')
  },
  {
    label: 'Пробел',
    icon: <Icon name='editor/space' className='size-4' />,
    onClick: () => editor.chain().focus().setHardBreak().run()
  },

  {
    label: 'Отменить',
    icon: <Icon name='editor/undo' className='size-4' />,
    onClick: () => editor.chain().focus().undo().run()
  },
  {
    label: 'Вернуть',
    icon: <Icon name='editor/redo' className='size-4' />,
    onClick: () => editor.chain().focus().redo().run()
  },
  {
    label: 'Очистить стили и теги',
    icon: <Icon name='editor/removeFormatting' className='size-4' />,
    onClick: () => editor.chain().focus().clearNodes().unsetAllMarks().run()
  },
  {
    label: 'Удалить все',
    icon: <Icon name='general/close' className='size-4' />,
    onClick: () => editor.commands.clearContent()
  }
]
