import { type IBannerProps } from '../../Banner'
import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { useDevice } from '$/client'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { Advantages } from '$/widgets/Advantages'

export const BannerWithSeparateImg = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantagesList,
  classes,
  img
}: Omit<IBannerProps, 'bannerVariant'>) => {
  const { isDesktop, isMobile } = useDevice()
  const adventage = (
    <div
      data-id='banner-advantages'
      className={cn(
        'flex items-center justify-center rounded-md bg-color-blue-grey-100 p-4 desktop:absolute desktop:bottom-[-50px] desktop:right-1/2 desktop:translate-x-1/2 desktop:p-0',
        classes?.advantageContainer
      )}
    >
      {advantagesList && advantagesList?.length > 0 && <Advantages classes={classes} advantagesList={advantagesList} />}
    </div>
  )
  return (
    <>
      <section data-id='banner-section' className={cn('bg-banner-skyblue-300 desktop:h-[456px]', classes?.section)}>
        <ResponsiveContainer data-id='banner-container' className={cn('relative', classes?.container)}>
          <div data-id='banner' className={cn('flex flex-col desktop:flex-row desktop:justify-between', classes?.wrapper)}>
            <div className='flex flex-col desktop:gap-10 desktop:pt-20'>
              <div data-id='banner-text-block' className={cn('flex flex-col gap-4 pt-6 desktop:pt-0', classes?.textBlock)}>
                <Heading data-id='banner-title' as='h1' className={cn('text-color-dark', classes?.title)}>
                  {headTitle}
                </Heading>
                <p data-id='banner-subtitle' className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}>
                  {subtitle}
                </p>
              </div>

              <BannerButtonsGroup buttonsConfig={buttonsConfig} classes={classes} />
            </div>

            <div
              data-id='banner-image-wrapper'
              className={cn('flex h-[356px] justify-center desktop:h-[456px] desktop:w-[550px]', classes?.imageContainer)}
            >
              <img
                data-id='banner-image'
                src={img}
                alt='Картинка баннера'
                className={cn('h-full object-cover', classes?.image)}
              />
            </div>
          </div>

          {isDesktop && adventage}
        </ResponsiveContainer>
      </section>
      {isMobile && adventage}
    </>
  )
}
