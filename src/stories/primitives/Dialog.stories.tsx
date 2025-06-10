import { type Meta, type StoryObj } from '@storybook/react'
import { Dialog } from '$/shared/ui'

const DIALOG_ID = 'dialog_id'

const meta = {
  title: 'Interactive/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: {
    id: DIALOG_ID,
    title: 'Рустем?'
  }
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof Dialog>

export const Base: Story = {
  args: {},
  render: (props) => {
    const handleClick = () => {
      const dialog = document.getElementById(DIALOG_ID) as HTMLDialogElement | null

      if (!dialog) return

      dialog.show()
    }

    return (
      <div className='flex h-max items-center justify-center'>
        <Dialog {...props}>Test dialog</Dialog>
        <button type='button' onClick={handleClick}>
          Open
        </button>
      </div>
    )
  }
}
