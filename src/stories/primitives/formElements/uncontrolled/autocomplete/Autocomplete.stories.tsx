'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider, useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { Uncontrolled } from '$/shared/ui'

const queryClient = new QueryClient()

const useQueryFn = (search: string, options?: Partial<UseQueryOptions<string[]>>) =>
  useQuery<string[]>({
    queryKey: [search],
    queryFn: async () => {
      return ['Some result']
    },
    ...options
  })

const meta = {
  title: 'BASE/AutocompleteBase',
  component: Uncontrolled.AutocompleteBase,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className='w-[800px]'>
          <Story />
        </div>
      </QueryClientProvider>
    )
  ],
  args: {
    label: 'Test selector'
  }
} satisfies Meta<typeof Uncontrolled.AutocompleteBase>

export default meta

type Story = StoryObj<typeof Uncontrolled.AutocompleteBase>

/**
 * \`Autocomplete\` компонент для выбора значений из выпадающего списка\n
 *
 * | Props                    | Type                                                                  | Description                                                       | Required  |
 * | ------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------- | --------- |
 * | \`query\`                | \`(query: string) => UseQueryResult<TData[]>\`                        | Запрос который должен получать options (пишем на tanstack/query)  | \`true\` |
 * | \`formatter\`            | \`(item: TData, index: number, array: TData[]) => SelectItemOption\`  | Позволяет форматировать данные                                    | \`true\` |
 * | \`returnValue\`          | \`(query: string) => UseQueryResult<TData[]>\`                        | Позволяет управлять выходным значением                            | \`false\` |
 * | \`value\`                | \`string\`                                                            | Значение инпута                                                   | \`false\` |
 * | \`onChange\`             | \`(value: string) => void\`                                           | Handler инпута                                                    | \`false\` |
 * Остальные свойства наследуются от [SelectBase](?path=/docs/base-selectbase--docs)
 */

export const Base: Story = {
  args: {},
  render: (props) => {
    return (
      <div className='flex flex-col gap-4 rounded-lg border border-blue-grey-700 p-5'>
        <Uncontrolled.AutocompleteBase
          {...props}
          label='Autocomplete Base'
          formatter={(item) => ({
            value: item,
            label: item
          })}
          query={useQueryFn}
        />
      </div>
    )
  }
}
