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
    <section className={cn('desktop:h-[456px] bg-banner-skyblue-300 relative', classes?.section)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn('grid grid-mob-apply desktop:grid-desk-apply', classes?.wrapper)}>
          <div className={cn('grid-text-apply gap-4 pt-6 desktop:pt-20 desktop:pb-10 flex flex-col', classes?.textBlock)}>
            <Heading as='h1' className={cn('text-color-dark', classes?.title)}>
              {headTitle}
            </Heading>
            <p className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}>{subtitle}</p>
          </div>

          <BannerButtonsGroup buttonsConfig={buttonsConfig} classes={classes} />

          <div className={cn('w-full h-[410px] grid-image-apply desktop:w-[550px] desktop:h-full', classes?.imageContainer)}>
            <img src={money} alt='money' className={cn('w-full h-full object-contain', classes?.image)} />
          </div>
        </div>

        <div className={cn('absolute bottom-[-400px] desktop:bottom-[-50px]', classes?.advantages)}>
          {advantagesList && advantagesList?.length > 0 && <Advantages advantagesList={advantagesList} />}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
