import { type CalculatorSuffix, type CalculatorValue, formatWithIntl } from '../../../model'

export interface CalculatedBlockProps {
  rootDescription: string
  rootValue: CalculatorValue
  suffix: CalculatorSuffix
}

export const CalculatedBlock = ({ rootDescription, rootValue, suffix }: CalculatedBlockProps) => {
  return (
    <div className='mb-6 flex items-center justify-between gap-6'>
      <p className='desk-body-regular-l text-color-dark'>{rootDescription}</p>
      <div className='desk-title-bold-l flex items-center gap-1 text-color-dark'>
        <span>{formatWithIntl(suffix, Number(rootValue))}</span>
      </div>
    </div>
  )
}
