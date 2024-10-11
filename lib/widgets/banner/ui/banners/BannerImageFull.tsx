import { type IBannerProps } from '../../Banner'
import shield from '../../shield.png'
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
    <section className={cn('desktop:h-[456px] relative', classes?.section)}>
      <img
        src={shield}
        alt='сейф'
        className={cn(
          'max-w-[1920px] mx-auto w-[1920px] top-0 bottom-0 right-0 left-0 desktop:h-[456px] absolute z-[-1]',
          classes?.image
        )}
      />
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn('grid grid-mob-full-img-apply desktop:grid-desk-full-img-apply', classes?.wrapper)}>
          <div className={cn('grid-text-apply gap-4 pt-6 desktop:pt-20 desktop:pb-10 flex flex-col', classes?.textBlock)}>
            <Heading as='h1' className={cn('text-color-white', classes?.title)}>
              {headTitle}
            </Heading>
            <p className={cn('desk-body-regular-l text-color-white', classes?.subtitle)}>{subtitle}</p>
          </div>

          <BannerButtonsGroup buttonsConfig={buttonsConfig} classes={classes} />
        </div>

        <div className={cn('absolute bottom-[-400px] desktop:bottom-[-50px]', classes?.advantages)}>
          {advantagesList && advantagesList?.length > 0 && <Advantages advantagesList={advantagesList} />}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
