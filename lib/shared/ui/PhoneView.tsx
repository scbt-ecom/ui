import { type ReactElement } from 'react'
import { cn } from '../utils'

interface IPhoneViewClasses {
  wrapper: string
  link: string
  text: string
}

export interface IPhoneViewProps {
  phone: string | ReactElement
  text: string | ReactElement
  classes?: Partial<IPhoneViewClasses>
}
export const PhoneView = ({ phone, text, classes }: IPhoneViewProps) => {
  return (
    <div className={cn('flex w-max flex-col', classes?.wrapper)}>
      <a href={`tel:${phone}`} className={cn('desk-body-medium-l ml-auto text-color-dark', classes?.link)}>
        {phone}
      </a>
      <p className={cn('desk-body-regular-l text-color-tetriary', classes?.text)}>{text}</p>
    </div>
  )
}
