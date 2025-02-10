import { useMemo, useState } from 'react'
import type { Tab } from './model'
import { RenderEntity, Tabs } from './ui'
import { Heading, ResponsiveContainer } from '$/shared/ui'

export type UsefulInfoProps = {
  headline: string
  tabs: Tab[]
}

export const UsefulInfo = ({ headline, tabs }: UsefulInfoProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const tabsNames = useMemo(() => tabs?.map((tab) => tab?.tabName), [tabs]) ?? []

  if (!tabs || tabs?.length === 0) return null

  return (
    <section id='useful-info' className='pb-[64px] desktop:pb-20'>
      <ResponsiveContainer>
        <Heading as='h2'>{headline}</Heading>
        <div className='mt-6 flex flex-col gap-2 desktop:mt-12'>
          <Tabs tabsNames={tabsNames} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className='mt-6 flex flex-col gap-6'>
          {tabs?.[activeTab]?.contents?.map((entity, index) => <RenderEntity key={index} {...entity} />)}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
