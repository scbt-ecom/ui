import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

const defaultTitle = 'Спасибо за оценку!'

export type FinallyClasses = {
  wrapper?: string
  icon?: string
  title?: string
}

export interface FinallyProps {
  title?: string
  classes?: FinallyClasses
}

export const Finally = ({ title = defaultTitle, classes }: FinallyProps) => {
  return (
    <div className={cn('flex flex-col items-center gap-4 text-center', classes?.wrapper)}>
      <Icon name='status/succesCircle' className={cn(classes?.icon)} />
      <p className={cn('desk-body-medium-l', classes?.title)}>{title}</p>
    </div>
  )
}
