import { z } from 'zod'
import { zodValidators } from '$/shared/validation'

export const userReviewSchema = z.object({
  review: zodValidators.base.getStringSchema({ required: false })
})
