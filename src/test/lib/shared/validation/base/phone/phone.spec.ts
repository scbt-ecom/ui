import * as vi from 'vitest'
import type { TypeOf } from 'zod'
import { ignoredMaskSchema, optionalSchema, requiredSchema } from './constants'

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
      field: '+7 (999) 999-99-99'
    }
    const invalidRequiredField = {
      field: '+7 (123) 123-12-12'
    }

    const { data } = requiredSchema.safeParse(validRequiredField)
    const { error } = requiredSchema.safeParse(invalidRequiredField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(data).toStrictEqual({ field: '79999999999' })
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate ignored mask field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof ignoredMaskSchema>>().toEqualTypeOf<RequiredSchema>()

    const validRequiredField = {
      field: '+7 (999) 999-99-99'
    }
    const invalidRequiredField = {
      field: '+7 (123) 123-12-12'
    }

    const { data } = ignoredMaskSchema.safeParse(validRequiredField)
    const { error } = ignoredMaskSchema.safeParse(invalidRequiredField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(data).toStrictEqual(validRequiredField)
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate optional field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof optionalSchema>>().toEqualTypeOf<OptionalSchema>()

    const validOptionalField = {
      field: undefined
    }
    const invalidOptionalField = {
      field: '+7 (123) 123-12-12'
    }

    const { data } = optionalSchema.safeParse({ field: undefined })
    const { error } = optionalSchema.safeParse(invalidOptionalField)

    vi.expect(data).toStrictEqual(validOptionalField)
    vi.expect(error).not.toBeFalsy()
  })
})
