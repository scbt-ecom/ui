import { useCallback, useId, useRef } from 'react'
import { DayPicker, type DayPickerProps, type NavProps, type PropsRange, type PropsSingle } from 'react-day-picker'
import { Controller, type FieldValues, useFormContext } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { ru } from 'date-fns/locale'
import { AnimatePresence, motion } from 'framer-motion'
import { type TAdditionalInputClassesWithAttachment, type TControlledInputProps } from '../formControlElements/model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../formControlElements/ui'
import { calendarAnimation } from './model/animation'
import { dayPickerClasses } from './model/classes'
import { useCalendarDropdowns, useDatePicker } from './model/hooks'
import { CalendarHeader, Weekdays } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { cn } from '$/shared/utils'

// https://github.com/gpbl/react-day-picker/discussions/1570  - issue

type TCalendarClasses = Partial<TAdditionalInputClassesWithAttachment> & {
  root: string
  wrapper: string
  calendar: string
}
export type TCalendarMode = 'range' | 'single'
type TCalendarCommonProps = PropsSingle | PropsRange

function isSingleMode(props: TCalendarCommonProps): props is PropsSingle {
  return props.mode === 'single'
}

export type ICalendarProps<T extends FieldValues> = TControlledInputProps<T> &
  TCalendarCommonProps &
  DayPickerProps & {
    maskFormat?: string
    mask?: string | string[]
    allowEmptyFormatting?: boolean
    classes?: Partial<TCalendarClasses>
    disabled?: boolean
    onClickIcon?: (...args: unknown[]) => unknown
  }

export const Calendar = <T extends FieldValues>(props: ICalendarProps<T>) => {
  const {
    control,
    label,
    helperText,
    showOutsideDays = true,
    maskFormat = '##.##.####',
    allowEmptyFormatting = false,
    mask = '',
    size = 'full',
    classes,
    disabled,
    icon,
    badge,
    swapPosition,
    onClickIcon
  } = props
  const { setValue } = useFormContext()
  const inputId = useId()
  const calendarWrapperRef = useRef<HTMLDivElement>(null)
  const { toggleCalendar, isCalendarOpen, calendarSetter, isMonthOpen, toggleMonthDropdown, isYearsOpen, toggleYearDropdown } =
    useCalendarDropdowns()

  const {
    formattedControlledDate,
    controlledDate,
    onClickDay,
    onChangeMonth,
    onSelectMonth,
    onSelectYear,
    onBlurInput,
    onClickPrev,
    onClickNext
  } = useDatePicker()
  useClickOutside(calendarWrapperRef, () => calendarSetter(false))

  const CaptionLabelComponent = useCallback(() => <></>, [])
  const WeekComponent = useCallback(() => <Weekdays />, [])
  const CalendarHeaderComponent = useCallback(
    (onControlledChange: (...event: unknown[]) => void, navProps: NavProps) => {
      return (
        <CalendarHeader
          controlledDate={controlledDate}
          isMonthOpen={isMonthOpen}
          toggleMonthDropdown={toggleMonthDropdown}
          isYearsOpen={isYearsOpen}
          toggleYearDropdown={toggleYearDropdown}
          onSelectMonth={(month: number) => onSelectMonth(month, onControlledChange)}
          onSelectYear={(year: number) => onSelectYear(year, onControlledChange)}
          onClickPrev={(event) => onClickPrev(event, navProps.onPreviousClick)}
          onClickNext={(event) => onClickNext(event, navProps.onNextClick)}
          {...navProps}
        />
      )
    },
    [
      controlledDate,
      isMonthOpen,
      toggleMonthDropdown,
      isYearsOpen,
      toggleYearDropdown,
      onSelectMonth,
      onSelectYear,
      onClickPrev,
      onClickNext
    ]
  )

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div className={cn('relative', classes?.root)} ref={calendarWrapperRef}>
            <>{value}</>
            <AnimatePresence>
              {isCalendarOpen && (
                <motion.div
                  className={cn('invisible absolute bottom-[-350px] right-0 z-30', { visible: isCalendarOpen }, classes?.wrapper)}
                  {...calendarAnimation}
                >
                  {isSingleMode(props) ? (
                    <>
                      <DayPicker
                        onDayClick={(date: Date) => onClickDay(date, onChange, 'single', () => calendarSetter(false))}
                        month={formattedControlledDate}
                        onMonthChange={(date: Date) => onChangeMonth(date, onChange)}
                        pagedNavigation
                        locale={ru}
                        showOutsideDays={showOutsideDays}
                        // disabled={{ dayOfWeek: [0, 6] }}
                        // disabled={{ before: new Date() }}
                        className={cn('relative h-[368px] w-[312px] bg-color-white p-4 shadow-sm', classes?.calendar)}
                        classNames={dayPickerClasses()}
                        components={{
                          Weekdays: WeekComponent,
                          CaptionLabel: CaptionLabelComponent,
                          Nav: (navProps) => CalendarHeaderComponent(onChange, navProps)
                        }}
                        {...props}
                      />
                    </>
                  ) : (
                    <>
                      <DayPicker
                        onDayClick={(date: Date) => onClickDay(date, onChange, 'range', () => calendarSetter(false))}
                        month={formattedControlledDate}
                        onMonthChange={(date: Date) => onChangeMonth(date, onChange)}
                        pagedNavigation
                        locale={ru}
                        showOutsideDays={showOutsideDays}
                        // disabled={{ dayOfWeek: [0, 6] }}
                        // disabled={{ before: new Date() }}
                        className={cn('relative h-[368px] w-[312px] bg-color-white p-4 shadow-sm', classes?.calendar)}
                        classNames={dayPickerClasses(true)}
                        components={{
                          Weekdays: WeekComponent,
                          CaptionLabel: CaptionLabelComponent,
                          Nav: (navProps) => CalendarHeaderComponent(onChange, navProps)
                        }}
                        {...props}
                      />
                    </>
                  )}
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
                        setValue(props.name as string, '')
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
              />
            </FieldContainer>
          </div>
        )
      }}
    />
  )
}
