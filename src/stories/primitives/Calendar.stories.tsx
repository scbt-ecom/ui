import { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { format, isValid, parse } from 'date-fns'
import { useInputMask } from 'use-mask-input'
import { Button, Calendar, DATE_VISIBLE_PATTERN } from '$/shared/ui'

const meta = {
  title: 'BASE/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Calendar>
export default meta

type Story = StoryObj<typeof Calendar>

const DayPickerWithState = () => {
  const [state, setState] = useState<string | undefined>()
  const [value, setValue] = useState<string>(format(new Date(), DATE_VISIBLE_PATTERN))

  const inputRef = useInputMask({
    mask: '##.##.####'
  })

  const date = state ? new Date(state) : new Date()

  const onValueChange = (value: string) => {
    setValue(value)

    const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/

    if (!dateRegex.test(value)) {
      return
    }

    const parsedDate = parse(value, DATE_VISIBLE_PATTERN, new Date())

    if (isValid(parsedDate)) {
      setState(parsedDate.toISOString())
    }
  }

  const onDateChange = (date: Date) => {
    setState(date.toISOString())
    setValue(format(date, DATE_VISIBLE_PATTERN))
  }

  return (
    <>
      <input
        ref={inputRef}
        type='text'
        placeholder={DATE_VISIBLE_PATTERN}
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
      <Calendar
        required
        mode='single'
        month={date}
        selected={date}
        onSelect={onDateChange}
        selectOptions={{ year: { order: 'desc', startFrom: 1950 }, month: false }}
        renderFooter={() => <Button size='sm'>Применить</Button>}
        disabledAfterToday
      />
    </>
  )
}

export const Base: Story = {
  render: () => <DayPickerWithState />
}
