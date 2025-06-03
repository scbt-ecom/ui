import { type Dispatch, memo, type SetStateAction } from 'react'
import { cn } from '$/shared/utils'

export type CalculatorTabsClasses = {
  wrapper?: string
  tab?: string
}

export interface CalculatorTab {
  name: string
  label: string
}

export type CalculatorTabValue = CalculatorTab['name']

export interface CalculatorTabsProps {
  calculatorTabs?: CalculatorTab[]
  activeCalculator: CalculatorTabValue
  setActiveCalculator: Dispatch<SetStateAction<CalculatorTabValue>>
  classes?: CalculatorTabsClasses
}

export const CalculatorTabs = memo(({ calculatorTabs, activeCalculator, setActiveCalculator, classes }: CalculatorTabsProps) => {
  return (
    <div className={cn('mb-8 flex items-center gap-4', classes?.wrapper)}>
      {calculatorTabs?.map(({ name, label }) => (
        <button
          key={name}
          onClick={() => setActiveCalculator(name)}
          className={cn(
            'mob-body-regular-m text-nowrap rounded-sm bg-color-blue-grey-100 px-3 py-1.5 text-color-secondary outline-1 outline-offset-4 outline-transparent desktop:desk-body-regular-l focus:outline-primary-focus desktop:px-4 desktop:py-3',
            { 'bg-icon-primary-default text-color-white': activeCalculator === name },
            classes?.tab
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
})
