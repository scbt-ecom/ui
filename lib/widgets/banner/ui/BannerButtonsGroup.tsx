import { type ButtonsConfig } from '../Banner'
import { Button } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface BannerButtonsGroupClasses {
  group: string
  primary: string
  secondary: string
}
interface BannerButtonsGroupProps {
  buttonsConfig: ButtonsConfig
  classes?: Partial<BannerButtonsGroupClasses>
  className?: string
}

export const BannerButtonsGroup = ({ buttonsConfig, classes, className }: BannerButtonsGroupProps) => {
  const withSecondaryBtn = buttonsConfig?.secondary && buttonsConfig.secondary.children

  return (
    <div
      data-id='banner-buttons-group'
      className={cn(
        'grid-buttons-apply absolute bottom-6 left-1/2 flex w-full -translate-x-1/2 flex-col justify-self-center px-4 desktop:static desktop:left-auto desktop:max-w-full desktop:translate-x-0 desktop:flex-row desktop:justify-normal desktop:px-0',
        { 'flex items-center gap-4': withSecondaryBtn },
        classes?.group,
        className
      )}
    >
      <Button intent='primary' {...buttonsConfig.primary} isFull className={cn('desktop:max-w-[216px]', classes?.primary)}>
        {buttonsConfig.primary.children}
      </Button>
      {withSecondaryBtn && (
        <Button
          intent='secondary'
          {...buttonsConfig?.secondary}
          isFull
          className={cn('desktop:max-w-[216px]', classes?.secondary)}
        >
          {buttonsConfig?.secondary?.children}
        </Button>
      )}
    </div>
  )
}
