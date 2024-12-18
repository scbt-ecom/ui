import type { IFooterPhones } from '../model/types'
import { PhoneView } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TPhoneBlockClasses = {
  phonesRoot?: string
  phoneWrapper?: string
  phoneText?: string
  phoneLink?: string
}

interface IPhonesBlockProps {
  phones: IFooterPhones[]
  classes?: TPhoneBlockClasses
}

export const PhonesBlock = ({ phones, classes }: IPhonesBlockProps) => {
  return (
    <div className={cn('flex flex-col gap-4 desktop:items-end', classes?.phonesRoot)}>
      {phones?.map(({ phone, text }) => (
        <PhoneView
          key={phone}
          phone={phone}
          text={text}
          classes={{
            wrapper: cn(classes?.phoneWrapper),
            text: cn('text-color-footer', classes?.phoneText),
            link: cn('text-color-white mobile:m-0', classes?.phoneLink)
          }}
        />
      ))}
    </div>
  )
}
