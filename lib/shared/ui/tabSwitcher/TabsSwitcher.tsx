'use client'

import * as TabPrimitive from '@radix-ui/react-tabs'
import type { TabRenderContent, TabsClasses } from './model/types'
import { TabContent } from './ui/TabContent'
import { cn } from '$/shared/utils'

export interface TabsSwitcherProps {
  renderContent: TabRenderContent
  value: string
  onChangeTab: (tab: string) => void
  defaultActiveTabId?: string
  classes?: TabsClasses
}

export const TabsSwitcher = ({ renderContent, defaultActiveTabId = '1', value, onChangeTab, classes }: TabsSwitcherProps) => {
  return (
    <TabPrimitive.Root
      value={value}
      onValueChange={onChangeTab}
      defaultValue={defaultActiveTabId}
      className={cn('flex flex-col', classes?.root)}
    >
      <TabPrimitive.List className={cn('flex items-center gap-4', classes?.list)}>
        {renderContent?.triggers?.map(({ id, label }) => (
          <TabPrimitive.Trigger
            key={id}
            value={id}
            className={cn(
              'desk-body-regular-l bg-color-blue-grey-100 text-color-secondary hover:bg-color-blue-grey-200 hover:text-color-secondary data-[state="active"]:bg-color-primary-default! data-[state="active"]:text-color-white! cursor-pointer rounded-sm px-4 py-2 outline outline-2 outline-offset-2 outline-transparent transition-colors',
              classes?.trigger
            )}
          >
            {label}
          </TabPrimitive.Trigger>
        ))}
      </TabPrimitive.List>
      <TabContent contents={renderContent?.contents} classes={classes?.tabContent} />
    </TabPrimitive.Root>
  )
}
