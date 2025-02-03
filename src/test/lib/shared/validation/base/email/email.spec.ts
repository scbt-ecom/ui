import * as vi from 'vitest'
import type { TypeOf } from 'zod'
import { optionalSchema, requiredSchema } from './constants'

type RequiredSchema = {
  field: string
}

type OptionalSchema = {
  field?: string
}

vi.describe('Test cases for number validation schema', () => {
  vi.it('Should validate required field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const validRequiredField = {
      field: 'example@gmail.com'
    }
    const invalidRequiredField = {
      field: 'invalid'
    }

    const { data } = requiredSchema.safeParse(validRequiredField)
    const { error } = requiredSchema.safeParse(invalidRequiredField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate optional field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof optionalSchema>>().toEqualTypeOf<OptionalSchema>()

    const validOptionalField = {}
    const invalidOptionalField = {
      field: 'invalid'
    }

    const { data } = optionalSchema.safeParse(validOptionalField)
    const { error } = optionalSchema.safeParse(invalidOptionalField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })
})
