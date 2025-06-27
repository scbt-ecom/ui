'use docs'

import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import z from 'zod'
import { HookForm } from '@/stories/primitives/formElements/controlled/utils'
import { AutocompleteControl } from '$/shared/ui'

const schema = z.object({
  test: z.string().nullable().refine(Boolean)
})

type Schema = z.TypeOf<typeof schema>

type AutocompleteControlProps = React.ComponentPropsWithoutRef<typeof AutocompleteControl<Schema, string>>

const useQueryFn = (search: string, options?: Partial<UseQueryOptions<string[]>>) =>
  useQuery<string[]>({
    queryKey: [search],
    queryFn: async () => {
      return Array.from({ length: 20 }).map((_, index) => {
        return `Value ${index}`
      })
    },
    ...options
  })

const meta = {
  title: 'Form elements/controlled/AutocompleteControl',
  component: AutocompleteControl<Schema, string>,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Input',
    name: 'test'
  },
  render: (props) => (
    <HookForm<AutocompleteControlProps, Schema>
      {...props}
      schema={schema}
      defaultValues={{
        test: ''
      }}
      renderComponent={(componentProps: AutocompleteControlProps) => <AutocompleteControl {...componentProps} />}
    />
  )
} satisfies Meta<typeof AutocompleteControl<Schema, string>>

export default meta

type Story = StoryObj<typeof AutocompleteControl<Schema, string>>

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
  args: {
    label: 'Input',
    formatter: (item) => ({
      value: item,
      label: item
    }),
    query: useQueryFn
  }
}

export const WithExternalHandlers: Story = {
  args: {
    ...Base.args,
    externalHandlers: {
      onClick: fn(() => {
        toast('handled external onClick')
      }),
      onChange: fn(() => {
        toast('handled external onChange')
      }),
      onBlur: fn(() => {
        toast('handled external onBlur')
      }),
      onFocus: fn(() => {
        toast('handled external onFocus')
      })
    }
  }
}
