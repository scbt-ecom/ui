import * as vi from 'vitest'
import { TypeGuards } from '$/shared/utils'

vi.describe('Test cases for TypeGuards', () => {
  let value: unknown

  vi.it('Should detect string', () => {
    value = 'test'

    vi.assert(TypeGuards.isString(value) === true, 'Should detect string')
  })

  vi.it('Should detect empty string', () => {
    value = ''

    vi.assert(TypeGuards.isStringEmpty(value) === true, 'Should detect empty string')
  })

  vi.it('Should detect array', () => {
    value = ['some', 'string', 'array']

    vi.assert(TypeGuards.isArray(value) === true, 'Should detect array')
  })

  vi.it('Should detect empty array', () => {
    value = []

    vi.assert(TypeGuards.isArrayEmpty(value) === true, 'Should detect empty array')
  })

  vi.it('Should detect null', () => {
    value = null

    vi.assert(TypeGuards.isNull(value) === true, 'Should detect null')
  })

  vi.it('Should detect undefined', () => {
    value = undefined

    vi.assert(TypeGuards.isUndefined(value) === true, 'Should detect undefined')
  })

  vi.it('Should detect null or undefined', () => {
    value = null
    vi.assert(TypeGuards.isNil(value) === true, 'Should detect null')

    value = undefined
    vi.assert(TypeGuards.isNil(value) === true, 'Should detect undefined')
  })
})
