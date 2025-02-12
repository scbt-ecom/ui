'use client'

import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { useDevice } from '$/shared/hooks'
import { ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { Advantages, type BannerProps } from '$/widgets'

export const BannerImageFull = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantages,
  classes,
  imgMobile,
  imgDesktop
}: Omit<BannerProps, 'bannerVariant'>) => {
  const { isDesktop, isMobile } = useDevice()
  const advantage = (
    <div
      className={cn(
        'flex items-center justify-center pt-4 desktop:absolute desktop:bottom-[-50px] desktop:right-1/2 desktop:translate-x-1/2 desktop:pt-0',
        classes?.advantageContainer
      )}
    >
      {advantages?.config.details && advantages?.config.details?.length > 0 && <Advantages {...advantages} />}
    </div>
  )

  return (
    <>
      <section data-test-id='banner' className={cn('relative h-[552px] desktop:h-[456px]', classes?.root)}>
        <div className='absolute bottom-0 left-0 right-0 top-0 z-[-1] mx-auto h-full max-w-[1920px] desktop:h-[456px]'>
          {isMobile ? imgMobile?.url : imgDesktop?.url}
        </div>
        <ResponsiveContainer className={cn('h-full', classes?.container)}>
          <div className={cn('flex h-full', classes?.wrapper)}>
            <div className={cn('flex w-[328px] flex-col gap-10 pt-6 desktop:w-full desktop:pt-20', classes?.textBlock)}>
              <div className='flex flex-col gap-4'>
                <div
                  dangerouslySetInnerHTML={{ __html: headTitle }}
                  className={cn('mob-headline-bold-m text-color-dark desktop:desk-headline-bold-l', classes?.title)}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                  className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}
                />
              </div>
              <BannerButtonsGroup className='self-end desktop:self-center' buttonsConfig={buttonsConfig} classes={classes} />
            </div>
          </div>

          {isDesktop && advantage}
        </ResponsiveContainer>
      </section>
      {isMobile && advantage}
    </>
  )
}
