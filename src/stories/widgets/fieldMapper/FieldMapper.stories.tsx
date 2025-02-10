'use docs'

import type { Meta, StoryObj } from '@storybook/react'
import { HookForm } from '../../primitives/formElements/controlled/utils'
import { defaultValues, fields, type Schema, schema } from './constants'
import { FieldMapper } from '$/widgets'

const meta = {
  title: 'WIDGETS/FieldMapper',
  component: FieldMapper,
  parameters: {
    layout: 'centered'
  },
  args: {
    fields
  },
  render: (props) => (
    <HookForm<React.ComponentPropsWithoutRef<typeof FieldMapper>, Schema>
      {...props}
      schema={schema}
      defaultValues={defaultValues}
      renderComponent={(componentProps) => <FieldMapper {...componentProps} />}
    />
  )
} satisfies Meta<typeof FieldMapper>

export default meta

type Story = StoryObj<typeof FieldMapper>

export const Base: Story = {}
