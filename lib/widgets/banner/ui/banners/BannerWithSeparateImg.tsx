import { Advantages, Buttons } from './ui'
import { ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { type BannerProps, widgetIds } from '$/widgets'

export const BannerWithSeparateImg = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantages,
  classes,
  images,
  backgroundColor
}: Omit<BannerProps, 'bannerVariant'>) => {
  const advantagesExist = advantages?.details && advantages?.details?.items.length > 0

  return (
    <section
      id={widgetIds.banner}
      style={{ backgroundColor: backgroundColor ?? '#d9edff' }}
      data-test-id={widgetIds.banner}
      className={cn('', classes?.root)}
    >
      <ResponsiveContainer className={cn('relative desktop:h-[456px]', classes?.container)}>
        <div className={cn('flex flex-col desktop:flex-row desktop:justify-between', classes?.wrapper)}>
          <div className='flex flex-col desktop:gap-10 desktop:pt-20'>
            <div className={cn('flex flex-col gap-4 pt-6 desktop:pt-0', classes?.textBlock)}>
              <div
                dangerouslySetInnerHTML={{ __html: headTitle }}
                className={cn('mob-headline-bold-m text-color-dark desktop:desk-headline-bold-l', classes?.title)}
              />
              <div
                dangerouslySetInnerHTML={{ __html: subtitle }}
                className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}
              />
            </div>

            <Buttons
              buttonConfig={buttonsConfig}
              classes={{
                group: 'z-10'
              }}
            />
          </div>

          <div
            className={cn(
              'relative flex h-[356px] justify-center desktop:hidden desktop:h-[456px] desktop:w-[550px]',
              classes?.imageContainer
            )}
          >
            <img loading='eager' src={images?.mobile} alt={images?.alt} className='h-full object-contain' />
          </div>

          <div
            className={cn(
              'relative flex h-[356px] justify-center mobile:hidden desktop:h-[456px] desktop:w-[550px]',
              classes?.imageContainer
            )}
          >
            <img loading='eager' src={images?.desktop} alt={images?.alt} className='h-full object-contain' />
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

      {advantages?.enabled && advantagesExist && (
        <Advantages
          classes={{
            root: 'px-4 pt-4 mobile:bg-color-white desktop:hidden'
          }}
          {...advantages}
        />
      )}
    </section>
  )
}
