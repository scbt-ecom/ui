import * as vi from 'vitest'
import type { TypeOf } from 'zod'
import { optionalSchema, requiredSchema } from './constants'

type RequiredSchema = {
  field: string
}

type OptionalSchema = {
  field?: string
}

vi.describe('Test cases for url validation schema', () => {
  vi.it('Should validate required field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const validField = {
      field: 'https://example.com'
    }
    const invalidField = {
      field: 'https://.com'
    }

    const { success: validSuccess } = requiredSchema.safeParse(validField)
    const { success: invalidSuccess } = requiredSchema.safeParse(invalidField)

    vi.expect(validSuccess).toBeTruthy()
    vi.expect(invalidSuccess).toBeFalsy()
  })

  vi.it('Should validate optional field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof optionalSchema>>().toEqualTypeOf<OptionalSchema>()

    const validField = {}
    const invalidField = {
      field: 'abcdsf://.com'
    }

    const { success: validSuccess } = optionalSchema.safeParse(validField)
    const { success: invalidSuccess } = optionalSchema.safeParse(invalidField)

    vi.expect(validSuccess).toBeTruthy()
    vi.expect(invalidSuccess).toBeFalsy()
  })

  vi.it('Should validate url without protocol correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const validField = {
      field: 'example.com'
    }
    const invalidField = {
      field: '.com'
    }

    const { success: validSuccess } = requiredSchema.safeParse(validField)
    const { success: invalidSuccess } = requiredSchema.safeParse(invalidField)

    vi.expect(validSuccess).toBeTruthy()
    vi.expect(invalidSuccess).toBeFalsy()
  })

  vi.it('Should validate url with path correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const validField = {
      field: 'https://example.com/path/path/path'
    }
    const invalidField = {
      field: '.com/path/path/path'
    }

    const { success: validSuccess } = requiredSchema.safeParse(validField)
    const { success: invalidSuccess } = requiredSchema.safeParse(invalidField)

    vi.expect(validSuccess).toBeTruthy()
    vi.expect(invalidSuccess).toBeFalsy()
  })

  vi.it('Should validate url with query params correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const validField = {
      field: 'https://example.com/?param1=value1&param2=value2'
    }
    const invalidField = {
      field: '.com/?param1=value1&param2=value2'
    }

    const { success: validSuccess } = requiredSchema.safeParse(validField)
    const { success: invalidSuccess } = requiredSchema.safeParse(invalidField)

    vi.expect(validSuccess).toBeTruthy()
    vi.expect(invalidSuccess).toBeFalsy()
  })
})
