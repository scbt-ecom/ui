import * as vi from 'vitest'
import type { TypeOf } from 'zod'
import { maxSchema, minMaxSchema, minSchema, optionalSchema, requiredSchema } from './constants'

type RequiredSchema = {
  field: number
}

type OptionalSchema = {
  field?: number
}

vi.describe('Test cases for number validation schema', () => {
  vi.it('Should validate required field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const validRequiredField = {
      field: 10
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
      field: 'testField'
    }

    const { data } = optionalSchema.safeParse(validOptionalField)
    const { error } = optionalSchema.safeParse(invalidOptionalField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate min field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof minSchema>>().toEqualTypeOf<RequiredSchema>()

    const validMinField = {
      field: 10
    }
    const invalidMinField = {
      field: 0
    }

    const { data } = minSchema.safeParse(validMinField)
    const { error } = minSchema.safeParse(invalidMinField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate max field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof maxSchema>>().toEqualTypeOf<RequiredSchema>()

    const validMaxField = {
      field: 6
    }
    const invalidMaxField = {
      field: 16
    }

    const { data } = maxSchema.safeParse(validMaxField)
    const { error } = maxSchema.safeParse(invalidMaxField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate min-max field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof minMaxSchema>>().toEqualTypeOf<RequiredSchema>()

    const validMinField = {
      field: 5
    }
    const invalidMinField = {
      field: 0
    }

    const { data } = minMaxSchema.safeParse(validMinField)
    const { error } = minMaxSchema.safeParse(invalidMinField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })
})
