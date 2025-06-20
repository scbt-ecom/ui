import { type FormStepSetter, type SubmitCallback, type UserReviewSchema, userReviewSchema } from '../model'
import { useControlledForm } from '$/shared/hooks'
import { Button, Controlled } from '$/shared/ui'
import { ZodUtils } from '$/shared/validation'

export interface UserReviewFormProps {
  submitCallback: SubmitCallback
  setFormStep: FormStepSetter
  rating: number
  title?: string
  subtitle?: string
}
const defaultTitle = 'Расскажите о впечатлениях'
const defaultSubtitle = 'Вам нравится сайт банка? <br /> У вас есть предложения по его улучшению?'

export const UserReviewForm = ({
  submitCallback,
  rating,
  setFormStep,
  title = defaultTitle,
  subtitle = defaultSubtitle
}: UserReviewFormProps) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2 text-center'>
        <p className='desk-body-medium-l'>{title}</p>
        <p className='desk-body-regular-l'>{subtitle}</p>
      </div>
      <Controlled.TextareaControl control={control} name='review' label='Поделитесь вашим мнением' />
      <Button type='submit' size='sm' intent='negative' className='w-full'>
        Отправить
      </Button>
    </form>
  )
}
