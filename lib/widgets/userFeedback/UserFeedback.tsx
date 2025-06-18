import { useState } from 'react'
import { type FormStep, type FormStepSetter, type SubmitCallback, useRating, type UseRatingReturn } from './model'
import { FeedbackTrigger, SelectRating, Success, UserReviewForm } from './ui'
import { Popover } from '$/shared/ui'

export type RenderFormStep = {
  formStep: FormStep
  setFormStep: FormStepSetter
  ratingProps: UseRatingReturn
  submitCallback: SubmitCallback
}

const renderFormStep = ({ formStep, setFormStep, ratingProps, submitCallback }: RenderFormStep) => {
  switch (formStep) {
    case 'rating':
      return <SelectRating {...ratingProps} />

    case 'review':
      return <UserReviewForm submitCallback={submitCallback} setFormStep={setFormStep} rating={ratingProps.selectedRating} />

    case 'finally':
      return <Success />
  }
}

export type UserFeedbackProps = {
  submitCallback: SubmitCallback
}

export const UserFeedback = ({ submitCallback }: UserFeedbackProps) => {
  const [formStep, setFormStep] = useState<FormStep>('rating')
  const ratingProps = useRating(setFormStep)

  return (
    <div className='fixed right-5 top-[80%] z-[1000]'>
      <Popover
        side='top'
        align='end'
        sideOffset={10}
        withArrow={false}
        withCloseBtn={false}
        classes={{
          content: 'max-w-[330px] w-[330px] p-6'
        }}
        triggerElement={<FeedbackTrigger />}
      >
        <div className='w-full'>{renderFormStep({ formStep, setFormStep, ratingProps, submitCallback })}</div>
      </Popover>
    </div>
  )
}
