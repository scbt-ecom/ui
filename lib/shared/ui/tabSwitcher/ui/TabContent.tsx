import * as TabPrimitive from '@radix-ui/react-tabs'
import type { ITabContent } from '../model/types'
import { Accordion } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TTabContentClasses = {
  content?: string
  contentsWrapper?: string
}

export interface ITabContentProps {
  contents: ITabContent[]
  classes?: TTabContentClasses
}

export const TabContent = ({ classes, contents }: ITabContentProps) => {
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
