import type { ISingleStep } from '../Stepper'
import { Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TSingleStepClasses = {
  singleStep: string
  numeric: string
  textBlock: string
  title: string
  description: string
}

interface ISingleStepProps extends ISingleStep {
  index: number
  classes?: Partial<TSingleStepClasses>
}

export const SingleStep = ({ title, description, index, classes }: ISingleStepProps) => {
  return (
    <div
      className={cn(
        'mobile:border-color-blue-grey-500 flex w-[328px] max-w-[328px] flex-col gap-6 mobile:rounded-md mobile:border mobile:border-solid mobile:p-4 desktop:w-[348px] desktop:max-w-[348px]',
        classes?.singleStep
      )}
    >
      <div
        className={cn(
          'mob-headline-bold-s flex size-10 items-center justify-center rounded-sm bg-color-blue-grey-500 text-color-white desktop:desk-title-bold-l desktop:size-12',
          classes?.numeric
        )}
      >
        {index}
      </div>
      <div className={cn('flex flex-col gap-4', classes?.textBlock)}>
        <Heading as='h4' className={cn('text-color-dark', classes?.title)}>
          {title}
        </Heading>
        <p className={cn('desk-body-regular-l text-color-tetriary', classes?.description)}>{description}</p>
      </div>
    </div>
  )
}
