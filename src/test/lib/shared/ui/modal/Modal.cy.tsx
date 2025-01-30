import { useState } from 'react'
import { ComponentFactory } from '@/test/utils'
import { Modal } from '$/shared/ui'

describe('Test cases for Modal', () => {
  it('Should render and open by click', () => {
    const factory = new ComponentFactory(Modal)

    const Component = () => {
      const [open, setOpen] = useState<boolean>(false)

      return (
        <>
          {factory.getComponentProvider({
            args: {
              isModalOpen: open,
              closeModal: () => setOpen(!open),
              children: <p>Я модалка</p>,
              title: 'Привет'
            },
            decorator: (Component, props) => (
              <>
                <button data-test-id='button' onClick={() => setOpen(true)}>
                  Открыть модалку
                </button>
                <Component {...props} />
              </>
            )
          })}
        </>
      )
    }

    cy.mount(<Component />)

    cy.get('[data-test-id="button"]').as('button')

    cy.get('@button')
      .click()
      .then(() => {
        cy.get('[data-test-id="modal"]').as('modal')
        cy.get('@modal').should('be.visible')
      })
  })

  it('Should be default open and close by click on overlay', () => {
    const factory = new ComponentFactory(Modal)

    const Component = () => {
      const [open, setOpen] = useState<boolean>(true)

      return (
        <>
          {factory.getComponentProvider({
            args: {
              isModalOpen: open,
              closeModal: () => setOpen(!open),
              children: <p>Я модалка</p>,
              title: 'Привет'
            },
            decorator: (Component, props) => (
              <>
                <button data-test-id='button' onClick={() => setOpen(true)}>
                  Открыть модалку
                </button>
                <Component {...props} />
              </>
            )
          })}
        </>
      )
    }
    cy.mount(<Component />)

    cy.get('[data-test-id="modal-overlay"]').as('modal-overlay')

    cy.get('@modal-overlay', { timeout: 5000 })
      .click('left')
      .then(() => {
        cy.get('[data-test-id="modal"]').should('not.be.visible')
      })
  })
})
