'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DADATA_BASE_CACHE_URL } from '@/configs/api'
import { useDadataQuery } from '@/stories/primitives/formElements/uncontrolled/autocomplete/Autocomplete.utils'
import { Uncontrolled } from '$/shared/ui'

const queryClient = new QueryClient()

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

// TODO: Попробовать сделать авто генерацию таблицы пропсов
/**
 * \`Select\` компонент для выбора значений из выпадающего списка\n
 *
 * | Props                    | Type                                                              | Description                                       | Required  |
 * | ------------------------ | ----------------------------------------------------------------- | ------------------------------------------------- | --------- |
 * | \`isSearchable\`         | \`boolean\`                                                       | Свойство управляющее поиском                      | \`false\` |
 * | \`label\`                | \`string\`                                                        | Отображаемый лейбл                                | \`true\`  |
 * | \`isMulti\`              | \`boolean\`                                                       | Поддержка множественного выбора                   | \`false\` |
 * | \`invalid\`              | \`boolean\`                                                       | Пометить поле как не валидное                     | \`false\` |
 * | \`displayValue\`         | \`(option: SelectItemOption) => string\`                          | Функция для управления отображаемым значением     | \`false\` |
 * | \`classes\`              | \`SelectClasses\`                                                 | Дополнительные стили каждого внутреннего элемента | \`false\` |
 * | \`options\`              | \`SelectItemOption[]\`                                            | Список отображаемых значений                      | \`true\`  |
 * | \`onChange\`             | \`(value: SelectItemOption | SelectItemOption[] | null) => void\` | Функция для изменения значения                    | \`false\` |
 * | \`attachmentProps\`      | \`DeepPartial<FieldAttachmentProps>\`                             | Свойства дополнительной иконки                    | \`false\` |
 *
 * Остальные свойства наследуются от [Headless UI](https://headlessui.com/react/combobox#component-api)
 */
export const Base: Story = {
  args: {},
  render: (props) => {
    return (
      <div>
        <Uncontrolled.AutocompleteBase {...props} dadataType='fio' query={useDadataQuery} dadataBaseUrl={DADATA_BASE_CACHE_URL} />
      </div>
    )
  }
}

export const WithBadge: Story = {
  args: {
    attachmentProps: {
      badge: '+25%'
    }
  }
}
