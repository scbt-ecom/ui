import { z } from 'zod'
import { VALIDATION_MESSAGES } from '../messages'

export const zodOtpCodeSchema = z.coerce
  .number()
  .min(1000, `${VALIDATION_MESSAGES.FIX_LENGTH} 4`)
  .max(9999, `${VALIDATION_MESSAGES.FIX_LENGTH} 4`)
  .nullable()
  .superRefine((value, context) => {
    if (value === null) {
      context.addIssue({
        code: z.ZodIssueCode.invalid_type,
        expected: 'number',
        received: 'null',
        message: `${VALIDATION_MESSAGES.FIX_LENGTH} 4`
      })
    }
  })
  .default(null)
