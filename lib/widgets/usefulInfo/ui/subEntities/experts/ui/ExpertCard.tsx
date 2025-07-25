import { cn } from '$/shared/utils'

export type ExpertCardClasses = {
  card?: string
  wrapper?: string
  avatar?: string
  textBlock?: string
  name?: string
  position?: string
  description?: string
}

export interface ExpertCardProps {
  name: string
  position: string
  description: string
  avatar: string
  classes?: ExpertCardClasses
}

export const ExpertCard = ({ name, position, avatar, description, classes }: ExpertCardProps) => {
  return (
    <div className={cn('flex flex-col gap-4 rounded-lg bg-[#F4F9FD] p-4', classes?.card)}>
      <div className={cn('flex items-center gap-4', classes?.wrapper)}>
        <img alt='expert avatar' src={avatar} className={cn('block size-10 rounded-full', classes?.avatar)} />
        <div className={cn('flex flex-col gap-1', classes?.textBlock)}>
          <span className={cn('desk-body-medium-l text-color-dark', classes?.name)}>{name}</span>
          <span className={cn('desk-body-regular-m text-color-tetriary', classes?.position)}>{position}</span>
        </div>
      </div>
      <div
        className={cn('desk-body-regular-l text-color-dark', classes?.description)}
        dangerouslySetInnerHTML={{ __html: description ?? '' }}
      />
    </div>
  )
}
