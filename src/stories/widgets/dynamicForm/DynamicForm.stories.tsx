'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { DynamicForm } from '$/widgets'

const meta = {
  title: 'WIDGETS/DynamicForm',
  component: DynamicForm,
  parameters: {
    layout: 'centered'
  },
  args: {}
} satisfies Meta<typeof DynamicForm>

export default meta

type Story = StoryObj<typeof DynamicForm>

export const Base: Story = {
  args: {
    fields: [
      {
        type: 'InputControl',
        args: {
          name: 'field',
          label: 'Field',
          validation: {
            type: 'getStringSchema',
            args: {}
          },
          progress: {
            progress: 0,
            maxPercent: 0
          }
        }
      }
    ],
    submitContent: 'Далее',
    title: 'Оформите заявку на кредит',
    progress: {
      enabled: false
    },
    chips: {
      enabled: false
    },
    approvement: {
      type: 'text',
      message: '<p>some text</p>'
    }
  }
}

export const WithBadge: Story = {
  args: {
    ...Base.args,
    chips: {
      enabled: true,
      content: 'Безопасно и надёжно',
      image: 'logos/mts'
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

export const WithApprovementTextAndBadge: Story = {
  args: {
    ...WithApprovementText.args,
    chips: {
      enabled: true,
      content: 'Безопасно и надёжно',
      image: 'logos/mts'
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

export const WithApprovementCheckboxAndBadge: Story = {
  args: {
    ...WithApprovementCheckbox.args,
    chips: {
      enabled: true,
      content: 'Безопасно и надёжно',
      image: 'logos/mts'
    }
  }
}
