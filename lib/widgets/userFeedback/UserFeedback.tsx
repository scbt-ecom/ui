import { useState } from 'react'
import { type FormStep, type FormStepSetter, type SubmitCallback, useRating, type UseRatingReturn } from './model'
import {
  FeedbackTrigger,
  Finally,
  type FinallyClasses,
  type FinallyProps,
  SelectRating,
  type SelectRatingClasses,
  type SelectRatingProps,
  UserReview,
  type UserReviewClasses,
  type UserReviewProps
} from './ui'
import { Popover, type PopoverProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type RenderFormStep = UserFeedbackProps & {
  formStep: FormStep
  setFormStep: FormStepSetter
  ratingProps: UseRatingReturn
  submitCallback: SubmitCallback
}

const renderFormStep = ({ formStep, setFormStep, ratingProps, ...props }: RenderFormStep) => {
  switch (formStep) {
    case 'rating':
      return <SelectRating {...ratingProps} classes={props.classes?.selectRating} {...props.selectRatingStepProps} />

    case 'review':
      return (
        <UserReview
          submitCallback={props.submitCallback}
          setFormStep={setFormStep}
          rating={ratingProps.selectedRating}
          classes={props.classes?.userReview}
          {...props.userReviewStepProps}
        />
      )

    case 'finally':
      return <Finally classes={props.classes?.finally} {...props.finallyStepProps} />
  }
}

type UserFeedbackClasses = {
  root?: string
  wrapper?: string
  selectRating?: SelectRatingClasses
  userReview?: UserReviewClasses
  finally?: FinallyClasses
}

export type UserFeedbackProps = {
  submitCallback: SubmitCallback
  selectRatingStepProps?: SelectRatingProps
  userReviewStepProps?: Pick<UserReviewProps, 'title' | 'subtitle'>
  finallyStepProps?: FinallyProps
  classes?: UserFeedbackClasses
  popoverProps?: PopoverProps
}

export const UserFeedback = (props: UserFeedbackProps) => {
  const [formStep, setFormStep] = useState<FormStep>('rating')
  const ratingProps = useRating(setFormStep)
  const { classes } = props

  return (
    <div className={cn('fixed right-5 top-[80%] z-[1000]', classes?.root)}>
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
        {...props?.popoverProps}
      >
        <div className={cn('w-full', classes?.wrapper)}>{renderFormStep({ formStep, setFormStep, ratingProps, ...props })}</div>
      </Popover>
    </div>
  )
}

export default UserFeedback
