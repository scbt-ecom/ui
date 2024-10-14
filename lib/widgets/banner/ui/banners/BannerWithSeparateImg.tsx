import { type IBannerProps } from '../../Banner'
import money from '../../money.png'
import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { cn, Heading, ResponsiveContainer } from '$/hybrid'
import { Advantages } from '$/widgets/Advantages'

export const BannerWithSeparateImg = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantagesList,
  classes
}: Omit<IBannerProps, 'bannerVariant'>) => {
  return (
    <section data-id='banner-section' className={cn('desktop:h-[456px] bg-banner-skyblue-300 pb-6 relative', classes?.section)}>
      <ResponsiveContainer data-id='banner-container' className={cn(classes?.container)}>
        <div
          data-id='banner-grid'
          className={cn('grid mobile:justify-center grid-mob-apply desktop:grid-desk-apply', classes?.wrapper)}
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

          <BannerButtonsGroup buttonsConfig={buttonsConfig} classes={classes} />

          <div
            data-id='banner-image-wrapper'
            className={cn('w-full h-[362px] grid-image-apply desktop:w-[550px] desktop:h-full', classes?.imageContainer)}
          >
            <img data-id='banner-image' src={money} alt='money' className={cn('w-full h-full object-contain', classes?.image)} />
          </div>
        </div>

        <div
          data-id='banner-advantages'
          className={cn('absolute bottom-[-400px] translate-x-1/2 right-1/2 desktop:bottom-[-50px]', classes?.advantages)}
        >
          {advantagesList && advantagesList?.length > 0 && <Advantages advantagesList={advantagesList} />}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
