import { type IBannerProps } from '../../Banner'
import { BannerButtonsGroup } from '../BannerButtonsGroup'
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
  // const countButtons = Object.keys(buttonsConfig).reduce((acc, key) => (key ? acc + 1 : acc), 0)

  return (
    <section data-id='banner-section' className={cn('relative bg-banner-skyblue-300 desktop:h-[456px]', classes?.section)}>
      <ResponsiveContainer data-id='banner-container' className={cn(classes?.container)}>
        <div data-id='banner' className={cn('flex flex-col desktop:flex-row desktop:justify-between', classes?.wrapper)}>
          <div className='flex flex-col desktop:gap-10 desktop:pt-20'>
            <div data-id='banner-text-block' className={cn('mb-2 flex flex-col gap-4 pt-6 desktop:pt-0', classes?.textBlock)}>
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
            <img data-id='banner-image' src={img} alt='Картинка баннера' className={cn('h-full object-cover', classes?.image)} />
          </div>
        </div>

        <div
          data-id='banner-advantages'
          className={cn('absolute bottom-[-400px] right-1/2 translate-x-1/2 desktop:bottom-[-50px]', classes?.advantages)}
        >
          {advantagesList && advantagesList?.length > 0 && <Advantages classes={classes} advantagesList={advantagesList} />}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
