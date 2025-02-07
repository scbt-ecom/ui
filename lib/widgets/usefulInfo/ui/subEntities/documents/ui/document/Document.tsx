import { iconConfig, type IconNames, iconsMap } from './model/utils'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface DocumentProps {
  label: string
  size: string
  url: string
  iconType: IconNames
}

export const Document = ({ label, size, url, iconType }: DocumentProps) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      tabIndex={0}
      className={cn(
        'group flex w-full cursor-pointer items-center gap-2 rounded-sm p-1 outline outline-2 outline-transparent transition-colors focus-within:outline-primary-focus'
      )}
    >
      <Icon name={iconsMap[iconType]} className={cn(iconConfig({ iconType }))} />
      <div className={cn('flex flex-1 flex-col')}>
        <p className={cn('desk-body-medium-l text-color-dark')}>{label}</p>
        <div className={cn('desk-body-regular-m text-color-disabled')}>{Number(size)} КБ</div>
      </div>
    </a>
  )
}
