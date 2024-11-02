import type { IFooterPhones } from '../model/types'
import { PhoneView } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TPhoneBlockClasses = {
  phonesRoot: string
  phoneWrapper: string
  phoneText: string
  phoneLink: string
}

interface IPhonesBlockProps {
  phones: IFooterPhones[]
  classes?: Partial<TPhoneBlockClasses>
}

export const PhonesBlock = ({ phones, classes }: IPhonesBlockProps) => {
  return (
    <div className={cn('flex flex-col items-end gap-4', classes?.phonesRoot)}>
      {phones?.map(({ phone, text }) => (
        <PhoneView
          key={phone}
          phone={phone}
          text={text}
          classes={{
            wrapper: cn(classes?.phoneWrapper),
            text: cn('text-color-footer', classes?.phoneText),
            link: cn('text-color-white', classes?.phoneLink)
          }}
        />
      ))}
    </div>
  )
}
