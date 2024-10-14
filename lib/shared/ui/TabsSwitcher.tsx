'use client'

import * as React from 'react'
import * as TabPrimitive from '@radix-ui/react-tabs'
import { cn } from '../utils'
import { Accordion } from './accordion'

/**
 * @param {string} id - для триггера и для контента должен совпадать
 */

interface ITabsClasses {
  root: string
  list: string
  trigger: string
  content: string
  contentsWrapper: string
}

interface ITabContent {
  id: string
  body: React.ReactElement | string
  accordion?: {
    title: string
  }
}

interface ITabTrigger {
  id: string
  label: string
}

export interface ITabRenderContent {
  triggers: ITabTrigger[]
  contents: ITabContent[]
}

export interface ITabsSwitcherProps {
  renderContent: ITabRenderContent
  defaultActiveTabId?: string
  classes?: Partial<ITabsClasses>
}

export const TabsSwitcher = ({ renderContent, defaultActiveTabId = '1', classes }: ITabsSwitcherProps) => {
  return (
    <TabPrimitive.Root defaultValue={defaultActiveTabId} className={cn('flex flex-col', classes?.root)}>
      <TabPrimitive.List aria-label='Manage your account' className={cn('flex items-center gap-4', classes?.list)}>
        {renderContent?.triggers?.map(({ id, label }) => (
          <TabPrimitive.Trigger
            key={id}
            value={id}
            className={cn(
              'desk-body-regular-l cursor-pointer rounded-sm bg-color-blue-grey-100 px-4 py-2 text-color-secondary outline outline-2 outline-offset-2 outline-transparent transition-colors hover:bg-color-blue-grey-200 hover:text-color-secondary data-[state="active"]:bg-color-primary-default data-[state="active"]:text-color-white',
              classes?.trigger
            )}
          >
            {label}
          </TabPrimitive.Trigger>
        ))}
      </TabPrimitive.List>
      <div className={cn('flex flex-col gap-4', classes?.contentsWrapper)}>
        {renderContent?.contents?.map(({ id, body, accordion }) => {
          if (accordion && accordion?.title) {
            return (
              <TabPrimitive.Content key={id} value={id} className={cn('py-8', classes?.content)}>
                <Accordion label={accordion?.title}>{body}</Accordion>
              </TabPrimitive.Content>
            )
          }

          return (
            <TabPrimitive.Content key={id} value={id} className={cn('py-8', classes?.content)}>
              {body}
            </TabPrimitive.Content>
          )
        })}
      </div>
    </TabPrimitive.Root>
  )
}
