import type { InfoListItemDto, InfoListItemProps } from '../ui'
import type { CalculatorVariables } from './types'
import { isFormula } from './utils'

const validateFormula = (formula: string, variables: CalculatorVariables) => {
  const variablesInFormula = formula.match(/[a-zA-Z_$][a-zA-Z0-9_$]*/g) || []
  const missingVariables = variablesInFormula.filter((varName) => !(varName in variables))

  if (missingVariables.length > 0) {
    throw new Error(`Отсутствуют переменные для калькулятора: ${missingVariables.join(', ')}`)
  }

  return formula
}

export const evaluateFormula = (formula: string, variables: CalculatorVariables): string => {
  const variablesKeys = Object.keys(variables)
  const variablesValues = Object.values(variables)

  const validatedFormula = validateFormula(formula, variables)

  const replaceVariables = new Function(...variablesKeys, `return ${validatedFormula};`)

  const replaceResult: number = replaceVariables(...variablesValues)

  if (Number.isNaN(replaceResult)) {
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
