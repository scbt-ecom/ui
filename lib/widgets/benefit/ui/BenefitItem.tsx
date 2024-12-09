import { type ReactElement } from 'react'
import { useDevice } from '$/shared/hooks'
import { Button, Heading } from '$/shared/ui'
import { cn, scrollToElement } from '$/shared/utils'

export type IBenefitItemClasses = {
  button?: string
  item?: string
  itemWrapper?: string
  itemTextContainer?: string
  itemDescription?: string
  img?: string
  imgWrapper?: string
  headingBenefitItem?: string
}

interface IBenefitItemProps {
  title: string
  description: string | ReactElement
  img?: string
  mobileImg?: boolean
  classes?: IBenefitItemClasses
  index: number
}

export const BenefitItem = ({ description, title, img, mobileImg, classes, index }: IBenefitItemProps) => {
  const { isDesktop } = useDevice()

  const button = (
    <>
      {index === 0 && isDesktop && (
        <Button
          intent='primary'
          className={cn('desktop:w-[200px]', classes?.button)}
          onClick={() => scrollToElement('personal_form')}
          size='lg'
        >
          Оформить заявку
        </Button>
      )}
    </>
  )

  return (
    <li
      key={img}
      className={cn(
        'flex flex-col overflow-hidden rounded-md bg-color-blue-grey-100 py-6 desktop:flex-row desktop:px-0 desktop:py-0 desktop:first:col-span-full',
        { 'pb-0': mobileImg },
        classes?.item
      )}
    >
      <div className={cn('flex flex-col items-start justify-between px-4 desktop:py-8 desktop:pl-8', classes?.itemWrapper)}>
        <div className={cn('flex flex-col gap-4', classes?.itemTextContainer)}>
          <Heading as='h4' className={cn('desktop:desk-title-bold-s', classes?.headingBenefitItem)}>
            {title}
          </Heading>
          <p className={cn('mob-body-regular-l text-icon-blue-grey-800 desktop:desk-body-regular-l', classes?.itemDescription)}>
            {description}
          </p>
        </div>
        {button}
      </div>

      {(mobileImg || isDesktop) && (
        <div className={cn('w-full', classes?.imgWrapper)}>
          <img className={cn('h-[246px] object-cover', classes?.img)} src={img} alt={title} />
        </div>
      )}
    </li>
  )
}
