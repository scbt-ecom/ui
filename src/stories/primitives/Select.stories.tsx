import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SelectBase, type SelectItemOption } from '$/shared/ui'

const options: SelectItemOption[] = [
  {
    id: 0,
    value: 'value_1',
    label: 'Nexus говно',
    additionalText: 'Nexus'
  },
  {
    id: 1,
    value: 'value_2',
    label: 'Nexus шляпа'
  },
  {
    id: 2,
    value: 'value_3',
    label: 'Nexus параша'
  },
  {
    id: 3,
    value: 'value_4',
    label: 'NPM очко'
  },
  {
    id: 4,
    value: 'value_5',
    label: 'NPM параша',
    disabled: true
  },
  {
    id: 5,
    value: 'value_6',
    label: 'Nexus параша'
  },
  {
    id: 6,
    value: 'value_7',
    label: 'NPM очко'
  },
  {
    id: 7,
    value: 'value_8',
    label: 'NPM параша'
  }
]

const meta = {
  title: 'BASE/SelectBase',
  component: SelectBase,
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
    options,
    isSearchable: true,
    isMulti: true
  }
} satisfies Meta<typeof SelectBase>

export default meta

type Story = StoryObj<typeof SelectBase>

const SelectWithState = (props: React.ComponentPropsWithoutRef<typeof SelectBase>) => {
  const [value, setValue] = useState<SelectItemOption | null>(null)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <SelectBase {...props} value={value} onChange={setValue} />
}

export const Base: Story = {
  args: {}
}

export const WithState: Story = {
  args: {},
  render: (props) => <SelectWithState {...props} />
}
