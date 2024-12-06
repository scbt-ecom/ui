import { type ReactNode, useEffect } from 'react'
import { type DefaultValues, type FieldErrors, type FieldValues, FormProvider } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { TypeOf, ZodTypeAny } from 'zod'
import { mockToastMessage } from '../model/mockData'
import { useControlledForm } from '$/shared/hooks'

interface IStorybookFormProviderProps<S extends ZodTypeAny> {
  children: ReactNode
  validationSchema: S
  defaultValues?: DefaultValues<TypeOf<S>>
}

export const StorybookFormProvider = <S extends ZodTypeAny>({
  children,
  validationSchema,
  defaultValues
}: IStorybookFormProviderProps<S>) => {
  const formMethods = useControlledForm({
    mode: 'onBlur',
    schema: validationSchema,
    defaultValues
  })

  const onSubmit = <T extends FieldValues>(values: T) => {
    toast.success(mockToastMessage(JSON.stringify(values)), {
      position: 'top-center',
      duration: 5000
    })
  }

  const onError = <T extends FieldValues>(errors: FieldErrors<T>) => {
    console.error(errors, '@errors')
  }

  useEffect(() => {
    formMethods.reset(defaultValues)
  }, [defaultValues, formMethods])

  return (
    <FormProvider {...formMethods}>
      <form className='flex w-full flex-col gap-5' onSubmit={formMethods.handleSubmit(onSubmit, onError)}>
        {children}
      </form>
    </FormProvider>
  )
}
