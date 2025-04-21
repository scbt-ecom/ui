import type { Dispatch, SetStateAction } from 'react'
import { cn } from '$/shared/utils'

export type TabsClasses = {
  tabs?: string
  button?: string
}

export interface TabsProps {
  tabsNames?: string[]
  activeTab?: number
  setActiveTab: Dispatch<SetStateAction<number>>
  classes?: TabsClasses
}

export const Tabs = ({ tabsNames, activeTab, setActiveTab, classes }: TabsProps) => {
  return (
    <div className={cn('hidden-scroll flex items-center gap-4 overflow-x-auto p-[6px]', classes?.tabs)}>
      {tabsNames &&
        tabsNames.map((tabName, tabIndex) => (
          <button
            key={tabName}
            onClick={() => setActiveTab(tabIndex)}
            className={cn(
              'mob-body-regular-m text-nowrap rounded-sm bg-color-blue-grey-100 px-3 py-1.5 text-color-secondary outline-1 outline-offset-4 outline-transparent focus:outline-primary-focus desktop:px-4 desktop:py-3',
              {
                'bg-icon-primary-default text-color-white': activeTab === tabIndex
              },
              classes?.button
            )}
          >
            {tabName}
          </button>
        ))}
    </div>
  )
}
