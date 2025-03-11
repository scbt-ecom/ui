import { type FieldPath, type FieldValues } from 'react-hook-form'
import type { Progress, ProgressField, ProgressType } from './types'
import { type ISubscribedField } from '$/shared/hooks'
import type { FieldElement } from '$/widgets/fieldMapper'

export const getFieldsProgress = <TFieldValues extends FieldValues, Type extends ProgressType>(
  progress: Progress<Type>,
  fields: FieldElement<any, any, { progress: ProgressField }>[]
) => {
  if (!progress.enabled) return null

  return fields.map<ISubscribedField<TFieldValues>>((field) => ({
    name: field.args.name as FieldPath<TFieldValues>,
    ...field.args.progress
  }))
}
