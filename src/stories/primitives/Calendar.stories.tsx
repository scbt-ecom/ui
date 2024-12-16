import { useRef, useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { format, isValid, parse } from 'date-fns'
import { AnimatePresence } from 'framer-motion'
import { useInputMask } from 'use-mask-input'
import { useClickOutside } from '$/shared/hooks'
import { Calendar, DATE_VISIBLE_PATTERN, Icon, InputBase } from '$/shared/ui'

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
  const containerRef = useRef<HTMLDivElement>(null)

  const [calendarOpen, setCalendarOpen] = useState<boolean>(false)
  const onCalendarOpenChange = () => {
    setCalendarOpen((prev) => !prev)
  }

  const [month, setMonth] = useState<Date>(new Date())
  const [state, setState] = useState<string | undefined>()
  const [value, setValue] = useState<string>(format(new Date(), DATE_VISIBLE_PATTERN))

  const inputRef = useInputMask({
    mask: '##.##.####'
  })

  useClickOutside(containerRef, () => setCalendarOpen(false))

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
      setMonth(parsedDate)
    }
  }

  const onDateChange = (date: Date) => {
    setMonth(date)
    setState(date.toISOString())
    setValue(format(date, DATE_VISIBLE_PATTERN))
    setCalendarOpen(false)
  }

  return (
    <div ref={containerRef} className='relative w-[600px]'>
      <AnimatePresence mode='sync'>
        <InputBase
          ref={inputRef}
          label='Дата рождения'
          value={value}
          autoComplete='off'
          onFocus={() => setCalendarOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              onCalendarOpenChange()
            }
          }}
          onChange={(event) => onValueChange(event.target.value)}
          attachmentProps={{
            icon: <Icon name='general/calendar' className='text-icon-blue-grey-600' />,
            onClickIcon: onCalendarOpenChange
          }}
        />
        {calendarOpen && (
          <Calendar
            required
            mode='single'
            month={month}
            onMonthChange={setMonth}
            selected={date}
            onSelect={onDateChange}
            className='absolute right-0 top-full'
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export const Base: Story = {
  render: () => <DayPickerWithState />
}
