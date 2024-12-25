import { type TMobileIdProps } from '../model/types'
import { AuthWrapper, Links } from './ui/'
import { useDevice } from '$/shared/hooks'
import { Badge, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const MobileId = ({ mainLink, subLink, isLoading, badge, loaderProps, classes }: TMobileIdProps) => {
  const { isMobile } = useDevice()

  return (
    <AuthWrapper isLoading={isLoading} loaderProps={loaderProps} classes={classes?.authWrapper}>
      <div
        className={cn(
          'flex flex-1 items-center justify-between gap-1',
          { 'justify-center': !badge && isMobile },
          classes?.innerWrapper
        )}
      >
        <div className={cn('flex items-center gap-1 desktop:gap-4', classes?.textContent)}>
          <div>
            <Icon name='logos/mts' className={cn('relative z-[9] size-7 desktop:size-8', classes?.mtsLogo)} />
            <Icon name='logos/megafon' className={cn('relative z-[8] -ml-4 size-7 desktop:size-8', classes?.megafonLogo)} />
            <Icon name='logos/beeline' className={cn('relative z-[7] -ml-4 size-7 desktop:size-8', classes?.beelineLogo)} />
          </div>
          <Links mainLink={mainLink} subLink={subLink} isMobile={isMobile} classes={classes?.links} />
          <Icon name='arrows/arrowRight' className={cn('mobile:hidden', classes?.arrowIcon)} />
        </div>
        {badge && <Badge className={cn('bg-color-positive', classes?.badge)}>{badge}</Badge>}
      </div>
    </AuthWrapper>
  )
}
