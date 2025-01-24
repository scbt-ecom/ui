export * from './regExp'
export * from './messages'
export * from './zodValidation'
export * from './base'
export type * from './dadata'
export * from './utils'
import { baseValidationSchemas } from './base'
import { dadataValidationSchemas } from './dadata'

export const zodValidators = {
  base: baseValidationSchemas,
  dadata: dadataValidationSchemas
}
