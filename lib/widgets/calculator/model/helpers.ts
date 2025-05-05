import type { InfoListItemDto, InfoListItemProps } from '../ui'
import type { CalculatorVariables } from './types'
import { isFormula } from './utils'

const validateFormula = (formula: string, variables: CalculatorVariables) => {
  const variablesInFormula = formula.match(/[a-zA-Z_$][a-zA-Z0-9_$]*/g) || []
  const missingVariables = variablesInFormula.filter((varName) => !(varName in variables))

  if (missingVariables.length > 0) {
    return ''
    // throw new Error(`Отсутствуют переменные для калькулятора: ${missingVariables.join(', ')}`) 12 + 14 / select1
  }

  return formula
}

export const evaluateFormula = (formula: string, variables: CalculatorVariables): string => {
  const entries = Object.entries(variables).map(([key, value]) => [key, value !== null ? value : '1'])

  const variablesKeys = entries.map(([key]) => key)
  const variablesValues = entries.map(([, value]) => value)

  const validatedFormula = validateFormula(formula, Object.fromEntries(entries))

  const replaceVariables = new Function(...variablesKeys, `return ${validatedFormula};`)

  const replaceResult: number = replaceVariables(...variablesValues.map(Number))

  if (Number.isNaN(Number(replaceResult))) {
    return '0'
  }

  return replaceResult.toString()
}

export const formatInfoList = (list: InfoListItemDto[], variables: CalculatorVariables): InfoListItemProps[] => {
  return list.map((item) => {
    return {
      ...item,
      value: isFormula(item.value) ? evaluateFormula(item.value.formula, variables) : item.value
    }
  })
}
