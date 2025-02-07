import type { Dispatch, SetStateAction } from 'react'
import { cn } from '$/shared/utils'

export interface TabsProps {
  tabsNames?: string[]
  activeTab?: number
  setActiveTab: Dispatch<SetStateAction<number>>
}

export const Tabs = ({ tabsNames, activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className='hidden-scroll flex items-center gap-4 overflow-x-auto p-[6px]'>
      {tabsNames?.map((tabName, tabIndex) => (
        <button
          key={tabName}
          onClick={() => setActiveTab(tabIndex)}
          className={cn(
            'desktop:kpy-3 mob-body-regular-m text-nowrap rounded-sm bg-color-blue-grey-100 px-3 py-1.5 text-color-secondary outline-1 outline-offset-4 outline-transparent focus:outline-primary-focus desktop:px-4 desktop:py-3',
            {
              'bg-icon-primary-default text-color-white': activeTab === tabIndex
            }
          )}
        >
          {tabName}
        </button>
      ))}
    </div>
  )
}
