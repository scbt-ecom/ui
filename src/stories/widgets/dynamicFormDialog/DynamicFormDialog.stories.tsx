'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { DynamicFormDialog } from '$/widgets'

const meta = {
  title: 'WIDGETS/DynamicFormDialog',
  component: DynamicFormDialog,
  parameters: {
    layout: 'centered'
  },
  args: {
    fields: [
      {
        type: 'InputControl',
        args: {
          name: 'field_0',
          label: 'Field 0',
          validation: {
            type: 'getStringSchema',
            args: {}
          }
        }
      },
      {
        type: 'InputControl',
        args: {
          name: 'field_1',
          label: 'Field 1',
          validation: {
            type: 'getStringSchema',
            args: {}
          }
        }
      }
    ],
    dialogId: 'dialog_id',
    submitProps: {
      children: 'Далее',
      submitCallback: () => {}
    },
    title: 'Мы поможем вам открыть вклад всего за 5 минут'
  },
  render: (props) => {
    const handleOpen = () => {
      const dialog = document.getElementById(props.dialogId) as HTMLDialogElement | null

      if (!dialog) {
        return console.error('dialog not found')
      }

      dialog.show()
    }

    return (
      <div>
        <button onClick={handleOpen} type='button'>
          Open
        </button>
        <DynamicFormDialog {...props} />
      </div>
    )
  }
} satisfies Meta<typeof DynamicFormDialog>

export default meta

type Story = StoryObj<typeof DynamicFormDialog>

export const Base: Story = {
  args: {
    approvement: {
      type: 'off'
    }
  }
}

export const WithApprovementText: Story = {
  args: {
    ...Base.args,
    approvement: {
      type: 'text',
      message: '<p>Нажимая на кнопку, вы даете согласие на обработку персональных данных</p>'
    }
  }
}

export const WithApprovementCheckbox: Story = {
  args: {
    ...Base.args,
    approvement: {
      type: 'checkbox',
      content: '<p>Нажимая на кнопку, вы даете согласие на обработку персональных данных</p>'
    }
  }
}
