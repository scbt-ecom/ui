import type { ModalContentVariant } from '../../../model'
import { useBoolean } from '$/shared/hooks'
import { Modal } from '$/shared/ui'

export interface CalculatorModalProps {
  triggerText: string
  contentVariant: ModalContentVariant
  modalTitle?: string
  description?: string
}

const renderModalContent = (contentVariant: ModalContentVariant) => {
  switch (contentVariant) {
    case 'content1':
      return <div>content 1</div>
    case 'content2':
      return <div>content 2</div>
  }
}

export const CalculatorModal = ({ triggerText, modalTitle, description, contentVariant }: CalculatorModalProps) => {
  const [isModalOpen, modalSetter] = useBoolean(false)

  return (
    <div className='flex flex-col gap-4 rounded-sm bg-color-blue-grey-100 p-4'>
      {description && <p className='desk-body-regular-l text-color-tetriary'>{description}</p>}
      <button
        onClick={() => modalSetter(true)}
        className='desk-body-regular-l w-max cursor-pointer text-color-primary-default underline underline-offset-4'
      >
        {triggerText}
      </button>
      <Modal title={modalTitle} isModalOpen={isModalOpen} closeModal={() => modalSetter(false)}>
        {renderModalContent(contentVariant)}
      </Modal>
    </div>
  )
}
