import type { FooterPhones } from '../model/types'
import { PhoneView } from '$/shared/ui'
import { cn, createPhoneNumber } from '$/shared/utils'

export type PhoneBlockClasses = {
  phonesRoot?: string
  phoneWrapper?: string
  phoneText?: string
  phoneLink?: string
}

interface PhonesBlockProps {
  phones: FooterPhones[]
  classes?: PhoneBlockClasses
}

export const PhonesBlock = ({ phones, classes }: PhonesBlockProps) => {
  return (
    <div className={cn('flex flex-col gap-4 desktop:items-end', classes?.phonesRoot)}>
      {phones?.map(({ phone, text }) => (
        <PhoneView
          key={phone}
          phone={createPhoneNumber(phone)}
          text={text}
          classes={{
            root: cn(classes?.phoneWrapper),
            text: cn('text-color-footer', classes?.phoneText),
            link: cn('text-color-white mobile:m-0', classes?.phoneLink)
          }}
        />
      ))}
    </div>
  )
}
