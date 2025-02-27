import { useState } from 'react'
import { type Control, type SubmitHandler } from 'react-hook-form'
import { type TypeOf } from 'zod'
import {
  type Approvement,
  type ApprovementType,
  type Chips,
  type ChipsType,
  type FieldValidation,
  getDynamicSchema
} from './model'
import { useControlledForm } from '$/shared/hooks'
import { Button, type CheckedState, Heading, Icon, Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { ZodUtils } from '$/shared/validation'
import { type FieldElement, FieldMapper } from '$/widgets/fieldMapper'

export type DynamicFormProps<AType extends ApprovementType, CType extends ChipsType> = {
  fields: FieldElement<any, any, { validation: FieldValidation }>[]
  title: string
  progress: []
  approvement: Approvement<AType>
  chips: Chips<CType>
  submitContent: string
}

const withApprovement = <Type extends ApprovementType>(
  approvement: Approvement<Type>,
  checked: CheckedState,
  onCheckedChange: (checked: CheckedState) => void
): React.ReactNode => {
  if (approvement.type === 'off') return null

  if (approvement.type === 'text') {
    return approvement.message
  }

  return (
    <label
      className={cn(
        'mob-body-regular-s text-color-dark',
        'desktop:desk-body-regular-m desktop:gap-x-4',
        'flex items-center justify-items-start gap-x-3'
      )}
    >
      <Uncontrolled.CheckboxBase checked={checked} onCheckedChange={onCheckedChange} />
      {approvement.content}
    </label>
  )
}

export const DynamicForm = <AType extends ApprovementType, CType extends ChipsType>({
  fields,
  title,
  // progress, TODO: its need later
  approvement,
  chips,
  submitContent = 'Submit'
}: DynamicFormProps<AType, CType>) => {
  const [checked, onCheckedChange] = useState<CheckedState>(false)

  const schema = getDynamicSchema(fields)

  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues: ZodUtils.getZodDefaults(schema)
  })

  const onSubmit: SubmitHandler<TypeOf<typeof schema>> = (values) => {
    console.warn(values)
  }

  return (
    <div className='relative flex flex-col gap-6 rounded-sm border border-warm-grey-200 px-4 py-8 desktop:gap-8 desktop:p-14'>
      {chips.enabled && (
        <div
          className={cn(
            'desk-body-regular-l flex items-center gap-x-2 rounded-sm desktop:absolute',
            'bg-color-blue-grey-100 px-2 py-1 text-color-tetriary',
            'right-4 top-4 w-max'
          )}
        >
          {chips.image && <Icon name={chips.image} className='size-4' />}
          {chips.content}
        </div>
      )}
      <Heading as='h3'>{title}</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className='flex w-[328px] flex-col gap-y-6 desktop:w-[524px] desktop:gap-y-8'>
        <FieldMapper control={control as unknown as Control} fields={fields} />
        <div className='mob-body-regular-m flex flex-col items-center justify-center gap-4 desktop:flex-row desktop:justify-between'>
          {withApprovement(approvement, checked, onCheckedChange)}
          <Button
            type='submit'
            disabled={approvement.type === 'checkbox' ? !checked : false}
            className={cn('w-full whitespace-nowrap', {
              'w-full desktop:w-[216px]': Boolean(approvement)
            })}
          >
            {submitContent}
          </Button>
        </div>
      </form>
    </div>
  )
}
