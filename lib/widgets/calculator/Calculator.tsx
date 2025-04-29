import { useMemo, useState } from 'react'
import { widgetIds } from '../model'
import { CalculatorView, type CalculatorViewProps } from './CalculatorView'
import { CalculatorTabs, type CalculatorTabValue } from './ui'
import { Heading, ResponsiveContainer } from '$/shared/ui'

export interface CalculatorProps {
  headline: string
  calculators: CalculatorViewProps[]
}

export const Calculator = ({ calculators, headline }: CalculatorProps) => {
  const shouldShowTabs = calculators.length > 1

  const [activeCalculator, setActiveCalculator] = useState<CalculatorTabValue>(shouldShowTabs ? calculators[0]?.name : '')

  const calculatorsTabs = useMemo(() => calculators?.map(({ name, label }) => ({ name, label })), [calculators])

  const currentCalculatorIndex = shouldShowTabs
    ? calculatorsTabs?.findIndex((tab) => tab.name === activeCalculator) //Активный калькулятор по значению таба
    : 0 // Берем первый калькулятор если табов нет

  const currentCalculator = calculators[currentCalculatorIndex]

  return (
    <section id={widgetIds.calculator}>
      <ResponsiveContainer>
        <div className='rounded-md bg-color-white px-10 py-12 shadow-md'>
          <Heading className='mb-12' as='h2'>
            {headline}
          </Heading>
          {shouldShowTabs && (
            <CalculatorTabs
              calculatorTabs={calculatorsTabs}
              activeCalculator={activeCalculator}
              setActiveCalculator={setActiveCalculator}
            />
          )}

          <CalculatorView
            name={currentCalculator.name}
            label={currentCalculator.label}
            calculatorInfoConfig={currentCalculator.calculatorInfoConfig}
            calculatorFieldsConfig={currentCalculator.calculatorFieldsConfig}
          />
        </div>
      </ResponsiveContainer>
    </section>
  )
}
