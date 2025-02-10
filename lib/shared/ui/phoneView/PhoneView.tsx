import { type HTMLAttributes } from 'react'
import { cn } from '$/shared/utils'

interface PhoneViewClasses {
  root?: string
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
    <div className={cn('flex w-max flex-col', classes?.root)} {...props}>
      <a
        href={`tel:${phone}`}
        className={cn('mob-body-medium-l ml-auto text-color-dark desktop:desk-body-medium-l', classes?.link)}
      >
        {phone}
      </a>
      <p className={cn('desk-body-regular-s text-color-tetriary', classes?.text)}>{text}</p>
    </div>
  )
}
