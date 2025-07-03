import type { ReactNode } from 'react'
import { type FormStepSetter, type SubmitCallback, type UserReviewSchema, userReviewSchema } from '../model'
import { useControlledForm } from '$/shared/hooks'
import { Button, TextareaControl, type TextareaControlProps } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { ZodUtils } from '$/shared/validation'

const defaultTitle = 'Расскажите о впечатлениях'
const defaultSubtitle = (
  <>
    Вам нравится сайт банка? <br /> У вас есть предложения по его улучшению?
  </>
)

export type UserReviewClasses = {
  form?: string
  textBlock?: string
  title?: string
  subtitle?: string
  textareaClasses?: TextareaControlProps['classes']
  button?: string
}

export interface UserReviewProps {
  submitCallback: SubmitCallback
  setFormStep: FormStepSetter
  rating: number
  title?: string
  subtitle?: ReactNode
  classes?: UserReviewClasses
}

export const UserReview = ({
  submitCallback,
  rating,
  setFormStep,
  title = defaultTitle,
  subtitle = defaultSubtitle,
  classes
}: UserReviewProps) => {
  const { control, handleSubmit } = useControlledForm({
    mode: 'onBlur',
    schema: userReviewSchema,
    defaultValues: ZodUtils.getZodDefaults(userReviewSchema)
  })

  const onSubmit = async (values: UserReviewSchema) => {
    if (submitCallback) {
      await submitCallback({
        rating,
        pageUrl: window?.location?.href,
        ...values
      })
      setFormStep('finally')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('flex flex-col gap-4', classes?.form)}>
      <div className={cn('flex flex-col gap-2 text-center', classes?.textBlock)}>
        <p className={cn('desk-body-medium-l', classes?.title)}>{title}</p>
        <p className={cn('desk-body-regular-l', classes?.subtitle)}>{subtitle}</p>
      </div>
      <TextareaControl control={control} name='review' label='Поделитесь вашим мнением' classes={classes?.textareaClasses} />
      <Button type='submit' size='sm' intent='negative' className={cn('w-full', classes?.button)}>
        Отправить
      </Button>
    </form>
  )
}
