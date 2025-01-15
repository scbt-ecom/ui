'use docs'

import { useState } from 'react'
import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import z from 'zod'
import { useControlledForm } from '$/shared/hooks'
import { Button, Controlled, type SelectItemOption } from '$/shared/ui'

const generateOptions = (length: number): SelectItemOption[] =>
  Array.from({ length }).map((_, index) => ({
    value: `value_${index + 1}`,
    label: `Value ${index + 1}`
  }))

const schema = z.object({
  test: z.string().nullable().refine(Boolean)
})

type Schema = z.TypeOf<typeof schema>

type SelectControlProps = React.ComponentPropsWithoutRef<typeof Controlled.SelectControl<Schema>>

type FormProps = Omit<SelectControlProps, 'control'> & {
  schema: z.ZodSchema
  defaultValues: Schema
  renderComponent: (props: SelectControlProps) => React.JSX.Element
}

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
  title: 'CONTROLLED/SelectControl',
  component: Controlled.SelectControl<Schema>,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story, context) => {
      const { args } = context

      const [optionsCount, setOptionsCount] = useState<number>(10)

      return (
        <div className='flex w-[800px] flex-col gap-y-2'>
          <label>
            Количество элементов
            <select
              className='ml-1 rounded-sm border'
              value={optionsCount}
              onChange={({ target }) => setOptionsCount(Number(target.value))}
            >
              <option value={10}>10</option>
              <option value={100}>100</option>
              <option value={250}>250</option>
              <option value={500}>500</option>
              <option value={1000}>1000</option>
              <option value={10000}>10000</option>
            </select>
          </label>
          <Story
            {...context}
            args={{
              ...args,
              options: generateOptions(optionsCount)
            }}
          />
        </div>
      )
    }
  ],
  args: {
    label: 'Input',
    options: generateOptions(10),
    name: 'test'
  }
} satisfies Meta<typeof Controlled.SelectControl<Schema>>

export default meta

type Story = StoryObj<typeof Controlled.SelectControl<Schema>>

/**
 * \`SelectControl\` компонент, управляемый библиотекой \`react-hook-form\`\n
 *
 * | Props        | Description                         | Type                             | Required  |
 * | ------------ | ----------------------------------- | -------------------------------- | --------- |
 * | \`control\`  | Контрол объект для управления полем | \`Control\<TFieldValues\>\`      | \`true\`  |
 * | \`name\`     | Имя поля                            | \`string\`                       | \`true\`  |
 * | \`classes\`  | Дополнительные стили компонента     | \`SelectControlClasses\`         | \`false\` |
 * | \`helperText\` | Дополнительный текст                | \`string\`                       | \`false\` |
 *
 * Остальные свойства наследуются от [Select](?path=/docs/base-selectbase--docs)\n
 */
export const Base: Story = {
  render: (props) => (
    <Form
      {...props}
      schema={schema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps) => <Controlled.SelectControl<Schema> {...componentProps} />}
    />
  )
}

const multiSchema = z.object({
  test: z.array(z.string().nullable().refine(Boolean))
})
export const WithMulti: Story = {
  args: {
    isMulti: true
  },
  render: (props) => (
    <Form
      {...props}
      schema={multiSchema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps) => <Controlled.SelectControl<Schema> {...componentProps} />}
    />
  )
}

export const WithSearchable: Story = {
  args: {
    isSearchable: true
  },
  render: (props) => (
    <Form
      {...props}
      schema={schema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps) => <Controlled.SelectControl<Schema> {...componentProps} />}
    />
  )
}

export const Virtual: Story = {
  args: {
    virtual: true
  },
  render: (props) => (
    <Form
      {...props}
      schema={schema}
      defaultValues={{ test: null }}
      renderComponent={(componentProps) => <Controlled.SelectControl<Schema> {...componentProps} />}
    />
  )
}
