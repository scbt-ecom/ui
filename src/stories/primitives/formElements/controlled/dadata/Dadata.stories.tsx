'use docs'

import { type FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { DADATA_BASE_CACHE_URL, DADATA_BASE_CONSTANTS_URL } from '@/configs/api'
import { useControlledForm } from '$/shared/hooks'
import { DadataAddress, DadataAuto, DadataCountry, DadataFio, DadataOrganization } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'

const schema = z.object({
  fio: zodValidators.dadata.getFioSchema(),
  country: zodValidators.base.getStringSchema(),
  auto: zodValidators.base.getStringSchema(),
  organization: zodValidators.base.getStringSchema(),
  address: zodValidators.base.getStringSchema()
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
    <form className='mx-auto flex w-[500px] flex-col gap-4' onSubmit={handleSubmit(onSubmit, onError)}>
      <DadataOrganization
        control={control}
        strategy='select-first'
        dadataBaseUrl={DADATA_BASE_CACHE_URL as string}
        label='Organization'
        name='organization'
        externalHandlers={{
          changeHandler: console.log
        }}
      />
      <DadataAddress
        control={control}
        dadataBaseUrl={DADATA_BASE_CACHE_URL as string}
        label='Address'
        name='address'
        externalHandlers={{
          changeHandler: console.log
        }}
      />
      <DadataAuto
        control={control}
        dadataBaseUrl={DADATA_BASE_CONSTANTS_URL as string}
        label='Auto'
        name='auto'
        externalHandlers={{
          changeHandler: console.log
        }}
      />
      <DadataFio
        control={control}
        dadataBaseUrl={DADATA_BASE_CACHE_URL as string}
        label='ФИО'
        name='fio'
        externalHandlers={{
          changeHandler: console.log
        }}
      />
      <DadataCountry
        control={control}
        dadataBaseUrl={DADATA_BASE_CONSTANTS_URL as string}
        label='Страна'
        name='country'
        externalHandlers={{
          changeHandler: console.log
        }}
      />
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'Form elements/controlled/Dadata',
  component: DadataFio,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Dadata'
  }
} satisfies Meta<typeof DadataFio>

export default meta

type Story = StoryObj<typeof DadataFio>

export const Base: Story = {
  render: () => <Form />
}
