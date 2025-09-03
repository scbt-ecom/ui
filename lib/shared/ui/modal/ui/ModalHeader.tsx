import type { ModalProps } from '../Modal'
import { Heading, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TModalHeaderClasses = {
  header?: string
  title?: string
  icon?: string
}

export interface IModalHeaderProps extends Pick<ModalProps, 'closeModal' | 'title'> {
  classes?: TModalHeaderClasses
}

export const ModalHeader = ({ title, closeModal, classes }: IModalHeaderProps) => {
  return (
    <div className={cn('flex items-start justify-between gap-4', classes?.header)}>
      {title && (
        <Heading as='h3' className={cn('flex-1 text-color-dark', classes?.title)}>
          {title}
        </Heading>
      )}
      <span
        onClick={closeModal}
        onKeyDown={(event) => {
          if (event.key === 'Enter') closeModal()
        }}
        role='button'
        aria-label='Close modal'
        tabIndex={0}
        className={cn(
          'rounded-sm p-0.5 outline-none transition-colors hover:bg-color-blue-grey-200 focus-visible:bg-color-blue-grey-200'
        )}
      >
        <Icon
          name='general/close'
          className={cn('ml-auto size-6 cursor-pointer text-icon-dark-hover outline-0', classes?.icon)}
        />
      </span>
    </div>
  )
}
