import type { TEsiaProps } from '../model/types'
import { AuthWrapper, EsiaLogo, Links } from './ui'
import { useDevice } from '$/shared/hooks'
import { Badge, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const Esia = ({ mainLink, subLink, isLoading, badge, loaderProps, classes }: TEsiaProps) => {
  const { isMobile } = useDevice()

  return (
    <AuthWrapper isLoading={isLoading} loaderProps={loaderProps} classes={classes}>
      <div
        className={cn(
          'flex flex-1 items-center justify-between gap-1',
          { 'justify-center': !badge && isMobile },
          classes?.innerWrapper
        )}
      >
        <div className={cn('flex items-center gap-1 desktop:gap-4', classes?.textContent)}>
          <EsiaLogo className={cn('size-7 desktop:size-8', classes?.esiaLogo)} />
          <Links mainLink={mainLink} subLink={subLink} isMobile={isMobile} classes={classes} />
          <Icon name='arrows/arrowRight' className={cn('mobile:hidden', classes?.arrowIcon)} />
        </div>
        {badge && <Badge className={cn('bg-color-positive', classes?.badge)}>{badge}</Badge>}
      </div>
    </AuthWrapper>
  )
}
