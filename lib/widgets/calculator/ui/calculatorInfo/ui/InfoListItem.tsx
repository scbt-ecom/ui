import { type CalculatorSuffix, type CalculatorValue, formatValueToRenderInfoItem } from '../../../model'
import { Icon, Popover } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type InfoListItemMode = CalculatorSuffix | 'text'
export type InfoListItemColor = 'dark' | 'blue'

export interface InfoListItemCommon {
  label: string
  mode: InfoListItemMode
  hint?: string
  accent?: boolean
  color?: InfoListItemColor
  withFormula?: boolean
}

export interface InfoListItemDTO extends InfoListItemCommon {
  value: CalculatorValue
}

export interface InfoListItemProps extends InfoListItemCommon {
  value: string
}

export const InfoListItem = ({ hint, value, label, mode, color = 'dark', accent = false }: InfoListItemProps) => {
  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex items-center gap-2'>
        <p className='desk-body-regular-l text-color-dark'>{label}</p>
        {hint && (
          <Popover
            withCloseBtn={false}
            triggerElement={<Icon className='size-5 text-icon-blue-grey-600' name='info/helpCircle' />}
          >
            <p>{hint}</p>
          </Popover>
        )}
      </div>
      <span
        className={cn('desk-body-medium-l text-color-dark', {
          '[&&]:desk-title-bold-s': accent,
          'text-color-primary-default': color === 'blue'
        })}
      >
        {formatValueToRenderInfoItem(mode, value)}
      </span>
    </div>
  )
}
