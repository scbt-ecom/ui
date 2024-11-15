import { type IBannerProps } from '../../Banner'
import money from '../../money.png'
import { BannerButtonsGroup } from '../BannerButtonsGroup'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { Advantages } from '$/widgets/Advantages'

export const BannerWithSeparateImg = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantagesList,
  classes
}: Omit<IBannerProps, 'bannerVariant'>) => {
  const countButtons = Object.keys(buttonsConfig).reduce((acc, key) => (key ? acc + 1 : acc), 0)

  return (
    <section data-id='banner-section' className={cn('relative bg-banner-skyblue-300 pb-6 desktop:h-[456px]', classes?.section)}>
      <ResponsiveContainer data-id='banner-container' className={cn(classes?.container)}>
        <div
          data-id='banner-grid'
          className={cn('grid-mob-apply desktop:grid-desk-apply grid mobile:justify-center', classes?.wrapper)}
        >
          <div
            data-id='banner-text-block'
            className={cn('grid-text-apply mb-2 flex flex-col gap-4 pt-6 desktop:pb-10 desktop:pt-20', classes?.textBlock)}
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
            className={cn(
              'grid-image-apply w-full desktop:h-full desktop:w-[550px]',
              { 'h-[450px]': countButtons === 2 },
              { 'h-[410px]': countButtons === 1 },
              classes?.imageContainer
            )}
          >
            <img
              data-id='banner-image'
              src={money}
              alt={headTitle}
              className={cn('h-full w-full object-contain', classes?.image)}
            />
          </div>
        </div>

        <div
          data-id='banner-advantages'
          className={cn('absolute bottom-[-400px] right-1/2 translate-x-1/2 desktop:bottom-[-50px]', classes?.advantages)}
        >
          {advantagesList && advantagesList?.length > 0 && <Advantages advantagesList={advantagesList} />}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
