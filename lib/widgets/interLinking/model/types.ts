import { type z } from 'zod'
import { type groupSchema, type interLinkingSchema, type linkSchema } from './helpers'

export type InterLinkingSchema = z.infer<typeof interLinkingSchema>
export type ColumnGroupSchema = z.infer<typeof groupSchema>
export type GroupLinkSchema = z.infer<typeof linkSchema>
