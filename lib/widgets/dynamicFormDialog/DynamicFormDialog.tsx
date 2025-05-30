'use client'
import { useState } from 'react'
import type { Control, FieldValues, SubmitHandler } from 'react-hook-form'
import { type TypeOf } from 'zod'
import { HTMLRenderer } from '../htmlParser'
import type { Approvement, ApprovementType } from './model'
import { type FieldValidation, getDynamicSchema } from '@/shared/utils'
import { useControlledForm } from '$/shared/hooks'
import { Button, type ButtonProps, type CheckedState, Dialog, Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { ZodUtils } from '$/shared/validation'
import { type FieldElement, FieldMapper } from '$/widgets/fieldMapper'
import { QueryClientProvider } from '$/widgets/queryClientProvider'

type SubmitProps = {
  submitCallback: <T extends FieldValues>(values: T) => void
}

type ApprovementClasses = {
  checkbox?: React.ComponentProps<typeof Uncontrolled.CheckboxBase>['classes']
  content?: string
}

type DynamicFormDialogClasses = {
  root?: string
  title?: string
  fields?: string
  form?: string
  approvement?: ApprovementClasses
  submit?: string
}

export type DynamicFormDialogProps<AType extends ApprovementType> = React.DialogHTMLAttributes<HTMLDialogElement> & {
  fields: FieldElement<any, any, { validation: FieldValidation }>[]
  title: string
  approvement: Approvement<AType>
  dialogId: string
  submitProps?: SubmitProps
  classes?: DynamicFormDialogClasses
  buttonGroup: ButtonProps[]
}

const withApprovement = <Type extends ApprovementType>(
  approvement: Approvement<Type>,
  checked: CheckedState,
  onCheckedChange: (checked: CheckedState) => void,
  classes?: ApprovementClasses
) => {
  if (approvement.type === 'off') return null

  if (approvement.type === 'text') {
    return <HTMLRenderer html={approvement.message} as='div' className={classes?.content} />
  }

  return (
    <label
      className={cn(
        'mob-body-regular-s text-color-dark',
        'desktop:desk-body-regular-m desktop:gap-x-4',
        'flex items-center justify-items-start gap-x-3'
      )}
    >
      <Uncontrolled.CheckboxBase classes={classes?.checkbox} checked={checked} onCheckedChange={onCheckedChange} />
      <HTMLRenderer html={approvement.content} as='div' className={classes?.content} />
    </label>
  )
}

export const DynamicFormDialog = <AType extends ApprovementType>({
  fields,
  title,
  approvement,
  submitProps,
  dialogId,
  classes,
  buttonGroup,
  ...props
}: DynamicFormDialogProps<AType>) => {
  const { submitCallback } = submitProps ?? {}

  const [checked, onCheckedChange] = useState<CheckedState>(false)

  const schema = getDynamicSchema(fields)
  const defaultValues = ZodUtils.getZodDefaults(schema)

  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues,
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<TypeOf<typeof schema>> = (values) => {
    if (submitCallback) submitCallback({ ...values, agree: checked })
  }

  return (
    <QueryClientProvider>
      <Dialog id={dialogId} title={title} {...props}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
          <FieldMapper control={control as unknown as Control} fields={fields} />
          {withApprovement(approvement, checked, onCheckedChange, classes?.approvement)}
          {buttonGroup?.map((button, index) => {
            const disabled = button.type === 'submit' && approvement.type === 'checkbox' ? !checked : false

            return (
              <Button
                {...button}
                key={index}
                disabled={disabled}
                className={cn(
                  'w-full whitespace-nowrap',
                  {
                    'w-full': Boolean(approvement)
                  },
                  classes?.submit
                )}
              />
            )
          })}
          {/*<Button {...buttonProps} type='submit' disabled={approvement.type === 'checkbox' ? !checked : false} className='w-full'>*/}
          {/*  {children ?? 'Отправить форму'}*/}
          {/*</Button>*/}
        </form>
      </Dialog>
    </QueryClientProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default DynamicFormDialog
