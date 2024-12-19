import { z } from 'zod'

export const columnGroupSchema = z.array(
  z.object({
    groupLabel: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        path: z.string()
      })
    )
  })
)

export const columnsSchema = z.array(
  z.object({
    columnsGroup: columnGroupSchema
  })
)

export const interLinkingSchema = z.object({
  intent: z.enum(['twoCols', 'threeCols', 'fourCols']),
  heading: z.string(),
  columns: columnsSchema
})
