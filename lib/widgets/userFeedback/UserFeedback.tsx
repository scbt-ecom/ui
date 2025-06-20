import { useState } from 'react'
import { type FormStep, type FormStepSetter, type SubmitCallback, useRating, type UseRatingReturn } from './model'
import {
  FeedbackTrigger,
  SelectRating,
  type SelectRatingProps,
  Success,
  type SuccessProps,
  UserReviewForm,
  type UserReviewFormProps
} from './ui'
import { Popover } from '$/shared/ui'

export type RenderFormStep = UserFeedbackProps & {
  formStep: FormStep
  setFormStep: FormStepSetter
  ratingProps: UseRatingReturn
  submitCallback: SubmitCallback
}

const renderFormStep = ({ formStep, setFormStep, ratingProps, ...props }: RenderFormStep) => {
  switch (formStep) {
    case 'rating':
      return <SelectRating {...ratingProps} {...props.selectRatingStepProps} />

    case 'review':
      return (
        <UserReviewForm
          submitCallback={props.submitCallback}
          setFormStep={setFormStep}
          rating={ratingProps.selectedRating}
          {...props.userReviewStepProps}
        />
      )

    case 'finally':
      return <Success {...props.successStepProps} />
  }
}

export type UserFeedbackProps = {
  submitCallback: SubmitCallback
  selectRatingStepProps?: SelectRatingProps
  userReviewStepProps?: Pick<UserReviewFormProps, 'title' | 'subtitle'>
  successStepProps?: SuccessProps
}

export const UserFeedback = (props: UserFeedbackProps) => {
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
        <div className='w-full'>{renderFormStep({ formStep, setFormStep, ratingProps, ...props })}</div>
      </Popover>
    </div>
  )
}

export default UserFeedback
