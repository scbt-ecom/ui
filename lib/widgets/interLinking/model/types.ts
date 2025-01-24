import { type z } from 'zod'
import { type groupSchema, type interLinkingSchema, type linkSchema } from './schema'

export type InterLinkingSchema = z.infer<typeof interLinkingSchema>
export type ColumnGroupSchema = z.infer<typeof groupSchema>
export type GroupLinkSchema = z.infer<typeof linkSchema>
