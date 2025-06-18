import type { Dispatch, SetStateAction } from 'react'
import type { FieldValues } from 'react-hook-form'
import { type z } from 'zod'
import { type userReviewSchema } from './schema'

export type FormStep = 'rating' | 'review' | 'finally'
export type FormStepSetter = Dispatch<SetStateAction<FormStep>>
export type UserReviewSchema = z.infer<typeof userReviewSchema>
export type SubmitCallback = <T extends FieldValues>(values: T) => Promise<void>
