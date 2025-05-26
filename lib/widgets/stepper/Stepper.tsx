import { type HTMLAttributes } from 'react'
import { widgetIds } from '../model'
import type { SingleStepItem, StepperVariant } from './model/types'
import { SingleStep, type SingleStepClasses } from './ui/SingleStep'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type StepperClasses = {
  root?: string
  container?: string
  wrapper?: string
  headline?: string
  stepsWrapper?: string
  step?: SingleStepClasses
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  headline: string
  variant: StepperVariant
  details: SingleStepItem[]
  classes?: StepperClasses
}

export const Stepper = ({ headline, details, variant, classes }: StepperProps) => {
  return (
    <section id={widgetIds.stepper} data-test-id={widgetIds.stepper} className={classes?.root}>
      <ResponsiveContainer className={classes?.container}>
        <div className={cn('flex flex-col gap-6 desktop:items-start desktop:gap-12', classes?.wrapper)}>
          <Heading as='h2' className={cn('text-color-dark', classes?.headline)}>
            {headline}
          </Heading>
          <div
            className={cn(
              'flex w-full flex-col items-start gap-6 desktop:flex-row desktop:items-start desktop:gap-12',
              classes?.stepsWrapper
            )}
          >
            {details?.map((step, index) => (
              <SingleStep variant={variant} key={step.description} {...step} index={index + 1} classes={classes?.step} />
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}

// eslint-disable-next-line import/no-default-export
export default Stepper
