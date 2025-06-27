import { baseSchema, switchDefaultProps } from './constants'
import { ComponentFactory } from '@/test/utils'
import { SwitchControl } from '$/shared/ui'

describe('Test cases for SwitchControl', () => {
  const factory = new ComponentFactory(SwitchControl)

  it('Should render and pass value correctly', () => {
    cy.mount(
      factory.getFormProvider({
        args: switchDefaultProps
      })
    )
    cy.get('[data-test-id="switch"]').as('switch')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('@switch').should('be.visible')
    cy.get('@switch')
      .click()
      .then(() => {
        cy.get('@switch').should('have.attr', 'data-state', 'checked')
        cy.get('@submit').click()
      })
  })

  it('Should checked twice', () => {
    cy.mount(
      factory.getFormProvider({
        args: switchDefaultProps
      })
    )
    cy.get('[data-test-id="switch"]').as('switch')
    cy.get('@switch')
      .click()
      .then(() => {
        cy.get('@switch').should('have.attr', 'data-state', 'checked')
      })

    cy.get('@switch')
      .click()
      .then(() => {
        cy.get('@switch').should('have.attr', 'data-state', 'unchecked')
      })
  })

  it('Should be disabled', () => {
    cy.mount(
      factory.getFormProvider({
        args: {
          ...switchDefaultProps,
          disabled: true
        }
      })
    )
    cy.get('[data-test-id="switch"]').as('switch').should('be.visible')
    cy.get('@switch').should('be.disabled')
  })

  it('Should successfully submit optional field', () => {
    cy.mount(
      factory.getFormProvider({
        schema: baseSchema,
        defaultValues: {},
        args: switchDefaultProps
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="switch"]').as('switch')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@submit').click()
    cy.get('@switch').should('have.attr', 'aria-invalid', 'false')
  })
})
