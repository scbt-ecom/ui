import { type ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { useDevice } from '$/shared/hooks'
import { Button, Heading } from '$/shared/ui'
import { cn, scrollToElement } from '$/shared/utils'
import { type AllowedBannerBackgroundColor } from '$/widgets/benefit/model'

export type BenefitItemClasses = {
  root?: string
  button?: string
  wrapper?: string
  textContainer?: string
  description?: string
  img?: string
  imgContainer?: string
  title?: string
}

const itemConfig = cva(
  'flex flex-col justify-between overflow-hidden rounded-md bg-color-blue-grey-100 py-6 desktop:flex-row desktop:px-0 desktop:py-0',
  {
    variants: {
      intent: {
        twoCards: '',
        threeCards: 'desktop:first:col-span-full',
        fourCards: 'desktop:first:col-span-2 desktop:last:col-span-2'
      }
    }
  }
)

export interface BenefitItemProps extends VariantProps<typeof itemConfig> {
  title: string
  description: string | ReactElement
  img?: string
  mobileImg?: boolean
  classes?: BenefitItemClasses
  withButton?: boolean
  buttonText?: string
  cardColor?: AllowedBannerBackgroundColor
}

export const BenefitItem = ({
  description,
  title,
  img,
  mobileImg,
  classes,
  withButton,
  buttonText,
  intent,
  cardColor
}: BenefitItemProps) => {
  const { isDesktop } = useDevice()

  const button = (
    <>
      <Button
        intent='primary'
        className={cn('desktop:w-[200px]', classes?.button)}
        onClick={() => scrollToElement({ widgetId: 'stepper' })}
        size='lg'
      >
        {buttonText}
      </Button>
    </>
  )

  return (
    <li
      key={img}
      className={cn(itemConfig({ intent }), { 'pb-0': mobileImg }, { 'pb-12': !mobileImg }, cardColor, classes?.root)}
    >
      <div className={cn('flex flex-col items-start justify-between px-4 desktop:px-8 desktop:py-8', classes?.wrapper)}>
        <div className={cn('flex flex-col gap-4', classes?.textContainer)}>
          <Heading as='h4' className={cn('desktop:desk-title-bold-s', classes?.title)}>
            {title}
          </Heading>
          <p className={cn('mob-body-regular-l text-icon-blue-grey-800 desktop:desk-body-regular-l', classes?.description)}>
            {description}
          </p>
        </div>
        {withButton && isDesktop && button}
      </div>

      {(mobileImg || isDesktop) && img && (
        <div className={cn('flex w-full justify-end', classes?.imgContainer)}>
          <img className={cn('h-[246px] object-cover', classes?.img)} src={img} alt={title} />
        </div>
      )}
    </li>
  )
}
