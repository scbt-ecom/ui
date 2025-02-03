import * as vi from 'vitest'
import { type TypeOf } from 'zod'
import { maxSchema, minMaxSchema, minSchema, optionalSchema, requiredSchema } from './constants'

type RequiredSchema = {
  field: string
}

type OptionalSchema = {
  field?: string
}

type MinSchema = {
  field: string
}

type MaxSchema = {
  field: string
}

type MinMaxSchema = {
  field: string
}

vi.describe('Test cases for string validation schema', () => {
  vi.it('Should validate required field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const validRequiredField = {
      field: 'testField'
    }
    const invalidRequiredField = {
      field: ''
    }

    const { data } = requiredSchema.safeParse(validRequiredField)
    const { error } = requiredSchema.safeParse(invalidRequiredField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate optional field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof optionalSchema>>().toEqualTypeOf<OptionalSchema>()

    const validOptionalField = {
      field: 'testField'
    }
    const invalidOptionalField = {
      field: 0
    }

    const { data } = optionalSchema.safeParse(validOptionalField)
    const { error } = optionalSchema.safeParse(invalidOptionalField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate min field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof minSchema>>().toEqualTypeOf<MinSchema>()

    const validMinField = {
      field: 'valid'
    }
    const invalidMinField = {
      field: ''
    }

    const { data } = minSchema.safeParse(validMinField)
    const { error } = minSchema.safeParse(invalidMinField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate max field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof maxSchema>>().toEqualTypeOf<MaxSchema>()

    const validMinField = {
      field: 'valid'
    }
    const invalidMinField = {
      field: 'invalid'
    }

    const { data } = maxSchema.safeParse(validMinField)
    const { error } = maxSchema.safeParse(invalidMinField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })

  vi.it('Should validate min-max field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof minMaxSchema>>().toEqualTypeOf<MinMaxSchema>()

    const validMinField = {
      field: 'valid'
    }
    const invalidMinField = {
      field: 'invalid'
    }

    const { data } = minMaxSchema.safeParse(validMinField)
    const { error } = minMaxSchema.safeParse(invalidMinField)

    vi.expect(data).not.toBeFalsy()
    vi.expect(error).not.toBeFalsy()
  })
})
