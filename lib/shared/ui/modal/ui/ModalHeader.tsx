import * as React from 'react'
import { cn, Heading, Icon } from '$/hybrid'

export type TModalHeaderClasses = {
  header: string
  title: string
  icon: string
}

export interface IModalHeaderProps {
  title: string | React.ReactElement
  closeModal: () => void
  classes?: Partial<TModalHeaderClasses>
}

export const ModalHeader = ({ title, closeModal, classes }: IModalHeaderProps) => {
  return (
    <div className={cn('flex items-start justify-between gap-4', classes?.header)}>
      <Heading as='h3' className={cn('flex-1 text-color-dark', classes?.title)}>
        {title}
      </Heading>
      <Icon
        onClick={closeModal}
        name='general/close'
        className={cn('size-8 cursor-pointer text-icon-dark-hover', classes?.icon)}
      />
    </div>
  )
}
