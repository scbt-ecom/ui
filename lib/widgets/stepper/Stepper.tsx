import * as React from 'react'
import { type HTMLAttributes } from 'react'
import { type ISingleStepClasses, SingleStep } from './ui/SingleStep'
import { Heading, ResponsiveContainer, Section } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TStepperClasses = {
  root?: string
  container?: string
  wrapper?: string
  headline?: string
  stepsWrapper?: string
  step?: ISingleStepClasses
}

export interface ISingleStep {
  title: string
  description: string | React.ReactElement
}

export interface IStepperProps extends HTMLAttributes<HTMLDivElement> {
  heading: string
  stepsList: ISingleStep[]
  classes?: TStepperClasses
}

export const Stepper = ({ heading, stepsList, classes }: IStepperProps) => {
  return (
    <Section className={classes?.root}>
      <ResponsiveContainer className={classes?.container}>
        <div className={cn('flex flex-col gap-12 desktop:items-start', classes?.wrapper)}>
          <Heading as='h2' className={cn('text-color-dark', classes?.headline)}>
            {heading}
          </Heading>
          <div
            className={cn(
              'flex w-full flex-col items-start gap-6 desktop:flex-row desktop:items-center desktop:gap-12',
              classes?.stepsWrapper
            )}
          >
            {stepsList?.map((step, index) => <SingleStep key={step.title} index={index + 1} {...step} classes={classes?.step} />)}
          </div>
        </div>
      </ResponsiveContainer>
    </Section>
  )
}
