import { type HTMLAttributes, type ReactElement } from 'react'
import { cn } from '../utils'

interface IPhoneViewClasses {
  wrapper?: string
  link?: string
  text?: string
}

export interface IPhoneViewProps extends HTMLAttributes<HTMLDivElement> {
  phone: string | ReactElement
  text: string | ReactElement
  classes?: IPhoneViewClasses
}

export const PhoneView = ({ phone, text, classes, ...props }: IPhoneViewProps) => {
  return (
    <div className={cn('flex w-max flex-col', classes?.wrapper)} {...props}>
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
