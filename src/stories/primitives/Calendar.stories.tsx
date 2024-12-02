import { useState } from 'react'
import { type DateRange } from 'react-day-picker'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button, Calendar } from '$/shared/ui'

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
  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <>
      {/*<p>*/}
      {/*  {date ? (*/}
      {/*    <div className='flex justify-between'>*/}
      {/*      {formatDateToLocaleString(date)}*/}
      {/*      <button type='button' onClick={() => setDate(undefined)}>*/}
      {/*        Reset*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  ) : (*/}
      {/*    'Выбери день'*/}
      {/*  )}*/}
      {/*</p>*/}
      <Calendar mode='range' selected={date} onSelect={setDate} renderFooter={() => <Button size='sm'>Применить</Button>} />
    </>
  )
}

export const Base: Story = {
  render: () => <DayPickerWithState />
}
