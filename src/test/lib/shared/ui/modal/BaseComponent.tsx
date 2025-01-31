import { useState } from 'react'
import { type ComponentFactory } from '@/test/utils/ComponentFactory'
import { type Modal } from '$/shared/ui'

type ModalProps = React.ComponentPropsWithoutRef<typeof Modal>

type ComponentProps = {
  defaultOpen?: boolean
  factory: ComponentFactory<ModalProps>
}

export const Component = ({ defaultOpen = false, factory }: ComponentProps) => {
  const [open, setOpen] = useState<boolean>(defaultOpen)

  return factory.getComponentProvider({
    args: {
      isModalOpen: open,
      closeModal: () => setOpen(!open),
      children: <p>Я модалка</p>,
      title: 'Привет'
    },
    decorator: (Component, { children, ...props }) => (
      <>
        <button data-test-id='button' onClick={() => setOpen(true)}>
          Открыть модалку
        </button>
        <Component {...props}>{children}</Component>
      </>
    )
  })
}
