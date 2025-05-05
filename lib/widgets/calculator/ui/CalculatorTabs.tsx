import { type Dispatch, memo, type SetStateAction } from 'react'
import { cn } from '$/shared/utils'

export interface CalculatorTab {
  name: string
  label: string
}

export type CalculatorTabValue = CalculatorTab['name']

export interface CalculatorTabsProps {
  calculatorTabs?: CalculatorTab[]
  activeCalculator: CalculatorTabValue
  setActiveCalculator: Dispatch<SetStateAction<CalculatorTabValue>>
}

export const CalculatorTabs = memo(({ calculatorTabs, activeCalculator, setActiveCalculator }: CalculatorTabsProps) => {
  return (
    <div className='mb-8 flex items-center gap-4'>
      {calculatorTabs?.map(({ name, label }) => (
        <button
          key={name}
          onClick={() => setActiveCalculator(name)}
          className={cn(
            'mob-body-regular-m text-nowrap rounded-sm bg-color-blue-grey-100 px-3 py-1.5 text-color-secondary outline-1 outline-offset-4 outline-transparent desktop:desk-body-regular-l focus:outline-primary-focus desktop:px-4 desktop:py-3',
            { 'bg-icon-primary-default text-color-white': activeCalculator === name }
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
})
