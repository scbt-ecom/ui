import { type TMobileIdProps } from '../model/types'
import { AuthWrapper, Links } from './ui/'
import { useDevice } from '$/shared/hooks'
import { Badge, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const MobileId = ({ mainLink, subLink, isLoading, badge, loaderProps, classes, onClick }: TMobileIdProps) => {
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
        <div className={cn('flex h-max items-center gap-1 desktop:gap-4', classes?.textContent)}>
          <div className='flex h-full'>
            <Icon name='logos/mts' className={cn('z-[9] size-8', classes?.mtsLogo)} />
            <Icon name='logos/megafon' className={cn('z-[8] -ml-4 size-8', classes?.megafonLogo)} />
            <Icon name='logos/beeline' className={cn('z-[7] -ml-4 size-8', classes?.beelineLogo)} />
          </div>
          <Links onClick={onClick} mainLink={mainLink} subLink={subLink} isMobile={isMobile} classes={classes?.links} />
          <Icon name='arrows/arrowRight' className={cn('size-6 mobile:hidden', classes?.arrowIcon)} />
        </div>
        {badge && <Badge className={cn('bg-color-positive', classes?.badge)}>{badge}</Badge>}
      </div>
    </AuthWrapper>
  )
}
