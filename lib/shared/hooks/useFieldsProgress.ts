'use client'

import { useEffect, useRef, useState } from 'react'
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
  defaultProgress?: number
  maxPercent?: number
}

const formatProgress = <T extends FieldValues>(subscribeFields: ISubscribedField<T>[], defaultProgress: number) => {
  return Object.values(subscribeFields)?.reduce((acc, value) => {
    return acc + value?.progress
  }, defaultProgress)
}

export const useFieldsProgress = <T extends FieldValues, S extends ZodRawShape>({
  control,
  schema,
  fields,
  defaultProgress = 0,
  maxPercent = 100
}: TUseFieldsProgress<T, S>): number => {
  const currentProgress = useRef<number>(defaultProgress)
  const [subscribeFields, setSubscribeFields] = useState<ISubscribedField<T>[]>(fields)
  const watchedFields = useWatch({ control })

  useEffect(() => {
    setSubscribeFields((prevFields) =>
      prevFields?.map((field) => {
        if (currentProgress.current + field.maxPercent > maxPercent) return field

        const fieldSchema = schema.shape[field.name]
        const result = fieldSchema.safeParse(watchedFields[field.name])
        if (result.success && watchedFields[field.name] && watchedFields[field.name] !== '') {
          currentProgress.current += field.maxPercent

          return { ...field, progress: field.maxPercent }
        } else {
          return { ...field, progress: 0 }
        }
      })
    )

    return () => {
      currentProgress.current = defaultProgress
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedFields])

  return formatProgress(subscribeFields, defaultProgress)
}
