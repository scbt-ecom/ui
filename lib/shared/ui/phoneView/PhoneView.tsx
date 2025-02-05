import { type HTMLAttributes } from 'react'
import { formatPhoneNumber } from './helpers'
import { cn } from '$/shared/utils'

interface PhoneViewClasses {
  wrapper?: string
  link?: string
  text?: string
}

export interface PhoneViewProps extends HTMLAttributes<HTMLDivElement> {
  phone: string
  text: string
  classes?: PhoneViewClasses
}

export const PhoneView = ({ phone, text, classes, ...props }: PhoneViewProps) => {
  return (
    <div className={cn('flex w-max flex-col', classes?.wrapper)} {...props}>
      <a
        href={`tel:${phone}`}
        className={cn('mob-body-medium-l ml-auto text-color-dark desktop:desk-body-medium-l', classes?.link)}
      >
        {formatPhoneNumber(phone)}
      </a>
      <p className={cn('desk-body-regular-s text-color-tetriary', classes?.text)}>{text}</p>
    </div>
  )
}
