import { useState } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Modal } from './Modal'

describe('Тестрование компонента Modal', () => {
  it('Рендеринг модалки', () => {
    render(
      <Modal closeModal={() => true} isModalOpen={true} data-testid='modal'>
        <p>Some content</p>
      </Modal>
    )
    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('Рендеринг модалки после вызова колбека', async () => {
    const closeModalMock = vi.fn()
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button data-testid='open-modal-button' onClick={() => setOpen(true)}>
            Открыть модалку
          </button>
          <Modal closeModal={closeModalMock} isModalOpen={open} data-testid='modal'>
            <p>Some content</p>
          </Modal>
        </>
      )
    }
    render(<TestComponent />)

    expect(screen.queryByTestId('modal')).toBeNull()

    fireEvent.click(screen.getByTestId('open-modal-button'))

    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('Рендеринг модалки после вызова колбека без портала', async () => {
    const closeModalMock = vi.fn()
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button data-testid='open-modal-button' onClick={() => setOpen(true)}>
            Открыть модалку
          </button>
          <Modal isPortal={false} closeModal={closeModalMock} isModalOpen={open} data-testid='modal'>
            <p>Some content</p>
          </Modal>
        </>
      )
    }
    render(<TestComponent />)

    expect(screen.queryByTestId('modal')).toBeNull()

    fireEvent.click(screen.getByTestId('open-modal-button'))

    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })
  it('Закрытие модалки по клику на модалку', async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button data-testid='open-modal-button' onClick={() => setOpen(true)}>
            Открыть модалку
          </button>
          <Modal closeModal={() => setOpen(false)} isModalOpen={open} data-testid='modal'>
            <p>Some content</p>
          </Modal>
        </>
      )
    }
    render(<TestComponent />)

    fireEvent.click(screen.getByTestId('open-modal-button'))
    expect(screen.getByTestId('modal')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('modal'))
    await waitFor(() => expect(screen.queryByTestId('modal')).toBeNull())
  })
})
