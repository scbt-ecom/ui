import { type Meta, type StoryObj } from '@storybook/react'
import { Button, CustomLink, Icon, Notification } from '$/shared/ui'

const meta = {
  title: 'INTERACTIVE/Notification',
  component: Notification,
  tags: ['autodocs']
} satisfies Meta<typeof Notification>

export default meta

type Story = StoryObj<typeof Notification>

export const Info: Story = {
  render: () => {
    return (
      <div className='flex justify-center items-center h-screen w-screen'>
        <Button
          onClick={
            () =>
              Notification({
                intent: 'info',
                text: 'Документы отправлены'
              })
            // eslint-disable-next-line react/jsx-curly-newline
          }
        >
          Отправить
        </Button>
      </div>
    )
  }
}

export const Error: Story = {
  render: () => {
    return (
      <div className='flex justify-center items-center h-screen w-screen'>
        <Button
          onClick={
            () =>
              Notification({
                intent: 'error',
                text: 'Не удалось сохранить страницу. Проверьте интернет соединение'
              })
            // eslint-disable-next-line react/jsx-curly-newline
          }
        >
          Отправить
        </Button>
      </div>
    )
  }
}

export const InfoWithLink: Story = {
  render: () => {
    return (
      <div className='flex justify-center items-center h-screen w-screen'>
        <Button
          onClick={
            () =>
              Notification({
                intent: 'info',
                text: 'Документы отправлены',
                customIcon: <Icon name='general/check' className='size-5 text-icon-white' />,
                content: (
                  <CustomLink
                    withIcon
                    target='_blank'
                    rel='noreferrer'
                    intent='white'
                    href='https://www.figma.com/design/4i9LqYBbtItQUpviA45cMw/SCBT-Design-System?node-id=3530-1129&node-type=frame&t=XT3FQKKIzTob4WrF-0'
                  >
                    Подробнее
                  </CustomLink>
                )
              })
            // eslint-disable-next-line react/jsx-curly-newline
          }
        >
          Отправить
        </Button>
      </div>
    )
  }
}

export const WithIcon: Story = {
  render: () => {
    return (
      <div className='flex justify-center items-center h-screen w-screen'>
        <Button
          onClick={
            () =>
              Notification({
                intent: 'info',
                text: 'Документы отправлены',
                customIcon: <Icon name='general/check' className='size-5 text-icon-white' />,
                closure: false
              })
            // eslint-disable-next-line react/jsx-curly-newline
          }
        >
          Отправить
        </Button>
      </div>
    )
  }
}
