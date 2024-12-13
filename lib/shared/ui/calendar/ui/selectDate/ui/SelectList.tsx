import { type ComponentPropsWithoutRef } from 'react'
import { motion } from 'framer-motion'
import { formatDateToMonthString, formatDateToYearString } from '$/shared/ui/calendar'
import { cn } from '$/shared/utils'

type SelectListProps = Omit<ComponentPropsWithoutRef<typeof motion.ul>, 'onSelect'> & {
  dates: number[]
  selected: Date
  onSelect: (date: Date) => void
  mode: 'month' | 'year'
}

export const SelectList = ({ dates, selected, onSelect, className, mode, ...props }: SelectListProps) => {
  return (
    <motion.ul
      {...props}
      layout
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 5 }}
      exit={{ opacity: 0 }}
      className={cn(
        'customScrollbar-y absolute left-0 top-[50px] z-10 max-h-[280px] w-full translate-y-2 list-none overflow-y-scroll bg-color-white pr-1.5',
        className
      )}
    >
      {dates.map((date, index) => {
        const d = new Date()

        if (mode === 'year') {
          d.setFullYear(date)
        } else {
          d.setMonth(date)
        }

        const label = mode === 'year' ? formatDateToYearString(d) : formatDateToMonthString(d)

        return (
          <motion.li key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index / 22 }}>
            <button
              type='button'
              onClick={() => {
                const updatedDate = new Date(selected.getTime())

                if (mode === 'year') {
                  updatedDate.setFullYear(date)
                } else {
                  updatedDate.setMonth(date)
                }

                onSelect(updatedDate)
              }}
              className={cn(
                'desk-body-regular-l h-10 w-full rounded-sm bg-color-white px-2 text-start',
                'capitalize hover:bg-color-primary-tr-hover hover:text-color-primary-default',
                {
                  'bg-color-primary-tr-hover text-color-primary-default':
                    mode === 'month' ? selected.getMonth() === date : selected.getFullYear() === date
                }
              )}
            >
              {label}
            </button>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
