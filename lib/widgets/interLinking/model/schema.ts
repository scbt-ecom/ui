import { z } from 'zod'

export const linkSchema = z.object({
  label: z.string(),
  path: z.string()
})

export const groupSchema = z.object({
  groupLabel: z.string(),
  links: z.array(linkSchema)
})

export const columnsSchema = z.object({
  column: z.array(groupSchema)
})

export const interLinkingSchema = z.object({
  headline: z.string(),
  variant: z.enum(['twoCols', 'threeCols', 'fourCols']),
  columns: z.array(columnsSchema)
})
