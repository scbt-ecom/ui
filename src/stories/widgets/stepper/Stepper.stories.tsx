import { type Meta, type StoryObj } from '@storybook/react'
import DraftImage from './model/assets/draft.png'
import { Stepper } from '$/widgets'

const meta = {
  title: 'WIDGETS/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='flex min-h-screen min-w-full items-center justify-center'>{Story()}</div>]
} satisfies Meta<typeof Stepper>

export default meta

type Story = StoryObj<typeof Stepper>

export const Base: Story = {
  args: {
    steppers: [
      {
        headline: 'Как получить кредит',
        stepperVariant: 'withTitleAndDescription',
        details: [
          {
            title: 'Заполните онлайн-заявку',
            description: 'Это займет несколько минут',
            image: {
              src: DraftImage,
              alt: 'Draft'
            }
          },
          {
            title: 'Дождитесь одобрения',
            description: 'Рассмотрим заявку за 5 минут',
            image: {
              src: DraftImage,
              alt: 'Draft'
            }
          },
          {
            title: 'Заберите деньги',
            description: 'Или закажите бесплатную доставку',
            image: {
              src: DraftImage,
              alt: 'Draft'
            }
          }
        ],
        carousel: {
          enabled: true,
          images: [DraftImage, DraftImage, DraftImage]
        }
      },
      {
        headline: 'Заберите деньги',
        stepperVariant: 'withTitleAndDescription',
        details: [
          { title: 'Дождитесь одобрения', description: 'Это займет несколько минут' },
          { title: 'Дождитесь одобрения', description: 'Рассмотрим заявку за 5 минут' },
          { title: 'Заберите деньги', description: 'Или закажите бесплатную доставку' }
        ],
        carousel: {
          enabled: false
        }
      }
    ]
  }
}

export const ParsedHTML: Story = {
  args: {
    steppers: [
      {
        headline: 'Как получить кредит',
        stepperVariant: 'withTitleAndDescription',
        details: [
          {
            title: 'Получить кредит за 5 минут',
            description:
              '<p class="text-dark"><span>Lorem ipsum <em>dolor sit amet</em>, consectetur <strong class="font-bold">adipiscing elit</strong>. Ut et massa mi. Aliquam in hendrerit urna.Ut et </span><span style="color: #76BC21">massa mgdgspjjji</span><span>.</span><br><br><br></p>'
          },
          {
            title: 'Получить за 10 минут',
            description:
              '<p class="text-dark"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</span><a href="http://localhost:5173/entities/stepper" target="_blank" rel="noopener noreferrer" class="text-color-primary-default underline underline-offset-4"><span>Ut et massa</span></a><span> mgdgspjjji. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</span><a href="https://yandex.ru/search/?text=htm%2Cl+prarser+react&amp;clid=4182794&amp;banerid=6400000000&amp;win=599&amp;lr=43" target="_blank" rel="noopener noreferrer" class="text-color-primary-default underline underline-offset-4"><span>Ut et massa</span></a><span> mgdgspjjji.</span></p>'
          },
          {
            title: 'Получить ',
            description: '<p class="text-dark"><span>Lorem ipsum dolor sit amet, </span></p>'
          }
        ],
        carousel: {
          enabled: false
        }
      }
    ]
  }
}

export const OnlyDescription: Story = {
  args: {
    steppers: [
      {
        headline: 'Как получить кредит',
        stepperVariant: 'onlyDescription',
        details: [
          {
            description:
              '<p class="text-dark"><span>Lorem ipsum <em>dolor sit amet</em>, consectetur <strong class="font-bold">adipiscing elit</strong>. Ut et massa mi. Aliquam in hendrerit urna.Ut et </span><span style="color: #76BC21">massa mgdgspjjji</span><span>.</span><br><br><br></p>'
          },
          {
            description:
              '<p class="text-dark"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</span><a href="http://localhost:5173/entities/stepper" target="_blank" rel="noopener noreferrer" class="text-color-primary-default underline underline-offset-4"><span>Ut et massa</span></a><span> mgdgspjjji. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</span><a href="https://yandex.ru/search/?text=htm%2Cl+prarser+react&amp;clid=4182794&amp;banerid=6400000000&amp;win=599&amp;lr=43" target="_blank" rel="noopener noreferrer" class="text-color-primary-default underline underline-offset-4"><span>Ut et massa</span></a><span> mgdgspjjji.</span></p>'
          },
          {
            description: '<p class="text-dark"><span>Lorem ipsum dolor sit amet, </span></p>'
          }
        ],
        carousel: {
          enabled: false
        }
      }
    ]
  }
}
