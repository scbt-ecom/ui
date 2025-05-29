'use client'

import { useDevice } from '$/shared/hooks'
import { ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { Advantages, type BannerProps, ButtonWithHandlers, widgetIds } from '$/widgets'

export const BannerImageFull = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantages,
  classes,
  imgMobile,
  imgDesktop,
  imgAlt,
  color,
  renderImage
}: Omit<BannerProps, 'bannerVariant'>) => {
  const { isDesktop, isMobile } = useDevice()
  const { primary, secondary } = buttonsConfig || {}

  const image = (args: React.ComponentProps<'img'>) => {
    return renderImage ? renderImage(args) : <img {...args} />
  }

  const advantage = (
    <div
      className={cn(
        'flex items-center justify-center pt-4 desktop:absolute desktop:bottom-[-50px] desktop:right-1/2 desktop:translate-x-1/2 desktop:pt-0',
        classes?.advantageContainer
      )}
    >
      {advantages?.details && advantages?.details?.items.length > 0 && <Advantages {...advantages} />}
    </div>
  )

  return (
    <>
      <section
        id={widgetIds.banner}
        data-test-id={widgetIds.banner}
        style={{ backgroundColor: color ?? '#d9edff' }}
        className={cn('relative h-[552px] desktop:h-[456px]', classes?.root)}
      >
        <div className='absolute bottom-0 left-0 right-0 top-0 mx-auto h-full max-w-[1920px] desktop:h-[456px]'>
          {isMobile
            ? image({ src: imgMobile.src, alt: imgAlt, className: cn('h-full w-full object-cover object-center') })
            : image({
                src: imgDesktop.src,
                alt: imgAlt,
                className: cn('h-full w-full object-cover object-center')
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

              <div
                className={cn(
                  'grid-buttons-apply absolute bottom-6 left-1/2 flex w-full -translate-x-1/2 flex-col self-end justify-self-center px-4 desktop:static desktop:left-auto desktop:max-w-full desktop:translate-x-0 desktop:flex-row desktop:justify-normal desktop:self-center desktop:px-0',
                  { 'flex items-center gap-4': secondary?.enabled },
                  classes?.group
                )}
              >
                {primary.enabled && (
                  <ButtonWithHandlers
                    className={cn('w-full desktop:max-w-[216px]', classes?.primary)}
                    size='lg'
                    intent='primary'
                    {...primary.buttonContent}
                  />
                )}
                {secondary?.enabled && (
                  <ButtonWithHandlers
                    intent='secondary'
                    className={cn('w-full desktop:max-w-[216px]', classes?.secondary)}
                    {...primary.buttonContent}
                  />
                )}
              </div>
            </div>
          </div>

          {isDesktop && advantages?.enabled && advantage}
        </ResponsiveContainer>
      </section>
      {isMobile && advantages?.enabled && advantage}
    </>
  )
}
