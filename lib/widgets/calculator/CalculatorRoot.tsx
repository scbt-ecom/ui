import { useState } from 'react'
import { widgetIds } from '../model'
import { Calculator, type CalculatorProps } from './Calculator'
import { type CalculatorTab, CalculatorTabs, type CalculatorTabValue } from './ui'
import { Heading, ResponsiveContainer } from '$/shared/ui'

export interface CalculatorRootProps {
  headline: string
  calculators: CalculatorProps[]
  calculatorTabs?: CalculatorTab[]
}

export const CalculatorRoot = ({ calculators, calculatorTabs, headline }: CalculatorRootProps) => {
  const shouldShowTabs = calculatorTabs && calculatorTabs.length > 1 && calculators.length > 1

  const [activeCalculator, setActiveCalculator] = useState<CalculatorTabValue>(shouldShowTabs ? calculatorTabs[0]?.value : '')

  const currentCalculator = shouldShowTabs
    ? calculators[calculatorTabs.findIndex((tab) => tab.value === activeCalculator)] //Активный калькулятор по значению таба
    : calculators[0] // Берем первый калькулятор если табов нет

  return (
    <section id={widgetIds.calculator}>
      <ResponsiveContainer>
        <div className='rounded-md bg-color-white px-10 py-12 shadow-md'>
          <Heading className='mb-12' as='h2'>
            {headline}
          </Heading>
          {shouldShowTabs && (
            <CalculatorTabs
              calculatorTabs={calculatorTabs}
              activeCalculator={activeCalculator}
              setActiveCalculator={setActiveCalculator}
            />
          )}
          {currentCalculator && (
            <Calculator
              key={activeCalculator}
              calculatedInfoConfig={currentCalculator.calculatedInfoConfig}
              rootCalculatorConfig={currentCalculator.rootCalculatorConfig}
            />
          )}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
