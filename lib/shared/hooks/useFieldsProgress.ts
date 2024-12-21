'use client'

import { useEffect, useState } from 'react'
import { type Control, type FieldValues, type Path, useWatch } from 'react-hook-form'
import { type ZodObject, type ZodRawShape } from 'zod'

export interface ISubscribedField<T extends FieldValues> {
  name: Path<T>
  progress: number
  maxPercent: number
}

type TUseFieldsProgress<T extends FieldValues, S extends ZodRawShape> = {
  control: Control<T>
  schema: ZodObject<S>
  fields: ISubscribedField<T>[]
}

const formatProgress = <T extends FieldValues>(subscribeFields: ISubscribedField<T>[]) => {
  return Object.values(subscribeFields)?.reduce((acc, value) => {
    return acc + value?.progress
  }, 0)
}

export const useFieldsProgress = <T extends FieldValues, S extends ZodRawShape>({
  control,
  schema,
  fields
}: TUseFieldsProgress<T, S>): number => {
  const [subscribeFields, setSubscribeFields] = useState<ISubscribedField<T>[]>(fields)
  const watchedFields = useWatch({ control })

  useEffect(() => {
    setSubscribeFields((prevFields) =>
      prevFields?.map((field) => {
        const fieldSchema = schema.shape[field.name]
        const result = fieldSchema.safeParse(watchedFields[field.name])
        if (result.success && watchedFields[field.name] && watchedFields[field.name] !== '') {
          return { ...field, progress: field.maxPercent }
        } else {
          return { ...field, progress: 0 }
        }
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedFields])

  return formatProgress(subscribeFields)
}
