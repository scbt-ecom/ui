import { getBooleanSchema } from './boolean.validators'
import { getCurrencySchema } from './currency.validators'
import { getDateSchema } from './date.validators'
import { getEmailSchema } from './email.validators'
import { getNumberSchema } from './number.validators'
import { getPassportSchema } from './passport.validators'
import { getPassportDepartmentSchema } from './passportDepartment.validators'
import { getPhoneSchema } from './phone.validators'
import { getRegexSchema } from './regex.validators'
import { getSelectSchema } from './select.validators'
import { getStringSchema } from './string.validators'
import { getUnionSchema } from './union.validators'
import { getUrlSchema } from './url.validators'

export const baseValidationSchemas = {
  getStringSchema,
  getEmailSchema,
  getSelectSchema,
  getNumberSchema,
  getPhoneSchema,
  getDateSchema,
  getUnionSchema,
  getUrlSchema,
  getRegexSchema,
  getBooleanSchema,
  getPassportDepartmentSchema,
  getPassportSchema,
  getCurrencySchema
}
