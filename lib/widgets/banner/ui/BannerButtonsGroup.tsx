import { type TButtonsConfig } from '../Banner'
import { Button } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface IBannerButtonsGroupClasses {
  group: string
  primary: string
  secondary: string
}
interface IBannerButtonsGroupProps {
  buttonsConfig: TButtonsConfig
  classes?: Partial<IBannerButtonsGroupClasses>
  className?: string
}

export const BannerButtonsGroup = ({ buttonsConfig, classes, className }: IBannerButtonsGroupProps) => {
  const withSecondaryBtn = buttonsConfig?.secondary && buttonsConfig.secondary.children

  return (
    <div
      data-id='banner-buttons-group'
      className={cn(
        'grid-buttons-apply flex w-full flex-col mobile:max-w-[328px] mobile:justify-self-center desktop:flex-row',
        { 'flex items-center gap-4': withSecondaryBtn },
        classes?.group,
        className
      )}
    >
      <Button intent='primary' {...buttonsConfig.primary} isFull className={cn('desktop:max-w-[216px]', classes?.primary)}>
        {buttonsConfig.primary.children}
      </Button>
      {withSecondaryBtn && (
        <Button intent='secondary' {...buttonsConfig?.secondary} className={cn(classes?.secondary)}>
          {buttonsConfig?.secondary?.children}
        </Button>
      )}
    </div>
  )
}
