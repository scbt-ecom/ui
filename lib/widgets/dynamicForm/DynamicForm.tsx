'use client'

import { useState } from 'react'
import { type Control, type SubmitHandler } from 'react-hook-form'
import { type TypeOf } from 'zod'
import { HTMLRenderer } from '../htmlParser'
import { widgetIds } from '../model'
import {
  type Approvement,
  type ApprovementType,
  type Chips,
  type ChipsType,
  type FieldValidation,
  getDynamicSchema,
  getFieldsProgress,
  type Progress,
  type ProgressField,
  type ProgressType
} from './model'
import { useControlledForm, useFieldsProgress } from '$/shared/hooks'
import { Button, type CheckedState, Heading, Icon, ProgressBar, Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { ZodUtils } from '$/shared/validation'
import { type FieldElement, FieldMapper } from '$/widgets/fieldMapper'
import { QueryClientProvider } from '$/widgets/queryClientProvider'

type SubmitProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  submitCallback: (values: unknown) => void
  children: string
}

type ChipsClasses = {
  root?: string
  icon?: string
}
type ApprovementClasses = {
  checkbox?: React.ComponentProps<typeof Uncontrolled.CheckboxBase>['classes']
  content?: string
}

type DynamicFormClasses = {
  root?: string
  title?: string
  fields?: string
  form?: string
  chips?: ChipsClasses
  approvement?: ApprovementClasses
  progressBar?: React.ComponentProps<typeof ProgressBar>['classes']
  submit?: string
}

export type DynamicFormProps<AType extends ApprovementType, CType extends ChipsType, PType extends ProgressType> = {
  fields: FieldElement<any, any, { validation: FieldValidation; progress: ProgressField }>[]
  title: string
  progress: Progress<PType>
  approvement: Approvement<AType>
  chips: Chips<CType>
  submitProps?: SubmitProps
  classes?: DynamicFormClasses
}

const withApprovement = <Type extends ApprovementType>(
  approvement: Approvement<Type>,
  checked: CheckedState,
  onCheckedChange: (checked: CheckedState) => void,
  classes?: ApprovementClasses
): React.ReactNode => {
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

export const DynamicForm = <AType extends ApprovementType, CType extends ChipsType, PType extends ProgressType>({
  fields,
  title,
  progress,
  approvement,
  chips,
  submitProps,
  classes
}: DynamicFormProps<AType, CType, PType>) => {
  const { submitCallback, ...buttonProps } = submitProps || {}

  const [checked, onCheckedChange] = useState<CheckedState>(false)

  const schema = getDynamicSchema(fields)

  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues: ZodUtils.getZodDefaults(schema),
    mode: 'onBlur'
  })

  const fieldsProgress = getFieldsProgress(progress, fields)

  const formattedProgress = useFieldsProgress({ control, fields: fieldsProgress || [], schema })

  const onSubmit: SubmitHandler<TypeOf<typeof schema>> = (values) => {
    if (submitCallback) submitCallback(values)

    console.warn(values)
  }

  return (
    <QueryClientProvider>
      <div
        id={widgetIds.form}
        data-test-id={widgetIds.form}
        className={cn(
          'border-warm-grey-200 px-4 desktop:gap-8 desktop:p-14',
          'relative flex flex-col gap-6 rounded-sm border py-8',
          classes?.root
        )}
      >
        {chips.enabled && (
          <div
            className={cn(
              'desk-body-regular-l flex items-center gap-x-2 rounded-sm desktop:absolute',
              'bg-color-blue-grey-100 px-2 py-1 text-color-tetriary',
              'right-4 top-4 w-max',
              classes?.chips?.root
            )}
          >
            {chips.image && <Icon name={chips.image} className={cn('size-4', classes?.chips?.icon)} />}
            {chips.content}
          </div>
        )}
        <Heading as='h3' className={classes?.title}>
          {title}
        </Heading>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn('flex w-[328px] flex-col gap-y-6', 'desktop:w-[524px] desktop:gap-y-8', classes?.form)}
        >
          {progress.enabled && (
            <ProgressBar
              progress={formattedProgress}
              topContent={<HTMLRenderer html={progress.title} />}
              bottomContent={<HTMLRenderer html={progress.subtitle} />}
              maxPercent={progress.maxPercent}
              classes={classes?.progressBar}
            />
          )}
          <FieldMapper control={control as unknown as Control} fields={fields} />
          <div className='mob-body-regular-m flex flex-col items-center justify-center gap-4 desktop:flex-row desktop:justify-between'>
            {withApprovement(approvement, checked, onCheckedChange, classes?.approvement)}
            <Button
              {...buttonProps}
              type='submit'
              disabled={approvement.type === 'checkbox' ? !checked : false}
              className={cn(
                'w-full whitespace-nowrap',
                {
                  'w-full desktop:w-[216px]': Boolean(approvement)
                },
                classes?.submit
              )}
            >
              Отправить форму
            </Button>
          </div>
        </form>
      </div>
    </QueryClientProvider>
  )
}
