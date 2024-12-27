import { useState } from 'react'
import { Icon, ResponsiveContainer } from '$/shared/ui'
import { SelectBase, type SelectItemOption } from '$/shared/ui/formElements/uncontrolled/sellect'

const options: SelectItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1',
    helperText: 'Nexus',
    attachment: {
      left: {
        icon: <Icon name='general/check' className='size-6' />,
        classes: {
          fieldAttachmentRoot: 'm-0'
        }
      }
    }
  },
  {
    value: 'value_2',
    label: 'Value 2'
  },
  {
    value: 'value_3',
    label: 'Value 3',
    helperText: 'Nexus'
  },
  {
    value: 'value_4',
    label: 'Value 4'
  },
  {
    value: 'value_5',
    label: 'Value 5',
    disabled: true
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
  }
]

export const App = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className='my-40 flex flex-col gap-20'>
      <ResponsiveContainer>
        <h2 className='desk-title-bold-s text-color-tetriary'>
          use <span className='desk-title-bold-s text-color-primary-default'> npm run start </span> for run storybook
        </h2>
        <SelectBase label='Select value' options={options} value={value} onValueChange={setValue} />
      </ResponsiveContainer>
    </div>
  )
}
