import { type ReactElement } from 'react'
import { Button, cn, Heading } from '@scbt-ecom/ui/hybrid'
import { useDevice } from '$/shared/hooks'
import { scrollToElement } from '$/shared/utils'

interface IBenefitItemProps {
  title: string
  description: string | ReactElement
  img?: string
  mobileImg?: boolean
  classes?: {
    item?: string
  }
  index: number
}

export const BenefitItem = ({ description, title, img, mobileImg, classes, index }: IBenefitItemProps) => {
  const { isDesktop } = useDevice()

  const button = (
    <>
      {index === 0 && isDesktop && (
        <Button intent='primary' className='desktop:w-[200px]' onClick={() => scrollToElement('personal_form')} size='lg'>
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
      <div className='flex flex-col items-start justify-between px-4 desktop:py-8 desktop:pl-8'>
        <div className='flex flex-col gap-4'>
          <Heading as='h4' className='desktop:desk-title-bold-s'>
            {title}
          </Heading>
          <p className='mob-body-regular-l text-icon-blue-grey-800 desktop:desk-body-regular-l'>{description}</p>
        </div>
        {button}
      </div>

      {(mobileImg || isDesktop) && (
        <div className='w-full'>
          <img className='h-[246px] object-cover' src={img} alt={title} />
        </div>
      )}
    </li>
  )
}
