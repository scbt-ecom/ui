import { type Dispatch, memo, type SetStateAction } from 'react'
import { cn } from '$/shared/utils'

export type StepperTabsClasses = {
  wrapper?: string
  tab?: string
}

export interface StepperTab {
  headline: string
}

export type StepperTabValue = string | undefined

export interface StepperTabsProps {
  stepperTabs?: StepperTab[]
  activeStepper: StepperTabValue
  setActiveStepper: Dispatch<SetStateAction<StepperTabValue>>
  classes?: StepperTabsClasses
}

export const StepperTabs = memo(({ stepperTabs, activeStepper, setActiveStepper, classes }: StepperTabsProps) => {
  return (
    <div className={cn('customScrollbar-y scrollHidden flex items-center gap-4 overflow-x-auto', classes?.wrapper)}>
      {stepperTabs?.map(({ headline }) => (
        <button
          key={headline}
          onClick={() => setActiveStepper(headline)}
          className={cn(
            'mob-body-regular-m text-nowrap rounded-sm bg-color-blue-grey-100 px-3 py-1.5 text-color-secondary outline-1 outline-offset-4 outline-transparent desktop:desk-body-regular-l focus:outline-primary-focus desktop:px-4 desktop:py-3',
            { 'bg-icon-primary-default text-color-white': activeStepper === headline },
            classes?.tab
          )}
        >
          {headline}
        </button>
      ))}
    </div>
  )
})
