/* eslint-disable no-console */
import { FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { VITE_DADATA_BASE_CACHE_URL, VITE_DADATA_BASE_CONSTANTS_URL } from '$/shared/constants'
import { useControlledForm } from '$/shared/hooks'
import { Button, ResponsiveContainer } from '$/shared/ui'
import {
  CheckboxControl,
  ComboboxControl,
  DadataAddress,
  DadataAuto,
  DadataCountry,
  DadataFio,
  DadataOrganization,
  InputControl,
  InputControlMask,
  InputSliderControl,
  SwitchControl,
  TextareaControl
} from '$/shared/ui/formElements'
import { VALIDATION_MESSAGES, zodDadataFioValidate } from '$/shared/validation'

const testSchema = z.object({
  sliderInput: z.number().optional(),
  comboboxSelect: z.number(),
  comboboxSelectMulti: z.array(z.number()),
  commonInput: z
    .string({ required_error: VALIDATION_MESSAGES.REQUIRED })
    .min(6, { message: `${VALIDATION_MESSAGES.MIN_LENGTH} 6` }),
  maskInput: z
    .string({ required_error: VALIDATION_MESSAGES.REQUIRED })
    .length(4, { message: `${VALIDATION_MESSAGES.FIX_LENGTH} 4` }),
  checkboxInput: z.literal<boolean>(true, { errorMap: () => ({ message: VALIDATION_MESSAGES.REQUIRED }) }),
  switchInput: z.literal<boolean>(true, { errorMap: () => ({ message: VALIDATION_MESSAGES.REQUIRED }) }),
  textareaInput: z
    .string({ required_error: VALIDATION_MESSAGES.REQUIRED })
    .min(6, { message: `${VALIDATION_MESSAGES.MIN_LENGTH} 6` }),
  dadataFio: zodDadataFioValidate,
  dadataAddress: z
    .string({ required_error: VALIDATION_MESSAGES.REQUIRED })
    .min(6, { message: `${VALIDATION_MESSAGES.MIN_LENGTH} 6` }),
  dadataAuto: z
    .string({ required_error: VALIDATION_MESSAGES.REQUIRED })
    .min(6, { message: `${VALIDATION_MESSAGES.MIN_LENGTH} 6` }),
  dadataCountry: z
    .string({ required_error: VALIDATION_MESSAGES.REQUIRED })
    .min(6, { message: `${VALIDATION_MESSAGES.MIN_LENGTH} 6` }),
  dadataOrganization: z
    .string({ required_error: VALIDATION_MESSAGES.REQUIRED })
    .min(6, { message: `${VALIDATION_MESSAGES.MIN_LENGTH} 6` })
})

export type TFieldsTestSchema = z.infer<typeof testSchema>

export const App = () => {
  const formMethods = useControlledForm({
    mode: 'onBlur',
    schema: testSchema
  })

  const onSubmit = (data: TFieldsTestSchema) => {
    console.log(data, '@data')
  }

  return (
    <div className='my-40 flex flex-col gap-20'>
      <ResponsiveContainer>
        <h2 className='desk-title-bold-s text-color-tetriary'>
          use <span className='desk-title-bold-s text-color-primary-default'> npm run start </span> for run storybook
        </h2>
      </ResponsiveContainer>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className='flex items-center justify-center'>
        <ResponsiveContainer>
          <FormProvider {...formMethods}>
            <div className='mb-6 flex flex-col gap-5'>
              <InputSliderControl
                control={formMethods.control}
                name='sliderInput'
                label='sliderInput'
                min={30_000}
                max={5_000_000}
                variant='credit'
                leftText='1 год'
                rightText='12 лет'
              />
              <ComboboxControl
                control={formMethods.control}
                name='comboboxSelect'
                label='Выберите значение'
                options={[
                  { label: '1', value: 1 },
                  { label: '2', value: 2 },
                  { label: '3', value: 3 }
                ]}
              />
              <ComboboxControl
                control={formMethods.control}
                name='comboboxSelectMulti'
                label='Выберите значения'
                isMulti
                options={[
                  { label: '1', value: 1 },
                  { label: '2', value: 2 },
                  { label: '3', value: 3 }
                ]}
              />
              <InputControl control={formMethods.control} name='commonInput' label='Введите текст' />
              <TextareaControl control={formMethods.control} name='textareaInput' label='Введите текст' badge='+25%' />
              <InputControlMask format='####' control={formMethods.control} name='maskInput' label='Введите код' />
              <CheckboxControl control={formMethods.control} name='checkboxInput' label='Обработка на согласие данных' />
              <SwitchControl control={formMethods.control} name='switchInput' label='Включить индексацию' />
              <DadataFio
                control={formMethods.control}
                name='dadataFio'
                label='Введите ФИО'
                dadataBaseUrl={VITE_DADATA_BASE_CACHE_URL}
                badge='+25%'
              />
              <DadataAddress
                control={formMethods.control}
                name='dadataAddress'
                label='Введите адрес'
                dadataBaseUrl={VITE_DADATA_BASE_CACHE_URL}
                badge='+25%'
              />
              <DadataAuto
                control={formMethods.control}
                name='dadataAuto'
                label='Введите авто'
                dadataBaseUrl={VITE_DADATA_BASE_CONSTANTS_URL}
                badge='+25%'
              />
              <DadataCountry
                control={formMethods.control}
                name='dadataCountry'
                label='Введите страну'
                dadataBaseUrl={VITE_DADATA_BASE_CONSTANTS_URL}
                badge='+25%'
              />
              <DadataOrganization
                control={formMethods.control}
                name='dadataOrganization'
                label='Введите организацию'
                dadataBaseUrl={VITE_DADATA_BASE_CACHE_URL}
                badge='+25%'
              />
            </div>
            <Button type='submit'>Отправить</Button>
          </FormProvider>
        </ResponsiveContainer>
      </form>
    </div>
  )
}
