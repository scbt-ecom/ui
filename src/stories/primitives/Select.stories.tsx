import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon, type SelectItemOption, Uncontrolled } from '$/shared/ui'

const options: SelectItemOption[] = [
  {
    id: 0,
    value: 'value_1',
    label: 'Value 1',
    additionalText: 'Nexus',
    attachment: {
      left: {
        icon: <Icon name='general/check' className='size-4' />,
        classes: {
          fieldAttachmentRoot: 'm-0'
        }
      }
    }
  },
  {
    id: 1,
    value: 'value_2',
    label: 'Value 2'
  },
  {
    id: 2,
    value: 'value_3',
    label: 'Value 3',
    additionalText: 'Nexus'
  },
  {
    id: 3,
    value: 'value_4',
    label: 'Value 4'
  },
  {
    id: 4,
    value: 'value_5',
    label: 'Value 5',
    disabled: true
  },
  {
    id: 5,
    value: 'value_6',
    label: 'Value 6'
  },
  {
    id: 6,
    value: 'value_7',
    label: 'Value 7'
  },
  {
    id: 7,
    value: 'value_8',
    label: 'Value 8'
  }
]

const meta = {
  title: 'BASE/SelectBase',
  component: Uncontrolled.SelectBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className='w-[800px]'>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs'],
  args: {
    label: 'Test selector',
    options
  }
} satisfies Meta<typeof Uncontrolled.SelectBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.SelectBase>

const SelectWithState = (props: React.ComponentPropsWithoutRef<typeof Uncontrolled.SelectBase>) => {
  const [value, setValue] = useState<SelectItemOption | null>(null)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <Uncontrolled.SelectBase {...props} value={value} onChange={setValue} />
}

export const Base: Story = {
  args: {}
}

export const WithState: Story = {
  args: {},
  render: (props) => <SelectWithState {...props} />
}

export const WithMulti: Story = {
  args: {
    isMulti: true
  },
  render: (props) => <SelectWithState {...props} />
}

export const WithSearchable: Story = {
  args: {
    isSearchable: true
  },
  render: (props) => <SelectWithState {...props} />
}
