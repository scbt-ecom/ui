import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const requiredSchema = object({
  field: zodValidators.base.getPhoneSchema()
})

export const ignoredMaskSchema = object({
  field: zodValidators.base.getPhoneSchema({ ignoreMask: false })
})

export const optionalSchema = object({
  field: zodValidators.base.getPhoneSchema({ required: false })
})
