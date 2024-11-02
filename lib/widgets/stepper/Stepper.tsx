import * as React from 'react'
import { SingleStep, type TSingleStepClasses } from './ui/SingleStep'
import { Heading, ResponsiveContainer, Section } from '$/shared/ui'
import { cn } from '$/shared/utils'

type TStepperClasses = TSingleStepClasses & {
  root: string
  headline: string
  stepsWrapper: string
}

export interface ISingleStep {
  title: string
  description: string | React.ReactElement
}

export interface IStepperProps {
  heading: string
  stepsList: ISingleStep[]
  classes?: Partial<TStepperClasses>
}

export const Stepper = ({ heading, stepsList, classes }: IStepperProps) => {
  return (
    <Section>
      <ResponsiveContainer>
        <div className={cn('flex flex-col gap-12', classes?.root)}>
          <Heading as='h2' className={cn('text-color-dark', classes?.headline)}>
            {heading}
          </Heading>
          <div
            className={cn(
              'flex flex-col items-start gap-6 desktop:flex-row desktop:items-center desktop:gap-12',
              classes?.stepsWrapper
            )}
          >
            {stepsList?.map((step, index) => <SingleStep key={step.title} index={index + 1} {...step} classes={classes} />)}
          </div>
        </div>
      </ResponsiveContainer>
    </Section>
  )
}
