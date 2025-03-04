import type { Meta, StoryObj } from '@storybook/react'
import { Header, Stepper } from '$/widgets'

const meta = {
  title: 'WIDGETS/Header',
  component: Header,
  tags: ['autodocs']
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const WithPhone: Story = {
  args: {
    config: {
      variant: 'withPhone',
      details: {
        phone: '88000000000',
        text: 'Бесплатно по России'
      }
    }
  }
}

export const WithButtonHandlerNavigate: Story = {
  args: {
    config: {
      variant: 'withButton',
      details: {
        children: 'Оформить заявку',
        intent: 'primary',
        size: 'md',
        handlerOptions: {
          handler: 'navigate',
          url: 'https://sovcombank.ru',
          target: '_blank',
          rel: 'noreferrer noopener'
        }
      }
    }
  }
}

export const WithButtonHandlerScroll: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-4'>
        <Header
          config={{
            variant: 'withButton',
            details: {
              children: 'Оформить заявку',
              intent: 'primary',
              size: 'md',
              handlerOptions: {
                handler: 'scroll',
                widgetId: 'stepper'
              }
            }
          }}
        />
        <div className='desk-title-bold-l flex h-screen items-center justify-center bg-color-blue-grey-500 text-center'>
          Контент
        </div>
        <Stepper
          headline='Как получить кредит'
          config={{
            variant: 'withTitleAndDescription',
            details: [
              { title: 'Заполните онлайн-заявку', description: 'Это займет несколько минут' },
              { title: 'Дождитесь одобрения', description: 'Рассмотрим заявку за 5 минут' },
              { title: 'Заберите деньги', description: 'Или закажите бесплатную доставку' }
            ]
          }}
        />
        <div className='desk-title-bold-l flex h-screen items-center justify-center bg-color-blue-grey-500 text-center'>
          Контент
        </div>
      </div>
    )
  }
}

export const Empty: Story = {
  args: {
    config: {
      variant: 'empty',
      details: {}
    }
  }
}

export const WithOtherLogo: Story = {
  args: {
    logoType: 'business',
    config: {
      variant: 'empty',
      details: {}
    }
  }
}
