import { capitalizeFirstLetter, DAYS_OF_WEEK } from '../model/helpers'
import { type TDaysOfWeekClasses } from '../model/types'
import { cn } from '$/shared/utils'

interface IDaysOfWeekProps {
  classes?: Partial<TDaysOfWeekClasses>
}

export const DaysOfWeek = ({ classes }: IDaysOfWeekProps) => {
  return (
    <div className={cn('grid grid-cols-7 pt-2', classes?.weekWrapper)}>
      {DAYS_OF_WEEK?.map(({ day, isWeekend }) => {
        return (
          <span
            key={day}
            className={cn(
              'mob-body-medium-m flex size-10 items-center justify-center',
              { 'text-color-negative': isWeekend },
              classes?.weekDay
            )}
          >
            {capitalizeFirstLetter(day)}
          </span>
        )
      })}
    </div>
  )
}
