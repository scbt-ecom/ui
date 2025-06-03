import type { ModalContentVariant } from '../../../model'
import { useBoolean } from '$/shared/hooks'
import { Modal, type ModalProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type CalculatorModalClasses = {
  wrapper?: string
  description?: string
  button?: string
}

export interface CalculatorModalProps {
  triggerText: string
  contentVariant: ModalContentVariant
  modalTitle?: string
  description?: string
  classes?: CalculatorModalClasses
  modalProps?: ModalProps
}

const renderModalContent = (contentVariant: ModalContentVariant) => {
  switch (contentVariant) {
    case 'content1':
      return <div>content 1</div>
    case 'content2':
      return <div>content 2</div>
  }
}

export const CalculatorModal = ({
  triggerText,
  modalTitle,
  description,
  classes,
  modalProps,
  contentVariant
}: CalculatorModalProps) => {
  const [isModalOpen, modalSetter] = useBoolean(false)

  return (
    <div className={cn('flex flex-col gap-4 rounded-sm bg-color-blue-grey-100 p-4', classes?.wrapper)}>
      {description && <p className={cn('desk-body-regular-l text-color-tetriary', classes?.description)}>{description}</p>}
      <button
        onClick={() => modalSetter(true)}
        className={cn(
          'desk-body-regular-l w-max cursor-pointer text-color-primary-default underline underline-offset-4',
          classes?.button
        )}
      >
        {triggerText}
      </button>
      <Modal title={modalTitle} isModalOpen={isModalOpen} closeModal={() => modalSetter(false)} {...modalProps}>
        {renderModalContent(contentVariant)}
      </Modal>
    </div>
  )
}
