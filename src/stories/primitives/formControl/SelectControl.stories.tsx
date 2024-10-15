import { type Meta, type StoryObj } from '@storybook/react'
import { MOCK_SELECT_OPTIONS, mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { type ISelectOption, SelectControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/SelectControl',
  component: SelectControl,
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
} satisfies Meta<typeof SelectControl>

export default meta
type Story = StoryObj<typeof meta>

const DISABLED_SELECT_OPTIONS: ISelectOption[] = [
  { optionValue: 'Январь', optionLabel: 'Январь', isDisabled: true },
  { optionValue: 'Февраль', optionLabel: 'Февраль', isDisabled: true },
  ...MOCK_SELECT_OPTIONS.slice(2, 12)
]

export const IntentFilled: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'months',
    label: 'Выберите месяц',
    size: 'md',
    optionsList: MOCK_SELECT_OPTIONS,
    intent: 'filled'
  }
}

export const IntentClear: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'months',
    label: 'Выберите месяц',
    size: 'md',
    optionsList: MOCK_SELECT_OPTIONS,
    intent: 'clear'
  }
}

export const FilledMultiple: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'months',
    label: 'Выберите месяца',
    size: 'md',
    optionsList: MOCK_SELECT_OPTIONS,
    multiple: true,
    intent: 'filled'
  }
}

export const IsDisabled: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'months',
    label: 'Выберите месяц',
    size: 'md',
    optionsList: MOCK_SELECT_OPTIONS,
    intent: 'filled',
    disabled: true
  }
}

export const DisabledOptions: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'months',
    label: 'Выберите месяц',
    size: 'md',
    optionsList: DISABLED_SELECT_OPTIONS,
    intent: 'filled'
  }
}

export const WithHelperText: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'months',
    label: 'Выберите месяца',
    size: 'md',
    optionsList: MOCK_SELECT_OPTIONS,
    helperText: 'Выберите месяц рождения',
    multiple: true,
    intent: 'filled'
  }
}
