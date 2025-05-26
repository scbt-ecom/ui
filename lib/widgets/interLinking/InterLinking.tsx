import { cva } from 'class-variance-authority'
import { widgetIds } from '../model'
import type { InterLinkingRoot } from './model/types'
import { Column, type ColumnClasses } from './ui'
import { Accordion, type AccordionProps, Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

const columnsWrapper = cva('grid gap-4 grid-cols-1', {
  variants: {
    variant: {
      twoCols: 'desktop:grid-cols-2',
      threeCols: 'desktop:grid-cols-3',
      fourCols: 'desktop:grid-cols-4'
    }
  },
  defaultVariants: {
    variant: 'fourCols'
  }
})

export type InterLinkingClasses = {
  root?: string
  headline?: string
  columnsWrapper?: string
  column?: ColumnClasses
}

export interface InterLinkingProps extends InterLinkingRoot {
  mobileAccordionProps?: Partial<AccordionProps>
  rootAccordionProps?: Partial<AccordionProps>
  classes?: InterLinkingClasses
  defaultOpen?: boolean
}

export const InterLinking = ({
  variant,
  details,
  headline,
  mobileAccordionProps,
  rootAccordionProps,
  classes,
  defaultOpen
}: InterLinkingProps) => {
  return (
    <section
      id={widgetIds.interLinking}
      data-test-id={widgetIds.interLinking}
      className={cn('min-w-full desktop:min-w-[1140px]', classes?.root)}
    >
      <ResponsiveContainer>
        <Accordion
          defaultOpen={defaultOpen}
          label={
            <Heading as='h4' className={cn('text-left', classes?.headline)}>
              {headline}
            </Heading>
          }
          {...rootAccordionProps}
          classes={{
            ...rootAccordionProps?.classes,
            header: {
              trigger: cn('bg-color-blue-grey-100', rootAccordionProps?.classes?.header?.trigger)
            },
            content: cn('max-w-full bg-color-blue-grey-100 relative', rootAccordionProps?.classes?.content)
          }}
        >
          <div className={cn(columnsWrapper({ variant: variant }), classes?.columnsWrapper)}>
            {details?.map((column, index) => (
              <Column key={index} {...column} {...mobileAccordionProps} classes={classes?.column} />
            ))}
          </div>
        </Accordion>
      </ResponsiveContainer>
    </section>
  )
}

// eslint-disable-next-line import/no-default-export
export default InterLinking
