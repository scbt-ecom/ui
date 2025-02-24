import * as vi from 'vitest'
import { discriminatedUnion, literal, object, type TypeOf } from 'zod'
import { ZodUtils, zodValidators } from '$/shared/validation'

vi.describe('Test cases for ZodUtils', () => {
  vi.it('Should merge intersection and return default values of string schema', () => {
    const schema = object({
      foo: zodValidators.base.getStringSchema()
    }).and(
      object({
        bar: zodValidators.base.getStringSchema()
      })
    )

    const mergedSchema = ZodUtils.zodMergeIntersection(schema)
    vi.expect(mergedSchema.shape).toHaveProperty('bar')

    const expectedValues: TypeOf<typeof mergedSchema> = {
      foo: '',
      bar: ''
    }

    const actualValues = ZodUtils.getZodDefaults(mergedSchema)

    vi.expect(actualValues).not.toBeUndefined()
    vi.expect(actualValues).toStrictEqual(expectedValues)
  })

  vi.it('Should merge intersection with discriminatedUnion and return default values of string schema', () => {
    const schema = object({
      foo: zodValidators.base.getStringSchema()
    }).and(
      discriminatedUnion('enabled', [
        object({
          enabled: literal(true),
          bar: zodValidators.base.getStringSchema()
        }),
        object({
          enabled: literal(false)
        })
      ])
    )

    const mergedSchema = ZodUtils.zodMergeIntersection(schema)
    vi.expect(mergedSchema).toHaveProperty('enabled')
    vi.expect(mergedSchema).toHaveProperty('bar')

    const expectedValues: TypeOf<typeof mergedSchema> = {
      foo: '',
      enabled: true,
      bar: ''
    }

    const actualValues = ZodUtils.getZodDefaults(mergedSchema)

    vi.expect(actualValues).not.toBeUndefined()
    vi.expect(actualValues).toStrictEqual(expectedValues)
  })

  vi.it('Should throw an error while merging invalid shapes', () => {
    const schema = object({
      foo: zodValidators.base.getStringSchema()
    }).and(zodValidators.base.getStringSchema())

    vi.expect(ZodUtils.zodMergeIntersection(schema)).toThrowError(/^Cannot merge/)
  })
})
