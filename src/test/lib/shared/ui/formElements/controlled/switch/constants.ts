import { object, z } from 'zod'

export const baseSchema = object({
  field: z.boolean()
})

export const switchDefaultProps = {
  name: 'Switch',
  children: 'Switch',
  'data-test-id': 'switch'
}
