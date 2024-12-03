import { memo } from 'react'
import { type DateRange } from 'react-day-picker'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { Calendar } from '../../calendar'

type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>

type DayPickerControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<CalendarProps, 'selected' | 'onSelect'> & {
    control: Control<TFieldValues>
  }

const InnerComponent = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  mode,
  ...props
}: DayPickerControlProps<T>) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  const { value, onChange, ...restField } = field

  let selected: Date | DateRange | undefined = undefined

  switch (true) {
    case mode === 'single' && typeof value === 'string':
      selected = new Date(value)
      break
    case mode === 'range' && typeof value === 'object' && 'from' in value:
      const { from, to } = value

      selected = {
        from: new Date(from),
        to: to ? new Date(to) : undefined
      }
  }

  const onSelect = (date?: Date | DateRange) => {
    if (date) {
      if (date instanceof Date) {
        onChange(date.toISOString())
      } else if (typeof date === 'object' && 'from' in date) {
        const data = {
          from: date.from?.toISOString(),
          to: date.to?.toISOString()
        }

        onChange(data)
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <Calendar {...restField} {...props} mode={mode} selected={selected} onSelect={onSelect} />
}

export const DayPickerControl = memo(InnerComponent) as typeof InnerComponent
