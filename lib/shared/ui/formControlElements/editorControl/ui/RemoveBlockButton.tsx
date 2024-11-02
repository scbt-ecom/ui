import { type SideMenuProps, useBlockNoteEditor, useComponentsContext } from '@blocknote/react'
import { Icon } from '$/shared/ui'

export const RemoveBlockButton = (props: SideMenuProps) => {
  const editor = useBlockNoteEditor()

  const Components = useComponentsContext()!

  return (
    <Components.SideMenu.Button
      label='Remove block'
      icon={
        <Icon
          name='general/close'
          className='text-icon-negative-default'
          onClick={() => {
            editor.removeBlocks([props.block])
          }}
        />
      }
    />
  )
}
