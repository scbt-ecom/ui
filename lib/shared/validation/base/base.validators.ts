import { getDateOptionalValidationSchema, getDateRequiredValidationSchema } from './date.validators'
import { getEmailOptionalValidationSchema, getEmailRequiredValidationSchema } from './email.validators'
import { getNumberOptionalValidationSchema, getNumberRequiredValidationSchema } from './number.validators'
import { getPhoneOptionalValidationSchema, getPhoneRequiredValidationSchema } from './phone.validators'
import { getSelectOptionalValidationSchema, getSelectRequiredValidationSchema } from './select.validators'
import { getStringOptionalValidationSchema, getStringRequiredValidationSchema } from './string.validators'

export const baseValidationSchemas = {
  getStringRequiredValidationSchema,
  getStringOptionalValidationSchema,
  getEmailRequiredValidationSchema,
  getEmailOptionalValidationSchema,
  getSelectRequiredValidationSchema,
  getSelectOptionalValidationSchema,
  getNumberRequiredValidationSchema,
  getNumberOptionalValidationSchema,
  getPhoneRequiredValidationSchema,
  getPhoneOptionalValidationSchema,
  getDateRequiredValidationSchema,
  getDateOptionalValidationSchema
}
