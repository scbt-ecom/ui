import type { TColumnsGroupLabel, TColumnsLinks } from '../model/types'
import { LinksList, type TLinksListClasses } from './LinksList'
import { useDevice } from '$/shared/hooks'
import { Accordion, type IAccordionProps, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TColumnGroupClasses = {
  columnGroup?: string
  columnGroupHeading?: string
  linksList?: TLinksListClasses
}

export interface IColumnGroupProps {
  groupLabel: TColumnsGroupLabel
  links: TColumnsLinks
  mobileAccordionProps?: IAccordionProps
  classes?: TColumnGroupClasses
}

export const ColumnGroup = ({ groupLabel, links, mobileAccordionProps, classes }: IColumnGroupProps) => {
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
            trigger: cn('p-0', mobileAccordionProps?.classes?.trigger),
            contentInner: cn('py-2 px-4', mobileAccordionProps?.classes?.contentInner)
          }}
        >
          <LinksList key='mobile' links={links} classes={classes?.linksList} />
        </Accordion>
      )}
    </div>
  )
}
