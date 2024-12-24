'use client'

import * as TabPrimitive from '@radix-ui/react-tabs'
import type { ITabRenderContent, TTabsClasses } from './model/types'
import { TabContent } from './ui/TabContent'
import { cn } from '$/shared/utils'

export interface ITabsSwitcherProps {
  renderContent: ITabRenderContent
  value: string
  onChangeTab: (tab: string) => void
  defaultActiveTabId?: string
  classes?: TTabsClasses
}

export const TabsSwitcher = ({ renderContent, defaultActiveTabId = '1', value, onChangeTab, classes }: ITabsSwitcherProps) => {
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
              'desk-body-regular-l cursor-pointer rounded-sm bg-color-blue-grey-100 px-4 py-2 text-color-secondary outline outline-2 outline-offset-2 outline-transparent transition-colors hover:bg-color-blue-grey-200 hover:text-color-secondary data-[state="active"]:!bg-color-primary-default data-[state="active"]:!text-color-white',
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
