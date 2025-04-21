import type { getCalculatorSchema } from './utils'

export type CalculatorVariables = Record<string, any>

export type CalculatorSuffix = 'percent' | 'currency'

export type ValueWithFormula = {
  formula: string
}
export type CalculatorValue = ValueWithFormula | string

export type ModalContentVariant = 'content1' | 'content2'
export type CalculatorSchema = ReturnType<typeof getCalculatorSchema>
