import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { useDevice } from '$/shared/hooks'
import { ResponsiveContainer } from '$/shared/ui'
import { cn, TypeGuards } from '$/shared/utils'
import { Advantages, type BannerProps } from '$/widgets'

export const BannerWithSeparateImg = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantages,
  classes,
  imgMobile,
  withAdvantages,
  imgDesktop,
  color
}: Omit<BannerProps, 'bannerVariant'>) => {
  const { isDesktop, isMobile } = useDevice()

  const imgMob =
    imgMobile && 'url' in imgMobile && TypeGuards.isObject(imgMobile) ? (
      <img className='w-full object-contain' alt='Картинка баннера' src={imgMobile.url} />
    ) : (
      imgMobile
    )

  const imgDesk =
    imgDesktop && 'url' in imgDesktop && TypeGuards.isObject(imgDesktop) ? (
      <img className='w-full object-contain' alt='Картинка баннера' src={imgDesktop.url} />
    ) : (
      imgDesktop
    )

  const advantage = (
    <div
      className={cn(
        'flex items-center justify-center rounded-md bg-color-blue-grey-100 p-4 pb-8 desktop:absolute desktop:bottom-[-50px] desktop:right-1/2 desktop:translate-x-1/2 desktop:p-0',
        classes?.advantageContainer
      )}
    >
      {advantages?.config.details && advantages?.config.details?.length > 0 && <Advantages {...advantages} />}
    </div>
  )

  return (
    <>
      <section
        style={{ backgroundColor: color ?? '#d9edff' }}
        data-test-id='banner'
        className={cn('bg-banner-skyblue-300 desktop:h-[456px]', classes?.root)}
      >
        <ResponsiveContainer className={cn('relative', classes?.container)}>
          <div className={cn('flex flex-col desktop:flex-row desktop:justify-between', classes?.wrapper)}>
            <div className='flex flex-col desktop:gap-10 desktop:pt-20'>
              <div className={cn('flex flex-col gap-4 pt-6 desktop:pt-0', classes?.textBlock)}>
                <div
                  dangerouslySetInnerHTML={{ __html: headTitle }}
                  className={cn('mob-headline-bold-m text-color-dark desktop:desk-headline-bold-l', classes?.title)}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                  className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}
                />
              </div>
              <BannerButtonsGroup buttonsConfig={buttonsConfig} classes={classes} />
            </div>

            <div className={cn('flex h-[356px] justify-center desktop:h-[456px] desktop:w-[550px]', classes?.imageContainer)}>
              {isMobile ? imgMob : imgDesk}
            </div>
          </div>

          {isDesktop && withAdvantages && advantage}
        </ResponsiveContainer>
      </section>
      {isMobile && withAdvantages && advantage}
    </>
  )
}
