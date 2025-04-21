import { Heading } from '$/shared/ui'

export interface CalculatorInfoHeadProps {
  title?: string
  subtitle?: string
}

export const CalculatorInfoHead = ({ subtitle, title }: CalculatorInfoHeadProps) => {
  return (
    <>
      {(title || subtitle) && (
        <div className='flex flex-col gap-2'>
          {title && <Heading as='h3'>{title}</Heading>}
          {subtitle && <div className='desk-body-regular-l text-color-dark'>{subtitle}</div>}
        </div>
      )}
    </>
  )
}
