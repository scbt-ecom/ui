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
      <Icon
        onClick={closeModal}
        name='general/close'
        className={cn('size-8 cursor-pointer text-icon-dark-hover', classes?.icon)}
      />
    </div>
  )
}
