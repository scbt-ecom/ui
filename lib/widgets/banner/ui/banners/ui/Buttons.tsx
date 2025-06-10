import { ButtonWithHandlers } from '../../../../buttonWithHandlers'
import type { ButtonsConfig } from '../../../model'
import { cn } from '$/shared/utils'

export type ButtonsClasses = {
  group?: string
  primary?: string
  secondary?: string
}

interface ButtonsProps {
  classes?: ButtonsClasses
  buttonConfig: ButtonsConfig
}

export const Buttons = ({ buttonConfig, classes }: ButtonsProps) => {
  const { primary, secondary } = buttonConfig || {}

  return (
    <div
      className={cn(
        'grid-buttons-apply absolute bottom-6 left-1/2 flex w-full -translate-x-1/2 flex-col justify-self-center px-4 desktop:static desktop:left-auto desktop:max-w-full desktop:translate-x-0 desktop:flex-row desktop:justify-normal desktop:px-0',
        { 'flex items-center gap-4': secondary?.enabled },
        classes?.group
      )}
    >
      {primary.enabled && (
        <ButtonWithHandlers
          className={cn('w-full desktop:max-w-[216px]', classes?.primary)}
          size='lg'
          intent='primary'
          {...primary.buttonContent}
        />
      )}
      {secondary?.enabled && (
        <ButtonWithHandlers
          intent='secondary'
          size='lg'
          className={cn('w-full desktop:max-w-[216px]', classes?.secondary)}
          {...primary.buttonContent}
        />
      )}
    </div>
  )
}
