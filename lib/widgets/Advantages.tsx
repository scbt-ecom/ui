import * as React from 'react'
import { Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface IAdvantageClasses {
  advantageWrapper: string
  advantageItem: string
  advantageTitle: string
  advantageDescription: string
}
export interface IAdvantage {
  title: string
  description: string | React.ReactElement
}

export interface IAdvantagesProps {
  advantagesList: IAdvantage[]
  classes?: Partial<IAdvantageClasses>
}

export const Advantages = ({ advantagesList, classes }: IAdvantagesProps) => {
  return (
    <div
      className={cn(
        'flex w-[328px] flex-col gap-8 rounded-md bg-color-white p-6 shadow-sm desktop:w-full desktop:flex-row desktop:items-start desktop:gap-0 desktop:p-0 desktop:py-6',
        classes?.advantageWrapper
      )}
    >
      {advantagesList?.map(({ title, description }) => (
        <div
          key={title}
          className={cn(
            'after:content-[" "] relative flex h-full w-[285px] flex-col gap-2 after:absolute after:-bottom-4 after:left-1/2 after:h-[1px] after:w-[280px] after:-translate-x-1/2 after:bg-color-blue-grey-300 last:after:hidden desktop:px-8 desktop:after:bottom-auto desktop:after:left-auto desktop:after:right-0 desktop:after:top-1/2 desktop:after:h-10 desktop:after:w-[1px] desktop:after:-translate-y-1/2 desktop:after:translate-x-0',
            classes?.advantageItem
          )}
        >
          <Heading as='h4' className={cn('text-color-dark', classes?.advantageTitle)}>
            {title}
          </Heading>
          <p className={cn('desk-body-regular-l text-color-tetriary', classes?.advantageDescription)}>{description}</p>
        </div>
      ))}
    </div>
  )
}
