'use client'

import { Advantages, Buttons } from './ui'
import { useDevice } from '$/shared/hooks'
import { ResponsiveContainer } from '$/shared/ui'
import { cn, renderImage } from '$/shared/utils'
import { type BannerProps, widgetIds } from '$/widgets'

export const BannerImageFull = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantages,
  classes,
  imageDesktop,
  imageMobile,
  renderImageCb,
  backgroundColor
}: Omit<BannerProps, 'bannerVariant'>) => {
  const { isMobile } = useDevice()

  const advantagesExist = advantages?.details && advantages?.details?.items.length > 0

  return (
    <>
      <section
        id={widgetIds.banner}
        data-test-id={widgetIds.banner}
        style={{ backgroundColor: backgroundColor ?? '#d9edff' }}
        className={cn('relative h-[552px] desktop:h-[456px]', classes?.root)}
      >
        <div className='absolute bottom-0 left-0 right-0 top-0 mx-auto h-full max-w-[1920px] desktop:h-[456px]'>
          {isMobile
            ? renderImage({
                imgProps: {
                  className: 'h-full w-full object-cover object-center',
                  ...imageMobile
                },
                renderImageCb
              })
            : renderImage({
                imgProps: {
                  className: 'h-full w-full object-cover object-center',
                  ...imageDesktop
                },
                renderImageCb
              })}
        </div>

        <ResponsiveContainer className={cn('h-full', classes?.container)}>
          <div className={cn('flex h-full', classes?.wrapper)}>
            <div className={cn('flex w-[328px] flex-col gap-10 pt-6 desktop:w-full desktop:pt-20', classes?.textBlock)}>
              <div className='z-10 flex flex-col gap-4'>
                <div
                  dangerouslySetInnerHTML={{ __html: headTitle }}
                  className={cn('mob-headline-bold-m text-color-dark desktop:desk-headline-bold-l', classes?.title)}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                  className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}
                />
              </div>

              <Buttons buttonConfig={buttonsConfig} />
            </div>
          </div>

          {advantages?.enabled && advantagesExist && (
            <Advantages
              classes={{
                root: 'mobile:hidden desktop:absolute desktop:bottom-[-50px] desktop:right-1/2 desktop:translate-x-1/2 desktop:rounded-md desktop:p-0'
              }}
              {...advantages}
            />
          )}
        </ResponsiveContainer>
      </section>
      {advantages?.enabled && advantagesExist && (
        <Advantages
          classes={{
            root: 'px-4 pt-4 mobile:bg-color-white desktop:hidden'
          }}
          {...advantages}
        />
      )}
    </>
  )
}
