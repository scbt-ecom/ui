import * as TabPrimitive from '@radix-ui/react-tabs'
import { Accordion } from '../../accordion'
import type { ITabContent } from '../model/types'
import { cn } from '$/shared/utils'

export type TabContentClasses = {
  content?: string
  contentsWrapper?: string
}

export interface TabContentProps {
  contents: ITabContent[]
  classes?: TabContentClasses
}

export const TabContent = ({ classes, contents }: TabContentProps) => {
  return (
    <div className={cn('flex flex-col gap-4', classes?.contentsWrapper)}>
      {contents?.map(({ id, body, accordion }) => {
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
  )
}
