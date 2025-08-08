import { iconConfig, type IconNames, iconsMap } from './model/utils'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type DocumentClasses = {
  link?: string
  icon?: string
  wrapper?: string
  label?: string
  size?: string
}

export interface DocumentProps {
  label: string
  size: string
  url: string
  iconType: IconNames
  classes?: DocumentClasses
}

export const Document = ({ label, size, url, iconType, classes }: DocumentProps) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      tabIndex={0}
      className={cn(
        'group flex w-full cursor-pointer items-center gap-2 rounded-sm p-1 outline outline-2 outline-transparent transition-colors',
        classes?.link
      )}
    >
      <Icon name={iconsMap[iconType]} className={cn(iconConfig({ iconType }), classes?.icon)} />
      <div className={cn('flex flex-1 flex-col', classes?.wrapper)}>
        <p className={cn('desk-body-medium-l text-color-dark', classes?.label)}>{label}</p>
        <div className={cn('desk-body-regular-m text-color-disabled', classes?.size)}>{Number(size)} КБ</div>
      </div>
    </a>
  )
}
