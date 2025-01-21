import { getDateOptional, getDateRequired } from './date.validators'
import { getEmailOptional, getEmailRequired } from './email.validators'
import { getNumberOptional, getNumberRequired } from './number.validators'
import { getPhoneOptional, getPhoneRequired } from './phone.validators'
import { getSelectOptional, getSelectRequired } from './select.validators'
import { getStringOptional, getStringRequired } from './string.validators'

export const baseValidationSchemas = {
  getStringRequired,
  getStringOptional,
  getEmailRequired,
  getEmailOptional,
  getSelectRequired,
  getSelectOptional,
  getNumberRequired,
  getNumberOptional,
  getPhoneRequired,
  getPhoneOptional,
  getDateRequired,
  getDateOptional
}
