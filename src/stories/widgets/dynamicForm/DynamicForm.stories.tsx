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
    submitProps: {
      submitCallback: () => {}
    },
    title: 'Оформите заявку на кредит',
    progress: {
      enabled: false
    },
    chips: {
      enabled: false
    },
    auth: {
      mode: 'combine',
      esiaConfig: {
        mainLink: {
          title: 'Госуслуги',
          mobileTitle: 'Госуслуги'
        },
        subLink: {
          text: 'Подробнее',
          href: 'https://example.com'
        },
        onClick: () => console.log('Esia click handled')
      },
      mobileIdConfig: {
        mainLink: {
          title: 'Mobile ID',
          mobileTitle: 'Mobile ID'
        },
        subLink: {
          text: 'Подробнее',
          href: 'https://example.com'
        },
        onClick: () => console.log('Mobile ID click handled')
      },
      subtitle: 'Также вы можете заполнить заявку через:',
      badge: '+25%'
    },
    approvement: {
      type: 'text',
      message: '<p>some text</p>'
    },
    buttonGroup: [
      {
        children: 'Получить консультацию',
        type: 'button',
        intent: 'secondary'
      },
      {
        children: 'Отправить форму',
        type: 'submit'
      }
    ]
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
      content: '<p>Выражаю согласие на обработку персональных данных</p>'
    },
    buttonGroup: [
      {
        children: 'Получить консультацию',
        type: 'button',
        intent: 'secondary'
      }
    ]
  }
}

export const WithApprovementCheckboxAndBadge: Story = {
  args: {
    ...Base.args,
    chips: {
      enabled: true,
      content: 'Безопасно и надёжно',
      image: 'logos/mts'
    }
  }
}
