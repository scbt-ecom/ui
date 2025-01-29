import { object, z } from 'zod'

export const checkboxDefaultProps = {
  name: 'field',
  'data-test-id': 'checkbox',
  children: 'Checkbox'
}

export const optionalSchema = object({
  field: z.boolean().optional()
})

export const baseSchema = object({
  field: z.boolean()
})
