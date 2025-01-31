import * as vi from 'vitest'
import { object, type TypeOf } from 'zod'
import { ZodUtils, zodValidators } from '$/shared/validation'

vi.describe('Test cases for ZodUtils', () => {
  vi.it('Should return default values of string schema', () => {
    const schema = object({
      field: zodValidators.base.getStringSchema()
    })

    const expectedValues: TypeOf<typeof schema> = {
      field: ''
    }

    const actualValues = ZodUtils.getZodDefaults(schema)

    vi.expect(actualValues).not.toBeUndefined()
    vi.expect(actualValues).toStrictEqual(expectedValues)
  })

  vi.it('Should return default values of number schema', () => {
    const schema = object({
      field: zodValidators.base.getNumberSchema()
    })

    const expectedValues: TypeOf<typeof schema> = {
      field: 0
    }

    const actualValues = ZodUtils.getZodDefaults(schema)

    vi.expect(actualValues).not.toBeUndefined()
    vi.expect(actualValues).toStrictEqual(expectedValues)
  })

  vi.it('Should return default values of select schema', () => {
    const schema = object({
      field: zodValidators.base.getSelectSchema()
    })

    const expectedValues: TypeOf<typeof schema> = {
      field: null
    }

    const actualValues = ZodUtils.getZodDefaults(schema)

    vi.expect(actualValues).not.toBeUndefined()
    vi.expect(actualValues).toStrictEqual(expectedValues)
  })

  vi.it.skip('Should return default values of union schema', () => {
    const schema = object({
      field: zodValidators.base.getUnionSchema(['A', 'B'] as const)
    })

    const expectedValues: TypeOf<typeof schema> = {
      field: 'A'
    }

    const actualValues = ZodUtils.getZodDefaults(schema)

    vi.expect(actualValues).not.toBeUndefined()
    vi.expect(actualValues).toStrictEqual(expectedValues)
  })
})
