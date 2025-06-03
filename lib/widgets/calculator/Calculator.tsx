import { useMemo, useState } from 'react'
import { cn } from '../../shared/utils'
import { widgetIds } from '../model'
import { CalculatorView, type CalculatorViewClasses, type CalculatorViewProps } from './CalculatorView'
import { CalculatorTabs, type CalculatorTabsClasses, type CalculatorTabValue } from './ui'
import { Heading, ResponsiveContainer } from '$/shared/ui'

export type CalculatorClasses = {
  root?: string
  container?: string
  headline?: string
  wrapper?: string
  calculatorView?: CalculatorViewClasses
  calculatorTabs?: CalculatorTabsClasses
}

export interface CalculatorProps {
  headline: string
  calculators: CalculatorViewProps[]
  classes?: CalculatorClasses
}

export const Calculator = ({ calculators, headline, classes }: CalculatorProps) => {
  const shouldShowTabs = calculators.length > 1

  const [activeCalculator, setActiveCalculator] = useState<CalculatorTabValue>(shouldShowTabs ? calculators[0]?.name : '')

  const calculatorsTabs = useMemo(() => calculators?.map(({ name, label }) => ({ name, label })), [calculators])

  const currentCalculatorIndex = shouldShowTabs
    ? calculatorsTabs?.findIndex((tab) => tab.name === activeCalculator) // Активный калькулятор по значению таба
    : 0 // Берем первый калькулятор если табов нет

  const currentCalculator = calculators[currentCalculatorIndex]

  return (
    <section id={widgetIds.calculator} data-test-id={widgetIds.calculator} className={cn(classes?.root)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn(classes?.wrapper)}>
          <Heading className={cn('mb-12', classes?.headline)} as='h2'>
            {headline}
          </Heading>
          {shouldShowTabs && (
            <CalculatorTabs
              calculatorTabs={calculatorsTabs}
              activeCalculator={activeCalculator}
              setActiveCalculator={setActiveCalculator}
              classes={classes?.calculatorTabs}
            />
          )}

          <CalculatorView
            name={currentCalculator.name}
            label={currentCalculator.label}
            calculatorInfoConfig={currentCalculator.calculatorInfoConfig}
            calculatorFieldsConfig={currentCalculator.calculatorFieldsConfig}
            classes={classes?.calculatorView}
          />
        </div>
      </ResponsiveContainer>
    </section>
  )
}

// eslint-disable-next-line import/no-default-export
export default Calculator
