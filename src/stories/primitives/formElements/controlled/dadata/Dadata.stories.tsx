'use docs'

import { type FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { DADATA_BASE_CACHE_URL, DADATA_BASE_CONSTANTS_URL } from '@/configs/api'
import { useControlledForm } from '$/shared/hooks'
import { Controlled } from '$/shared/ui'

const schema = z.object({
  fio: z.string().min(1),
  country: z.string().min(1),
  auto: z.string().min(1),
  organization: z.string().min(1),
  address: z.string().min(1)
})

type Schema = z.TypeOf<typeof schema>

const Form = () => {
  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues: {
      fio: '',
      country: '',
      auto: '',
      organization: '',
      address: ''
    }
  })

  const onSubmit = (values: Schema) => {
    toast.success(JSON.stringify(values))
  }

  const onError = (errors: FieldErrors<Schema>) => {
    toast.error(JSON.stringify(errors))
  }

  return (
    <form className='flex w-[500px] flex-col gap-4' onSubmit={handleSubmit(onSubmit, onError)}>
      <Controlled.DadataOrganization
        control={control}
        dadataBaseUrl={DADATA_BASE_CACHE_URL as string}
        label='Organization'
        name='organization'
      />
      <Controlled.DadataAddress
        control={control}
        dadataBaseUrl={DADATA_BASE_CACHE_URL as string}
        label='Address'
        name='address'
      />
      <Controlled.DadataAuto control={control} dadataBaseUrl={DADATA_BASE_CONSTANTS_URL as string} label='Auto' name='auto' />
      <Controlled.DadataFio control={control} dadataBaseUrl={DADATA_BASE_CACHE_URL as string} label='ФИО' name='fio' />
      <Controlled.DadataCountry
        control={control}
        dadataBaseUrl={DADATA_BASE_CONSTANTS_URL as string}
        label='Страна'
        name='country'
      />
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/Dadata',
  component: Controlled.DadataFio,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Dadata'
  }
} satisfies Meta<typeof Controlled.DadataFio>

export default meta

type Story = StoryObj<typeof Controlled.DadataFio>

export const Base: Story = {
  render: () => <Form />
}
