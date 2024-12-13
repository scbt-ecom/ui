import { itemConfig } from '../model/cva'
import { type ITextItem } from '../model/types'
import { Icon, Popover } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const TextItem = ({ data, intent }: ITextItem) => {
  const { title, description, popoverText } = data
  return (
    <li className={cn(itemConfig({ intent }))}>
      <div className='desktop:max-w-[264px]'>
        <div className={cn('mb-2 flex items-center gap-2')}>
          <h4 className={cn('mob-title-bold-m text-color-dark')}>{title}</h4>
          {popoverText && (
            <Popover triggerElement={<Icon className={cn('size-5 text-icon-blue-grey-600')} name='info/helpCircle' />}>
              {popoverText}
            </Popover>
          )}
        </div>

        <p className={cn('mob-body-regular-l text-color-secondary')}>{description}</p>
      </div>
    </li>
  )
}
