export * from './regExp'
export * from './messages'
export * from './zodValidation'
export type * from './base'
import { baseValidationSchemas } from './base'
import { dadataValidationSchemas } from './dadata'

export const zodValidators = {
  base: baseValidationSchemas,
  dadata: dadataValidationSchemas
}
