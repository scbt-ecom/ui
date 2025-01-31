import { Component } from './BaseComponent'
import { ComponentFactory } from '@/test/utils/ComponentFactory'
import { Modal } from '$/shared/ui'

describe('Test cases for Modal', () => {
  const factory = new ComponentFactory(Modal)

  it('Should render and open by click', () => {
    cy.mount(<Component factory={factory} />)

    cy.get('[data-test-id="button"]').as('button')

    cy.get('@button').click()
    cy.get('[data-test-id="modal"]').as('modal')
    cy.get('@modal', { timeout: 5000 }).should('exist').and('be.visible')
  })

  it('Should be default open and close by click on overlay', () => {
    cy.mount(<Component factory={factory} defaultOpen />)

    cy.get('[data-test-id="modal-overlay"]').as('modal-overlay')

    cy.get('@modal-overlay').click('left')
    cy.get('[data-test-id="modal"]', { timeout: 5000 }).should('not.exist')
  })
})
