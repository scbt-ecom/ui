import * as vi from 'vitest'
import { type TypeOf } from 'zod'
import { requiredSchema } from './constants'

type RequiredSchema = {
  field: string
}

vi.describe('Test cases for string validation schema', () => {
  vi.it('Should validate required field correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const validRequiredField = {
      field: '8019 788342'
    }
    const invalidRequiredField = {
      field: ''
    }

    const result1 = requiredSchema.safeParse(validRequiredField)
    const result2 = requiredSchema.safeParse(invalidRequiredField)

    console.log(JSON.stringify(result1, null, 2))
    console.log(JSON.stringify(result2, null, 2))

    vi.expect(result1.success).toBe(true)
    vi.expect(result2.success).toBe(false)
  })

  vi.it('Should reject invalid passport part correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const invalidRequiredField = {
      field: '0011 324234'
    }

    const result = requiredSchema.safeParse(invalidRequiredField)

    console.log(JSON.stringify(result, null, 2))

    vi.expect(result.success).toBe(false)
  })

  vi.it('Should reject invalid passport number correctly', () => {
    vi.expectTypeOf<TypeOf<typeof requiredSchema>>().toEqualTypeOf<RequiredSchema>()

    const invalidRequiredField = {
      field: '8019 000100'
    }

    const result = requiredSchema.safeParse(invalidRequiredField)

    console.log(JSON.stringify(result, null, 2))

    vi.expect(result.success).toBe(false)
  })
})
