'use client'
import { useState } from 'react'
import type { Control, FieldValues, SubmitHandler } from 'react-hook-form'
import { type TypeOf } from 'zod'
import { AuthProvider } from '../authProvider'
import { type Auth, type AuthMode } from '../dynamicForm/model'
import { HTMLRenderer } from '../htmlParser'
import type { Approvement, ApprovementType } from './model'
import { type FieldValidation, getDynamicSchema } from '@/shared/utils'
import { useControlledForm } from '$/shared/hooks'
import { Button, type ButtonProps, CheckboxBase, type CheckedState, Dialog } from '$/shared/ui'
import { cn, TypeGuards } from '$/shared/utils'
import { ZodUtils } from '$/shared/validation'
import { type FieldElement, FieldMapper } from '$/widgets/fieldMapper'
import { QueryClientProvider } from '$/widgets/queryClientProvider'

type SubmitProps = {
  submitCallback: <T extends FieldValues>(values: T) => void
}

type ApprovementClasses = {
  checkbox?: React.ComponentProps<typeof CheckboxBase>['classes']
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

export type DynamicFormDialogProps<
  AType extends ApprovementType,
  AuthType extends AuthMode
> = React.DialogHTMLAttributes<HTMLDialogElement> & {
  fields: FieldElement<any, any, { validation: FieldValidation }>[]
  title: string
  approvement: Approvement<AType>
  dialogId: string
  submitProps?: SubmitProps
  classes?: DynamicFormDialogClasses
  buttonGroup: ButtonProps[]
  auth: Auth<AuthType>
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
      <CheckboxBase classes={classes?.checkbox} checked={checked} onCheckedChange={onCheckedChange} />
      <HTMLRenderer html={approvement.content} as='div' className={classes?.content} />
    </label>
  )
}

const withAuthProvider = <Mode extends AuthMode>(auth: Auth<Mode>) => {
  switch (auth.mode) {
    case 'esia':
      return <AuthProvider {...auth} mode={auth.mode} />
    case 'mobileId':
      return <AuthProvider {...auth} mode={auth.mode} />
    case 'combine':
      return <AuthProvider {...auth} mode={auth.mode} />
    case 'off':
      return null
  }
}

export const DynamicFormDialog = <AType extends ApprovementType, AuthType extends AuthMode>({
  fields,
  title,
  approvement,
  submitProps,
  dialogId,
  classes,
  auth,
  buttonGroup,
  ...props
}: DynamicFormDialogProps<AType, AuthType>) => {
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
          {TypeGuards.isArrayFilled(buttonGroup) && (
            <div className='flex flex-col gap-4'>
              {buttonGroup?.map((button, index) => {
                const disabled = button.type === 'submit' && approvement.type === 'checkbox' ? !checked : false

                return (
                  <Button
                    {...button}
                    size='lg'
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
            </div>
          )}
          {/*<Button {...buttonProps} type='submit' disabled={approvement.type === 'checkbox' ? !checked : false} className='w-full'>*/}
          {/*  {children ?? 'Отправить форму'}*/}
          {/*</Button>*/}
          {withAuthProvider(auth)}
        </form>
      </Dialog>
    </QueryClientProvider>
  )
}

export default DynamicFormDialog
