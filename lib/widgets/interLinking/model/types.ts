import { type z } from 'zod'
import { type columnGroupSchema, type interLinkingSchema } from './helpers'

export type TColumnGroupSchema = z.infer<typeof columnGroupSchema>
export type TInterLinkingSchema = z.infer<typeof interLinkingSchema>

export type TColumnsLinks = TColumnGroupSchema[number]['links']
export type TColumnsGroupLabel = TColumnGroupSchema[number]['groupLabel']
