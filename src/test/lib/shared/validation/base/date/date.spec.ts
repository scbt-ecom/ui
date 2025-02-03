import * as vi from 'vitest'
import type { TypeOf } from 'zod'
import { optionalSchema, patternSchema, requiredSchema } from './constants'

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
      field: new Date().toISOString()
    }
    const invalidRequiredField = {
      field: 'invalid'
    }

    const { data } = requiredSchema.safeParse(validRequiredField)
    const { error } = requiredSchema.safeParse(invalidRequiredField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should not validate optional field correctly', () => {
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

  vi.it('Should not validate readable date field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof patternSchema>>().toEqualTypeOf<RequiredSchema>()

    const validOptionalField = {
      field: '10.10.2024'
    }
    const invalidOptionalField = {
      field: '50.50.5050'
    }

    const { data } = patternSchema.safeParse(validOptionalField)
    const { error } = patternSchema.safeParse(invalidOptionalField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })
})
