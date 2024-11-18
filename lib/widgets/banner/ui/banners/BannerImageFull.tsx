import { type IBannerProps } from '../../Banner'
import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { Advantages } from '$/widgets/Advantages'

export const BannerImageFull = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantagesList,
  classes,
  img,
  imgSets
}: Omit<IBannerProps, 'bannerVariant'>) => {
  return (
    <section data-id='banner-section' className={cn('relative h-[552px] desktop:h-[456px]', classes?.section)}>
      <div
        data-id='banner-img-wrapper'
        className='absolute bottom-0 left-0 right-0 top-0 z-[-1] mx-auto h-full max-w-[1920px] desktop:h-[456px]'
      >
        <picture>
          <source media='(min-width: 1128px)' srcSet={imgSets?.large} type='image/avif' />
          <source media='(max-width: 1127px)' srcSet={imgSets?.mob} type={imgSets?.type ?? 'image/avif'} />
          <img
            data-id='banner-image'
            src={img}
            alt='Картинка баннера'
            className={cn('h-full w-full object-cover object-center', classes?.image)}
          />
        </picture>
      </div>
      <ResponsiveContainer data-id='banner-container' className={cn('h-full pb-6', classes?.container)}>
        <div
          data-id='banner-grid'
          className={cn(
            'grid-mob-full-img-apply desktop:grid-desk-full-img-apply grid h-full grid-rows-[repeat(2,_min-content)]',
            classes?.wrapper
          )}
        >
          <div
            data-id='banner-text-block'
            className={cn(
              'grid-text-apply flex w-[328px] flex-col gap-4 pt-6 desktop:w-full desktop:pb-10 desktop:pt-20',
              classes?.textBlock
            )}
          >
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

        <div
          data-id='banner-advantages'
          className={cn('absolute bottom-[-400px] right-1/2 translate-x-1/2 desktop:bottom-[-50px]', classes?.advantages)}
        >
          {advantagesList && advantagesList?.length > 0 && (
            <Advantages data-id='banner-advantages-list' advantagesList={advantagesList} />
          )}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
