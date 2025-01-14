'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import z from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Button, Controlled } from '$/shared/ui'

const schema = z.object({
  test: z.string().nullable().refine(Boolean)
})

type Schema = z.TypeOf<typeof schema>

type AutocompleteControlProps = React.ComponentPropsWithoutRef<typeof Controlled.AutocompleteControl<Schema, string>>

type FormProps = Omit<AutocompleteControlProps, 'control'> & {
  schema: z.ZodSchema
  defaultValues: Schema
  renderComponent: (props: AutocompleteControlProps) => React.JSX.Element
}

const useQueryFn = (search: string, options?: Partial<UseQueryOptions<string[]>>) =>
  useQuery<string[]>({
    queryKey: [search],
    queryFn: async () => {
      return ['Some result']
    },
    ...options
  })

const Form = ({ schema, defaultValues, renderComponent, ...props }: FormProps) => {
  const { control, handleSubmit } = useControlledForm({
    schema,
    defaultValues
  })

  const onSubmit = (values: Schema) => {
    toast.success(JSON.stringify(values))
  }

  const onError = (errors: any) => {
    toast.error(JSON.stringify(errors))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {renderComponent({ ...props, control })}
      <Button type='submit'>Submit</Button>
    </form>
  )
}

const meta = {
  title: 'CONTROLLED/AutocompleteControl',
  component: Controlled.AutocompleteControl<Schema, string>,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    name: 'test'
  }
} satisfies Meta<typeof Controlled.AutocompleteControl<Schema, string>>

export default meta

type Story = StoryObj<typeof Controlled.AutocompleteControl<Schema, string>>

/**
 * \`AutocompleteControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                             | Required  |
 * | ------------ | ----------------------------------- | -------------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`      | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                       | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`SelectControlClasses\`         | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                     | \`false\` |
 * Остальные свойства наследуются от [AutocompleteBase](?path=/docs/base-autocompletebase--docs)
 */
export const Base: Story = {
  render: (props) => (
    <Form
      {...props}
      schema={schema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps) => (
        <Controlled.AutocompleteControl<Schema, string>
          {...componentProps}
          label='Autocomplete Base'
          formatter={(item) => ({
            value: item,
            label: item
          })}
          query={useQueryFn}
        />
      )}
    />
  )
}
