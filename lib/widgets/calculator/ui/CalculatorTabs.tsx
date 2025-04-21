import type { Dispatch, SetStateAction } from 'react'
import { cn } from '$/shared/utils'

export interface CalculatorTab {
  label: string
  value: string
}
export type CalculatorTabValue = CalculatorTab['value']

export interface CalculatorTabsProps {
  calculatorTabs: CalculatorTab[]
  activeCalculator: CalculatorTabValue
  setActiveCalculator: Dispatch<SetStateAction<CalculatorTabValue>>
}

export const CalculatorTabs = ({ calculatorTabs, activeCalculator, setActiveCalculator }: CalculatorTabsProps) => {
  return (
    <div className='mb-8 flex items-center gap-4'>
      {calculatorTabs?.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setActiveCalculator(value)}
          className={cn(
            'mob-body-regular-m text-nowrap rounded-sm bg-color-blue-grey-100 px-3 py-1.5 text-color-secondary outline-1 outline-offset-4 outline-transparent desktop:desk-body-regular-l focus:outline-primary-focus desktop:px-4 desktop:py-3',
            { 'bg-icon-primary-default text-color-white': activeCalculator === value }
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
