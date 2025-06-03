import { type CalculatorSuffix, type CalculatorValue, formatWithIntl } from '../../../model'
import { cn } from '$/shared/utils'

export type CalculatedBlockClasses = {
  wrapper?: string
  description?: string
  value?: string
}

export interface CalculatedBlockProps {
  rootDescription: string
  rootValue: CalculatorValue
  suffix: CalculatorSuffix
  classes?: CalculatedBlockClasses
}

export const CalculatedBlock = ({ rootDescription, rootValue, suffix, classes }: CalculatedBlockProps) => {
  return (
    <div className={cn('mb-6 flex items-center justify-between gap-6', classes?.wrapper)}>
      <p className={cn('desk-body-regular-l text-color-dark', classes?.description)}>{rootDescription}</p>
      <div className={cn('desk-title-bold-l flex items-center gap-1 text-color-dark', classes?.value)}>
        {formatWithIntl(suffix, Number(rootValue))}
      </div>
    </div>
  )
}
