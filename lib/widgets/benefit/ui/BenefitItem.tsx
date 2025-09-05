import { cva } from 'class-variance-authority'
import { type Details } from '../model/types'
import { useDevice } from '$/shared/hooks'
import { cn, TypeGuards } from '$/shared/utils'
import { ButtonWithHandlers } from '$/widgets/buttonWithHandlers'

export type BenefitItemClasses = {
  root?: string
  button?: string
  wrapper?: string
  textContainer?: string
  subtitle?: string
  img?: string
  imgContainer?: string
  title?: string
}

const itemConfig = cva(
  'flex flex-col justify-between overflow-hidden rounded-md bg-color-blue-grey-100 py-6 desktop:flex-row desktop:px-0 desktop:py-0',
  {
    variants: {
      variant: {
        twoCards: '',
        threeCards: 'desktop:first:col-span-full',
        fourCards: 'desktop:first:col-span-2 desktop:last:col-span-2'
      }
    }
  }
)

export interface BenefitItemProps extends Details {
  classes?: BenefitItemClasses
  variant?: 'twoCards' | 'threeCards' | 'fourCards'
}

export const BenefitItem = ({
  subtitle,
  title,
  img,
  classes,
  button,
  variant,
  color,
  enabledMobileButton,
  enabledMobileImage
}: BenefitItemProps) => {
  const { isDesktop } = useDevice()

  return (
    <li
      key={title}
      style={{ backgroundColor: color ?? '#F3F4F7' }}
      className={cn(itemConfig({ variant }), { 'pb-0': enabledMobileImage }, { 'pb-12': !enabledMobileImage }, classes?.root)}
    >
      <div className={cn('flex flex-col items-start justify-between px-4 desktop:px-8 desktop:py-8', classes?.wrapper)}>
        <div className={cn('flex flex-col gap-4', classes?.textContainer)}>
          <div dangerouslySetInnerHTML={{ __html: title }} className={cn('desktop:desk-title-bold-s', classes?.title)} />
          <div
            dangerouslySetInnerHTML={{ __html: subtitle }}
            className={cn('mob-body-regular-l text-icon-blue-grey-800 desktop:desk-body-regular-l', classes?.subtitle)}
          />
        </div>

        {enabledMobileButton && isDesktop && button?.handlerOptions && (
          <ButtonWithHandlers intent='primary' className={cn('desktop:w-[200px]', classes?.button)} size='lg' {...button} />
        )}
      </div>

      {(enabledMobileImage || isDesktop) && img && (
        <div className={cn('flex w-full justify-end', classes?.imgContainer)}>
          {img && 'url' in img && TypeGuards.isObject(img) ? (
            <img className={cn('h-[246px] object-cover', classes?.img)} src={img.url} alt={img.alt} />
          ) : (
            img
          )}
        </div>
      )}
    </li>
  )
}
