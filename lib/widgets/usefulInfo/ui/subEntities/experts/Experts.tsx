import { type EntitiesAccordionsConfig, type SubEntityDetailsConfig } from '../../../model'
import { ExpertCard, type ExpertCardClasses, type ExpertCardProps } from './ui'
import { Accordion, Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type EntityExpertsClasses = {
  root?: string
  headline?: string
  wrapper?: string
  singleCard?: ExpertCardClasses
}

export interface EntityExpertsProps {
  headline?: string
  expertsList: ExpertCardProps[]
  config?: SubEntityDetailsConfig
  classes?: EntityExpertsClasses
  accordionConfig?: EntitiesAccordionsConfig['expertsAccordion']
}

export const Experts = ({ expertsList, classes, accordionConfig, config, headline }: EntityExpertsProps) => {
  const content = (
    <div className={cn('flex flex-col gap-4', classes?.root)}>
      {headline && (
        <Heading className={cn(classes?.headline)} as='h4'>
          {headline}
        </Heading>
      )}
      <div className={cn('flex flex-col gap-6', classes?.wrapper)}>
        {expertsList?.map((card) => (
          <ExpertCard key={card.name} classes={classes?.singleCard} {...card} />
        ))}
      </div>
    </div>
  )

  return (
    <>
      {config && config?.isAccordion && config?.accordionTitle ? (
        <Accordion label={config?.accordionTitle} {...accordionConfig}>
          {accordionConfig?.children ?? content}
        </Accordion>
      ) : (
        content
      )}
    </>
  )
}
