import { cn } from '$/shared/utils'

export type AdditionalContentClasses = {
  wrapper?: string
  text?: string
  value?: string
}

export interface AdditionalContentProps {
  text?: string
  value?: number | string
  classes?: AdditionalContentClasses
  disabled?: boolean
}

export const AdditionalContent = ({ value, text, disabled, classes }: AdditionalContentProps) => {
  return (
    <>
      {(value || text) && (
        <div className={cn('flex flex-col gap-1', classes?.wrapper)}>
          <div
            className={cn('desk-body-medium-l font-bold text-color-dark', { 'text-color-disabled': disabled }, classes?.value)}
          >
            {value}
          </div>
          <div className={cn('desk-body-regular-m text-color-tetriary', { 'text-color-disabled': disabled }, classes?.text)}>
            {text}
          </div>
        </div>
      )}
    </>
  )
}
