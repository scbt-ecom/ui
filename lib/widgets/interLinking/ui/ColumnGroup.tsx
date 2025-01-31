import type { Group } from '../model/types'
import { LinksList, type LinksListClasses } from './LinksList'
import { useDevice } from '$/shared/hooks'
import { Accordion, type AccordionProps, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type ColumnGroupClasses = {
  columnGroup?: string
  columnGroupHeading?: string
  linksList?: LinksListClasses
}

export interface ColumnGroupProps extends Group {
  mobileAccordionProps?: AccordionProps
  classes?: ColumnGroupClasses
}

export const ColumnGroup = ({ groupLabel, links, mobileAccordionProps, classes }: ColumnGroupProps) => {
  const { isMobile } = useDevice()

  return (
    <div className={cn('flex flex-col gap-2', classes?.columnGroup)}>
      {!isMobile && (
        <>
          <h5 className={cn('mob-body-medium-l text-color-dark desktop:desk-body-medium-l', classes?.columnGroupHeading)}>
            {groupLabel}
          </h5>
          <LinksList key='desktop' links={links} classes={classes?.linksList} />
        </>
      )}

      {isMobile && (
        <Accordion
          defaultOpen
          label={groupLabel}
          icon={
            <Icon name='arrows/arrowRight' className={cn('rotate-90 transition-transform group-data-[state=open]:-rotate-90')} />
          }
          {...mobileAccordionProps}
          classes={{
            ...mobileAccordionProps?.classes,
            header: {
              trigger: cn('p-0 bg-color-blue-grey-100', mobileAccordionProps?.classes?.header?.trigger)
            },
            contentInner: cn('py-2 px-4', mobileAccordionProps?.classes?.contentInner)
          }}
        >
          <LinksList key='mobile' links={links} classes={classes?.linksList} />
        </Accordion>
      )}
    </div>
  )
}
