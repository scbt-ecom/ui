import { Icon } from '$/shared/ui'
import { type DropdownItemOption } from '$/shared/ui/dropdownList'
import { cn } from '$/shared/utils'

type CurrencyIconClasses = {
  root?: string
  divider?: string
  label?: string
  icon?: string
}

export interface CurrencyIconProps {
  currency: DropdownItemOption | null
  classes?: CurrencyIconClasses
  open: boolean
}

export const CurrencyIcon = ({ currency, classes, open }: CurrencyIconProps) => {
  const { divider, root, icon, label } = classes ?? {}

  return (
    <>
      <div className={cn('h-4 w-[1px] bg-color-blue-grey-500', divider)} />
      <div className={cn('desk-body-regular-l flex items-center gap-1 text-color-tetriary', root)}>
        {currency?.attachment?.left}
        <span className={label}>{currency ? currency.label : 'CUR'}</span>
        <Icon
          name='arrows/arrowRight'
          className={cn(
            'size-6 rotate-90 duration-100',
            {
              '-rotate-90': open
            },
            icon
          )}
        />
      </div>
    </>
  )
}
