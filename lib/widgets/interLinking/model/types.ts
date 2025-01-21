import { type z } from 'zod'
import { type columnGroupSchema, type interLinkingSchema } from './helpers'

export type TColumnGroupSchema = z.infer<typeof columnGroupSchema>
export type InterLinkingSchema = z.infer<typeof interLinkingSchema>

export type ColumnsLinks = TColumnGroupSchema[number]['links']
export type ColumnsGroupLabel = TColumnGroupSchema[number]['groupLabel']
