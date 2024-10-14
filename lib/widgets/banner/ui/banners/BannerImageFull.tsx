import { type IBannerProps } from '../../Banner'
import shield from '../../shield.jpg'
import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { cn, Heading, ResponsiveContainer } from '$/hybrid'
import { Advantages } from '$/widgets/Advantages'

export const BannerImageFull = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantagesList,
  classes
}: Omit<IBannerProps, 'bannerVariant'>) => {
  return (
    <section data-id='banner-section' className={cn('desktop:h-[456px] h-[552px] relative', classes?.section)}>
      <div
        data-id='banner-img-wrapper'
        className='max-w-[1920px] mx-auto top-0 bottom-0 right-0 left-0 h-full desktop:h-[456px] absolute z-[-1]'
      >
        <img
          data-id='banner-image'
          src={shield}
          alt='сейф'
          className={cn('w-full h-full object-cover object-center', classes?.image)}
        />
      </div>
      <ResponsiveContainer data-id='banner-container' className={cn('h-full pb-6', classes?.container)}>
        <div
          data-id='banner-grid'
          className={cn(
            'grid mobile:justify-center h-full grid-rows-[repeat(2,_min-content)] grid-mob-full-img-apply desktop:grid-desk-full-img-apply',
            classes?.wrapper
          )}
        >
          <div
            data-id='banner-text-block'
            className={cn('grid-text-apply gap-4 pt-6 desktop:pt-20 desktop:pb-10 flex flex-col', classes?.textBlock)}
          >
            <Heading data-id='banner-title' as='h1' className={cn('text-color-dark', classes?.title)}>
              {headTitle}
            </Heading>
            <p data-id='banner-subtitle' className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}>
              {subtitle}
            </p>
          </div>

          <BannerButtonsGroup
            className='mobile:self-end'
            data-id='banner-buttons-group'
            buttonsConfig={buttonsConfig}
            classes={classes}
          />
        </div>

        <div data-id='banner-advantages' className={cn('absolute bottom-[-400px] desktop:bottom-[-50px]', classes?.advantages)}>
          {advantagesList && advantagesList?.length > 0 && (
            <Advantages data-id='banner-advantages-list' advantagesList={advantagesList} />
          )}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
