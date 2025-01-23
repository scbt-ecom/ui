import { type HTMLAttributes } from 'react'
import type { SingleStepItem, StepperVariant } from './model/types'
import { SingleStep, type SingleStepClasses } from './ui/SingleStep'
import { Heading, ResponsiveContainer, Section } from '$/shared/ui'
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
  stepsList: SingleStepItem[]
  classes?: StepperClasses
}

export const Stepper = ({ headline, variant, stepsList, classes }: StepperProps) => {
  return (
    <Section className={classes?.root}>
      <ResponsiveContainer className={classes?.container}>
        <div className={cn('desktop:items-start desktop:gap-12 flex flex-col gap-6', classes?.wrapper)}>
          <Heading as='h2' className={cn('text-color-dark', classes?.headline)}>
            {headline}
          </Heading>
          <div
            className={cn(
              'desktop:flex-row desktop:items-start desktop:gap-12 flex w-full flex-col items-start gap-6',
              classes?.stepsWrapper
            )}
          >
            {stepsList?.map((step, index) => (
              <SingleStep variant={variant} key={step.description} {...step} index={index + 1} classes={classes?.step} />
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </Section>
  )
}
