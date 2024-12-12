import { type IBannerProps } from '../../Banner'
import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { useDevice } from '$/client'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { Advantages } from '$/widgets/advantages/Advantages.tsx'

export const BannerImageFull = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantagesList,
  classes,
  img,
  imgSets
}: Omit<IBannerProps, 'bannerVariant'>) => {
  const { isDesktop, isMobile } = useDevice()
  const advantage = (
    <div
      data-id='banner-advantages'
      className={cn(
        'flex items-center justify-center pt-4 desktop:absolute desktop:bottom-[-50px] desktop:right-1/2 desktop:translate-x-1/2 desktop:pt-0',
        classes?.advantageContainer
      )}
    >
      {advantagesList && advantagesList?.length > 0 && <Advantages classes={classes} advantagesList={advantagesList} />}
    </div>
  )

  return (
    <>
      <section data-id='banner-section' className={cn('relative h-[552px] desktop:h-[456px]', classes?.section)}>
        <div
          data-id='banner-img-wrapper'
          className='absolute bottom-0 left-0 right-0 top-0 z-[-1] mx-auto h-full max-w-[1920px] desktop:h-[456px]'
        >
          <picture>
            <source media='(min-width: 1128px)' srcSet={imgSets?.large} />
            <source media='(max-width: 1127px)' srcSet={imgSets?.mob} />
            <img
              data-id='banner-image'
              src={img}
              alt='Картинка баннера'
              className={cn('h-full w-full object-cover object-center', classes?.image)}
            />
          </picture>
        </div>
        <ResponsiveContainer data-id='banner-container' className={cn('h-full', classes?.container)}>
          <div data-id='banner' className={cn('flex h-full', classes?.wrapper)}>
            <div
              data-id='banner-text-block'
              className={cn('flex w-[328px] flex-col gap-10 pt-6 desktop:w-full desktop:pt-20', classes?.textBlock)}
            >
              <div className='flex flex-col gap-4'>
                <Heading data-id='banner-title' as='h1' className={cn('text-color-white', classes?.title)}>
                  {headTitle}
                </Heading>
                <p data-id='banner-subtitle' className={cn('desk-body-regular-l text-color-white', classes?.subtitle)}>
                  {subtitle}
                </p>
              </div>
              <BannerButtonsGroup
                className='self-end desktop:self-center'
                data-id='banner-buttons-group'
                buttonsConfig={buttonsConfig}
                classes={classes}
              />
            </div>
          </div>

          {isDesktop && advantage}
        </ResponsiveContainer>
      </section>
      {isMobile && advantage}
    </>
  )
}
