import { type ReactElement } from 'react'
import { AUTH_PROVIDER_MODE } from './model/helpers'
import type { TAuthProviderProps } from './model/types'
import { Esia, MobileId } from './ui'
import { Badge } from '$/shared/ui'
import { cn } from '$/shared/utils'

const renderProvider = (props: TAuthProviderProps): ReactElement => {
  switch (props.mode) {
    case AUTH_PROVIDER_MODE.ESIA:
      return <Esia {...props} />
    case AUTH_PROVIDER_MODE.MOBILE_ID:
      return <MobileId {...props} />
    case AUTH_PROVIDER_MODE.COMBINE:
    default:
      const { esiaConfig, mobileIdConfig, subtitle, badge, classes } = props

      return (
        <div
          className={cn(
            'flex w-[328px] flex-col items-center justify-center gap-2 rounded-sm bg-color-white px-2 py-4 outline outline-1 outline-warm-grey-200 desktop:w-[524px] desktop:p-4',
            classes?.root
          )}
        >
          <div className={cn('flex w-full items-center justify-between gap-2', classes?.topContent)}>
            <span className={cn('', classes?.subtitle)}>{subtitle}</span>
            {badge && <Badge className={cn('bg-color-positive', classes?.badge)}>{badge}</Badge>}
          </div>
          <div className={cn('grid w-full grid-cols-2 gap-2 desktop:gap-4', classes?.authWrapper)}>
            <Esia
              {...esiaConfig}
              classes={{
                root: 'p-0 outline-0 h-[74px]',
                arrowIcon: 'hidden',
                ...esiaConfig.classes
              }}
            />
            <MobileId
              {...mobileIdConfig}
              classes={{
                root: 'p-0 outline-0 h-[74px]',
                arrowIcon: 'hidden',
                ...mobileIdConfig.classes
              }}
            />
          </div>
        </div>
      )
  }
}

export const AuthProvider = (props: TAuthProviderProps) => {
  return renderProvider(props)
}
