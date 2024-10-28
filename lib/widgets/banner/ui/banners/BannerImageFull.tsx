import { type IBannerProps } from '../../Banner'
import saif from '../../saif.jpg'
import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { Advantages } from '$/widgets/Advantages'

export const BannerImageFull = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantagesList,
  classes
}: Omit<IBannerProps, 'bannerVariant'>) => {
  return (
    <section data-id='banner-section' className={cn('relative h-[552px] desktop:h-[456px]', classes?.section)}>
      <div
        data-id='banner-img-wrapper'
        className='absolute bottom-0 left-0 right-0 top-0 z-[-1] mx-auto h-full max-w-[1920px] desktop:h-[456px]'
      >
        <picture>
          <source
            media='(min-width: 1128px)'
            srcSet='https://sovcombank.ru/apply/credit/static/5a216aa0b1aa395335e71cb69fc3059f/7eb38/large.avif'
            type='image/avif'
          />
          <source
            media='(max-width: 1127px)'
            srcSet='https://sovcombank.ru/apply/credit/static/e71c554abd4a3a92ff79f048568de883/73d21/mob.avif'
            type='image/avif'
          />
          <img
            data-id='banner-image'
            src={saif}
            alt=' '
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
              'grid-text-apply flex flex-col gap-4 pt-6 mobile:w-[328px] desktop:pb-10 desktop:pt-20',
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
            className='mobile:self-end'
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
