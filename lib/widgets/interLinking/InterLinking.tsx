import { cva } from 'class-variance-authority'
import type { InterLinkingSchema } from './model/types'
import { Column, type ColumnClasses } from './ui'
import { Accordion, type AccordionProps, Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

const columnsWrapper = cva('grid gap-4 grid-cols-1', {
  variants: {
    intent: {
      twoCols: 'desktop:grid-cols-2',
      threeCols: 'desktop:grid-cols-3',
      fourCols: 'desktop:grid-cols-4'
    }
  },
  defaultVariants: {
    intent: 'fourCols'
  }
})

export type InterLinkingClasses = {
  root?: string
  heading?: string
  columnsWrapper?: string
  column?: ColumnClasses
}

export interface InterLinkingProps {
  data: InterLinkingSchema
  mobileAccordionProps?: AccordionProps
  rootAccordionProps?: AccordionProps
  classes?: InterLinkingClasses
}

export const InterLinking = ({ data, mobileAccordionProps, rootAccordionProps, classes }: InterLinkingProps) => {
  return (
    <section id='inter-linking' className={cn('min-w-full desktop:min-w-[1140px]', classes?.root)}>
      <ResponsiveContainer>
        <Accordion
          defaultOpen
          label={
            <Heading as='h4' className={cn('text-left', classes?.heading)}>
              {data?.heading}
            </Heading>
          }
          {...rootAccordionProps}
          classes={{
            ...rootAccordionProps?.classes,
            content: cn('max-w-full bg-color-blue-grey-100 relative', rootAccordionProps?.classes?.content)
          }}
        >
          <div className={cn(columnsWrapper({ intent: data?.intent }), classes?.columnsWrapper)}>
            {data?.columns?.map((column, index) => (
              <Column key={index} {...column} {...mobileAccordionProps} classes={classes?.column} />
            ))}
          </div>
        </Accordion>
      </ResponsiveContainer>
    </section>
  )
}
