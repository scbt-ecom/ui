import { type Meta, type StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { Icon } from '$/hybrid'
import { ComboboxControlReactSelect } from '$/shared/ui/formControlElements/ComboboxControlReactSelect'

const meta = {
  title: 'CONTROLLED FORM UI/ComboboxControlReactSelect',
  component: ComboboxControlReactSelect,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider validationSchema={mockSchema} defaultValues={mockDefaultValues}>
        <Story />
      </StorybookFormProvider>
    )
  ],
  tags: ['autodocs']
} satisfies Meta<typeof ComboboxControlReactSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    badge: '+25%',
    options: [
      { label: 'Кредит наличными', value: 'cash-credit' },
      { label: 'Автокредит', value: 'avto-credit' },
      { label: 'Депозит', value: 'depozit' },
      { label: 'Кредит на недвижимость', value: 'realty-credit' },
      { label: 'Кредит на обучение', value: 'education-credit' },
      { label: 'Кредит на бизнес', value: 'business-credit' },
      { label: 'Кредит на автомобиль', value: 'car-credit' },
      { label: 'Кредит на путешествие', value: 'travel-credit' },
      { label: 'Кредит на покупку земли', value: 'land-credit' },
      { label: 'Кредит на покупку квартиры', value: 'flat-credit' }
    ]
  }
}

export const WithIcon: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    intent: 'filled',
    icon: <Icon name='arrows/arrowRight' className='rotate-90 text-icon-blue-grey-600' />,
    options: [
      { label: 'Кредит наличными', value: 'cash-credit' },
      { label: 'Автокредит', value: 'avto-credit' },
      { label: 'Депозит', value: 'depozit' },
      { label: 'Кредит на недвижимость', value: 'realty-credit' },
      { label: 'Кредит на обучение', value: 'education-credit' },
      { label: 'Кредит на бизнес', value: 'business-credit' },
      { label: 'Кредит на автомобиль', value: 'car-credit' },
      { label: 'Кредит на путешествие', value: 'travel-credit' },
      { label: 'Кредит на покупку земли', value: 'land-credit' },
      { label: 'Кредит на покупку квартиры', value: 'flat-credit' }
    ]
  }
}

export const Disabled: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    intent: 'filled',
    icon: <Icon name='arrows/arrowRight' className='rotate-90 text-icon-blue-grey-600' />,
    disabled: true,
    options: [
      { label: 'Кредит наличными', value: 'cash-credit' },
      { label: 'Автокредит', value: 'avto-credit' },
      { label: 'Депозит', value: 'depozit' },
      { label: 'Кредит на недвижимость', value: 'realty-credit' },
      { label: 'Кредит на обучение', value: 'education-credit' },
      { label: 'Кредит на бизнес', value: 'business-credit' },
      { label: 'Кредит на автомобиль', value: 'car-credit' },
      { label: 'Кредит на путешествие', value: 'travel-credit' },
      { label: 'Кредит на покупку земли', value: 'land-credit' },
      { label: 'Кредит на покупку квартиры', value: 'flat-credit' }
    ]
  }
}

export const IsNotSearchable: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    badge: '+25%',
    options: [
      { label: 'Кредит наличными', value: 'cash-credit' },
      { label: 'Автокредит', value: 'avto-credit' },
      { label: 'Депозит', value: 'depozit' },
      { label: 'Кредит на недвижимость', value: 'realty-credit' },
      { label: 'Кредит на обучение', value: 'education-credit' },
      { label: 'Кредит на бизнес', value: 'business-credit' },
      { label: 'Кредит на автомобиль', value: 'car-credit' },
      { label: 'Кредит на путешествие', value: 'travel-credit' },
      { label: 'Кредит на покупку земли', value: 'land-credit' },
      { label: 'Кредит на покупку квартиры', value: 'flat-credit' }
    ],
    isSearchable: false
  }
}

export const Multi: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'credit',
    label: 'Выберите кредит',
    size: 'md',
    badge: '+25%',
    isMulti: true,
    options: [
      { label: 'Кредит наличными', value: 'cash-credit' },
      { label: 'Автокредит', value: 'avto-credit' },
      { label: 'Депозит', value: 'depozit' },
      { label: 'Кредит на недвижимость', value: 'realty-credit' },
      { label: 'Кредит на обучение', value: 'education-credit' },
      { label: 'Кредит на бизнес', value: 'business-credit' },
      { label: 'Кредит на автомобиль', value: 'car-credit' },
      { label: 'Кредит на путешествие', value: 'travel-credit' },
      { label: 'Кредит на покупку земли', value: 'land-credit' },
      { label: 'Кредит на покупку квартиры', value: 'flat-credit' }
    ]
  }
}
