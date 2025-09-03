import { useMemo, useState } from 'react'
import { widgetIds } from '../model'
import type { EntitiesAccordionsConfig, Tab } from './model'
import { type EntityClasses, RenderEntity, Tabs, type TabsClasses } from './ui'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type UsefulInfoClasses = {
  root?: string
  container?: string
  tabsWrapper?: string
  tabs?: TabsClasses
  headline?: string
  contentWrapper?: string
  entityClasses?: EntityClasses
}

export type UsefulInfoProps = {
  headline: string
  tabs: Tab[]
  classes?: UsefulInfoClasses
  accordionsConfig?: EntitiesAccordionsConfig
}

export const UsefulInfo = ({ headline, tabs, classes, accordionsConfig }: UsefulInfoProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const tabsNames = useMemo(() => tabs?.map((tab) => tab?.tabName), [tabs]) ?? []

  if (!tabs || tabs?.length === 0) return null

  return (
    <section id={widgetIds.usefulInfo} data-test-id={widgetIds.usefulInfo} className={cn(classes?.root)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        <Heading className={cn(classes?.headline)} as='h2'>
          {headline}
        </Heading>
        <div className={cn('mt-6 flex flex-col gap-2 desktop:mt-12', classes?.tabsWrapper)}>
          <Tabs tabsNames={tabsNames} activeTab={activeTab} setActiveTab={setActiveTab} classes={classes?.tabs} />
        </div>
        <div className={cn('mt-6 flex flex-col gap-8', classes?.contentWrapper)}>
          {tabs?.[activeTab]?.contents?.map((entity, index) => (
            <RenderEntity accordionsConfig={accordionsConfig} key={index} {...entity} classes={classes?.entityClasses} />
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  )
}

export default UsefulInfo
