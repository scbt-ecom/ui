'use client'

import * as React from 'react'
import { Controller, type FieldValues, useFormContext } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { format } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'
import { type TControlledInputProps } from '../model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
import { useCalendar, useCalendarDropdowns } from './hooks'
import { calendarAnimation } from './model/helpers'
import type { TCalendarClasses } from './model/types'
import { DaysOfMonth, DaysOfWeek, Header, Navigation } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { cn } from '$/shared/utils'

export interface ICalendarControlProps<T extends FieldValues> extends TControlledInputProps<T> {
  maskFormat?: string
  mask?: string | string[]
  allowEmptyFormatting?: boolean
  classes?: Partial<TCalendarClasses>
  disabled?: boolean
  onClickIcon?: (...args: unknown[]) => unknown
  defaultValue?: string
}

const today = format(new Date(), 'dd.MM.yyyy')

export const CalendarControl = <T extends FieldValues>({
  control,
  classes,
  label,
  disabled,
  maskFormat = '##.##.####',
  allowEmptyFormatting = false,
  mask = '',
  size = 'full',
  helperText,
  icon,
  badge,
  swapPosition,
  onClickIcon,
  defaultValue = today,
  ...props
}: ICalendarControlProps<T>) => {
  const inputId = React.useId()
  const methods = useFormContext()
  const calendarValue = methods.watch(props.name)

  const calendarWrapperRef = React.useRef<HTMLDivElement | null>(null)
  const {
    memoDaysOfMonth,
    firstDayOfMonth,
    selectedDay,
    selectedMonth,
    selectedYear,
    onSelectDay,
    onSelectMonth,
    onSelectYear,
    onBlurInput,
    onChangeMonth
  } = useCalendar(defaultValue ?? calendarValue)
  const { isCalendarOpen, toggleCalendar, calendarSetter, isMonthOpen, toggleMonthDropdown, isYearsOpen, toggleYearDropdown } =
    useCalendarDropdowns()

  useClickOutside(calendarWrapperRef, () => calendarSetter(false))

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div className={cn('relative', classes?.rootWrapper)} ref={calendarWrapperRef}>
            <AnimatePresence>
              {isCalendarOpen && (
                <motion.div
                  {...calendarAnimation}
                  className={cn(
                    'invisible absolute bottom-[-370px] right-0 z-30 h-[368px] w-[312px] rounded-sm bg-color-white p-4 shadow-md',
                    { visible: isCalendarOpen },
                    classes?.calendarWrapper
                  )}
                >
                  <div
                    className={cn(
                      'flex items-center justify-between border-b border-solid border-blue-grey-500 pb-2',
                      classes?.calendarHeader
                    )}
                  >
                    <Header
                      isMonthOpen={isMonthOpen}
                      isYearsOpen={isYearsOpen}
                      month={selectedMonth}
                      year={selectedYear}
                      toggleMonthDropdown={toggleMonthDropdown}
                      toggleYearDropdown={toggleYearDropdown}
                      onSelectMonth={(month: number) => onSelectMonth(month, onChange)}
                      onSelectYear={(year: number) => onSelectYear(year, onChange)}
                      classes={classes}
                    />
                    <Navigation
                      onClickPrevMonth={(event) => onChangeMonth(event, onChange, 'prev')}
                      onClickNextMonth={(event) => onChangeMonth(event, onChange, 'next')}
                      classes={classes}
                    />
                  </div>
                  <DaysOfWeek classes={classes} />
                  <DaysOfMonth
                    daysList={memoDaysOfMonth}
                    firstDayOfMonth={firstDayOfMonth}
                    onSelectDay={(day) => onSelectDay(day, onChange)}
                    selectedDay={+selectedDay}
                    classes={classes}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <FieldContainer size={size} classes={classes}>
              <FieldWrapper
                fieldId={inputId}
                label={label}
                classes={classes}
                disabled={disabled}
                value={value}
                error={!!error?.message}
              >
                <>
                  <PatternFormat
                    id={inputId}
                    value={value}
                    name={props.name}
                    format={maskFormat}
                    allowEmptyFormatting={allowEmptyFormatting}
                    mask={mask}
                    className={cn(
                      'desk-body-regular-l h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                      classes?.input
                    )}
                    onFocus={() => calendarSetter(true)}
                    onBlur={(event) => {
                      onBlurInput(event.target.value, onChange)
                      if (!event.target.value) {
                        methods.setValue(props.name as string, '')
                      }
                    }}
                  />
                  <FieldAttachment
                    badge={badge}
                    icon={icon}
                    error={!!error?.message}
                    classes={classes}
                    swapPosition={swapPosition}
                    onClickIcon={() => toggleCalendar(onClickIcon)}
                    onKeyDownIcon={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        toggleCalendar()
                      }
                    }}
                  />
                </>
              </FieldWrapper>
              <MessageView
                className={cn(classes?.message)}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
            </FieldContainer>
          </div>
        )
      }}
    />
  )
}
