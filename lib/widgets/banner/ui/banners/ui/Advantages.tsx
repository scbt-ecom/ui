import { Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface AdvantageClasses {
  root?: string
  advantagesContainer?: string
  item?: string
  title?: string
  description?: string
}

export interface AdvantageItem {
  title: string
  description: string | React.ReactElement
}

export interface AdvantagesProps {
  details: {
    variant: 'threeCards' | 'fourCards'
    items: AdvantageItem[]
  }
  enabled?: boolean
  classes?: AdvantageClasses
}

export const Advantages = ({ details, classes }: AdvantagesProps) => {
  const { variant, items } = details ?? {}

  return (
    <div className={cn('flex items-center justify-center pb-8', classes?.root)}>
      <div
        id='advantages'
        className={cn(
          'z-10 m-auto flex w-full min-w-[328px] max-w-[636px] flex-col gap-8 rounded-md bg-color-white p-6 shadow-sm desktop:w-full desktop:flex-row desktop:items-start desktop:gap-0 desktop:p-0 desktop:py-6',
          { 'desktop:max-w-[860px]': variant === 'threeCards' },
          { 'desktop:max-w-[1140px]': variant === 'fourCards' },
          classes?.advantagesContainer
        )}
      >
        {items?.map(({ title, description }) => (
          <div
            key={title}
            className={cn(
              'after:content-[" "] relative flex h-full w-full flex-col gap-1 after:absolute after:-bottom-4 after:left-1/2 after:h-[1px] after:w-full after:-translate-x-1/2 after:bg-color-blue-grey-300 last:after:hidden desktop:w-[285px] desktop:items-center desktop:px-8 desktop:after:bottom-auto desktop:after:left-auto desktop:after:right-0 desktop:after:top-1/2 desktop:after:h-10 desktop:after:w-[1px] desktop:after:-translate-y-1/2 desktop:after:translate-x-0',
              classes?.item
            )}
          >
            <Heading as='h4' className={cn('text-color-dark', classes?.title)}>
              {title}
            </Heading>
            <p className={cn('desk-body-regular-l text-color-secondary', classes?.description)}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
