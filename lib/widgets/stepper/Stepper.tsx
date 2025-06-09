import { type HTMLAttributes, useMemo, useState } from 'react'
import { widgetIds } from '../model'
import { type SingleStepper } from './model/types'
import { StepperCarousel } from './ui'
import { SingleStep, type SingleStepClasses } from './ui/SingleStep'
import { StepperTabs, type StepperTabsClasses, type StepperTabValue } from './ui/StepperTabs'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type StepperClasses = {
  root?: string
  container?: string
  wrapper?: string
  headline?: string
  stepsWrapper?: string
  step?: SingleStepClasses
  stepperTabs?: StepperTabsClasses
}

export interface StepperProps<WithImages extends boolean> extends HTMLAttributes<HTMLDivElement> {
  steppers: SingleStepper<WithImages>[]
  classes?: StepperClasses
}

export const Stepper = <WithImages extends boolean>({ steppers, classes }: StepperProps<WithImages>) => {
  const shouldShowTabs = steppers.length > 1
  const [activeStepper, setActiveStepper] = useState<StepperTabValue>(shouldShowTabs ? steppers[0]?.headline : '')

  const steppersTabs = useMemo(() => steppers?.map(({ headline }) => ({ headline })), [steppers])

  const currentStepperIndex = shouldShowTabs ? steppersTabs?.findIndex((tab) => tab.headline === activeStepper) : 0
  const currentStepper = steppers[currentStepperIndex]

  return (
    <section key={currentStepper.headline} id={widgetIds.stepper} data-test-id={widgetIds.stepper} className={classes?.root}>
      <ResponsiveContainer className={cn(classes?.container, 'mobile:max-w-[360px]')}>
        <div className={cn('flex flex-col gap-6 desktop:items-start desktop:gap-12', classes?.wrapper)}>
          <Heading as='h2' className={cn('text-color-dark', classes?.headline)}>
            {currentStepper.headline}
          </Heading>

          <div className='flex flex-col gap-6 desktop:gap-10'>
            {shouldShowTabs && (
              <StepperTabs
                stepperTabs={steppersTabs}
                activeStepper={activeStepper}
                setActiveStepper={setActiveStepper}
                classes={classes?.stepperTabs}
              />
            )}

            {currentStepper.withImages && <StepperCarousel currentStepper={currentStepper} />}

            <div
              className={cn(
                'flex w-full flex-col items-start gap-6 desktop:flex-row desktop:items-start desktop:gap-12',
                classes?.stepsWrapper,
                { ['mobile:hidden']: currentStepper.withImages }
              )}
            >
              {currentStepper.details?.map((step, index) => (
                <SingleStep {...step} key={step.description} index={index + 1} classes={classes?.step} />
              ))}
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}

// eslint-disable-next-line import/no-default-export
export default Stepper
