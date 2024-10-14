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
}

export const BannerButtonsGroup = ({ buttonsConfig, classes }: IBannerButtonsGroupProps) => {
  const withSecondaryBtn = buttonsConfig?.secondary && buttonsConfig.secondary.children

  return (
    <div className={cn('bottom-0 w-max mobile:absolute', { 'flex items-center gap-4': withSecondaryBtn }, classes?.group)}>
      <Button intent='primary' {...buttonsConfig.primary} className={cn(classes?.primary)}>
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
