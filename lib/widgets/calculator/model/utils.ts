import type { FieldValues } from 'react-hook-form'
import { z } from 'zod'
import { getDynamicSchema } from '../../model'
import type { CalculatorProps } from '../Calculator'
import type { CalculatorSuffix, ValueWithFormula } from './types'

export const isFormula = (value: ValueWithFormula | string): value is ValueWithFormula => {
  return typeof value !== 'string' && 'formula' in value
}

export const formatWithIntl = (suffix: CalculatorSuffix, value: number) => {
  let calculationValue = value

  const options: Intl.NumberFormatOptions = {
    style: suffix
  }

  switch (suffix) {
    case 'currency':
      options.currency = 'RUB'
      options.minimumFractionDigits = 0
      options.maximumFractionDigits = 0
      break

    case 'percent':
      options.minimumFractionDigits = 0
      options.maximumFractionDigits = 1
      calculationValue = calculationValue / 100
      break
  }

  const formatter = new Intl.NumberFormat('ru-RU', options)
  return formatter.format(calculationValue)
}

export const getCalculatorSchema = <T extends FieldValues>(props: CalculatorProps<T>['rootCalculatorConfig']['fieldsGroup']) => {
  const groups = Object.values(props)

  return groups.reduce<z.ZodObject<any>>((acc, item) => acc.merge(getDynamicSchema(item.fields)), z.object({}))
}
