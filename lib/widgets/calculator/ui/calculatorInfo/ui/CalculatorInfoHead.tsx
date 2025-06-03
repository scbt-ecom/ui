import { Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type CalculatorInfoHeadClasses = {
  wrapper?: string
  title?: string
  subtitle?: string
}

export interface CalculatorInfoHeadProps {
  title?: string
  subtitle?: string
  classes?: CalculatorInfoHeadClasses
}

export const CalculatorInfoHead = ({ subtitle, title, classes }: CalculatorInfoHeadProps) => {
  return (
    <>
      {(title || subtitle) && (
        <div className={cn('flex flex-col gap-2', classes?.wrapper)}>
          {title && (
            <Heading as='h3' className={classes?.title}>
              {title}
            </Heading>
          )}
          {subtitle && <div className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}>{subtitle}</div>}
        </div>
      )}
    </>
  )
}
