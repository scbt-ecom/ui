import type { Meta, StoryObj } from '@storybook/react'
import { type DropdownItemOption, DropdownList } from '$/shared/ui'

const options: DropdownItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1',
    helperText: 'Helper text'
  },
  {
    value: 'value_2',
    label: 'Value 2',
    disabled: true
  },
  {
    value: 'value_3',
    label: 'Value 3',
    disabled: true
  },
  {
    value: 'value_4',
    label: 'Value 4'
  },
  {
    value: 'value_5',
    label: 'Value 5'
  },
  {
    value: 'value_6',
    label: 'Value 6'
  },
  {
    value: 'value_7',
    label: 'Value 7'
  },
  {
    value: 'value_8',
    label: 'Value 8'
  },
  {
    value: 'value_9',
    label: 'Value 9'
  },
  {
    value: 'value_10',
    label: 'Value 10'
  },
  {
    value: 'value_11',
    label: 'Value 11'
  }
]

const meta = {
  title: 'Base/DropdownList',
  component: DropdownList,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='w-[300px]'>
        <Story />
      </div>
    )
  ],
  args: {
    multiple: true,
    options
  },
  tags: ['autodocs']
} satisfies Meta<typeof DropdownList>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    onPick: (item) => {
      console.log('selected item', item)
    }
  }
}
