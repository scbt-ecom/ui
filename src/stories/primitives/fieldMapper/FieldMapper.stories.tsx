'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { HookForm } from '../formElements/controlled/utils'
import { defaultValues, fields, type Schema, schema } from './constants'
import { FieldMapper } from '$/widgets'

const meta = {
  title: 'Form elements/widgets/FieldMapper',
  component: FieldMapper,
  parameters: {
    layout: 'centered'
  },
  args: {},
  render: (props) => (
    <HookForm<React.ComponentPropsWithoutRef<typeof FieldMapper>, Schema>
      {...props}
      schema={schema}
      defaultValues={defaultValues}
      renderComponent={(componentProps) => <FieldMapper {...componentProps} fields={fields} />}
    />
  )
} satisfies Meta<typeof FieldMapper>

export default meta

type Story = StoryObj<typeof FieldMapper>

export const Base: Story = {}
