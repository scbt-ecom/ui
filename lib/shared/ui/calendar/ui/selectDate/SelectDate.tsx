import { type HTMLAttributes, useState } from 'react'
import { type CalendarMonth } from 'react-day-picker'
import { AnimatePresence } from 'framer-motion'
import { SelectList, Trigger } from './ui'
import { cn } from '$/shared/utils'

type SelectDateProps = HTMLAttributes<HTMLDivElement> & {
  dates: number[]
  currentMonth: CalendarMonth
  onMonthChange: (month: Date) => void
  mode: 'month' | 'year'
  disabled?: boolean
}

export const SelectDate = ({ dates, currentMonth, onMonthChange, className, mode, disabled, ...props }: SelectDateProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const onOpenChange = () => {
    setOpen((prev) => !prev)
  }

  const onItemSelect = (date: Date) => {
    onMonthChange(date)
    onOpenChange()
  }

  return (
    <div {...props} className={cn('', className)}>
      <Trigger currentDate={currentMonth.date} mode={mode} open={isOpen} onOpenChange={onOpenChange} disabled={disabled} />
      <AnimatePresence mode='sync'>
        {isOpen && <SelectList dates={dates} selected={currentMonth.date} mode={mode} onSelect={onItemSelect} />}
      </AnimatePresence>
    </div>
  )
}
