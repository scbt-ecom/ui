'use docs'

import { useState } from 'react'
import { type FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { useGetFioSuggestQuery } from '../../uncontrolled/autocomplete/Autocomplete.utils'
import { useControlledForm } from '$/shared/hooks'
import { Controlled, type SelectItemOption } from '$/shared/ui'

const schema = z.object({
  test: z.object({
    value: z.string().min(1),
    label: z.string().min(1)
  })
})

type Schema = z.TypeOf<typeof schema>

const Form = () => {
  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues: {
      test: {
        value: '',
        label: ''
      }
    }
  })
  const [value, setValue] = useState<SelectItemOption | undefined>()

  const onSubmit = (values: Schema) => {
    toast.success(JSON.stringify(values))
  }

  const onError = (errors: FieldErrors<Schema>) => {
    toast.error(JSON.stringify(errors))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Controlled.AutocompleteControl
        query={useGetFioSuggestQuery}
        queryOptions={{
          placeholderData: (prev) => prev
        }}
        formatter={(item) => ({
          value: item.value || '',
          label: item.value || ''
        })}
        value={value}
        onChange={setValue as any}
        control={control}
        name='test'
        label='Autocomplete'
        size='lg'
      />
      <button>Submit</button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/AutocompleteControl',
  component: Controlled.AutocompleteControl,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Autocomplete'
  }
} satisfies Meta<typeof Controlled.AutocompleteControl>

export default meta

type Story = StoryObj<typeof Controlled.AutocompleteControl>

export const Base: Story = {
  render: () => <Form />
}
