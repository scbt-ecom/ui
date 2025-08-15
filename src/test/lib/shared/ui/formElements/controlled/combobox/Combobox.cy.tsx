import * as constants from './constants'
import { ComponentFactory } from '@/test/utils'
import { ComboboxControl } from '$/shared/ui'

describe('Test cases for ComboboxControl', () => {
  const factory = new ComponentFactory(ComboboxControl)

  it('Should render and select value correctly', () => {
    cy.mount(
      factory.getFormProvider({
        // @ts-expect-error FIXME: fix later
        args: constants.props,
        schema: constants.baseSchema
      })
    )

    cy.get('[data-test-id="combobox"]').as('combobox')
    cy.get('[data-test-id="combobox-input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@combobox').should('be.visible')

    cy.get('@input')
      .click()
      .then(() => {
        cy.get('[data-test-id="list-item-0"]').click()
        cy.get('@input').should('have.value', 'Value 1')
      })

    cy.get('@submit').click()
  })

  it('Should render and not submitted empty values', () => {
    cy.mount(
      factory.getFormProvider({
        // @ts-expect-error FIXME: fix later
        args: constants.props,
        schema: constants.baseSchema
      })
    )

    cy.get('[data-test-id="combobox"]').as('combobox')
    cy.get('[data-test-id="combobox-input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@combobox').should('be.visible')

    cy.get('@submit').click()

    cy.get('@input', { timeout: 5000 }).should('have.attr', 'aria-invalid', 'true')
  })

  it('Should be disabled', () => {
    cy.mount(
      factory.getFormProvider({
        // @ts-expect-error FIXME: fix later
        args: {
          ...constants.props,
          disabled: true
        },
        schema: constants.baseSchema
      })
    )

    cy.get('[data-test-id="combobox-input"]').as('input')

    cy.get('@input').should('have.attr', 'disabled', 'disabled')
  })

  it('Should be invalid', () => {
    cy.mount(
      factory.getFormProvider({
        // @ts-expect-error FIXME: fix later
        args: constants.props,
        schema: constants.baseSchema
      })
    )

    cy.get('[data-test-id="combobox-input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')

    cy.get('@submit').click()

    cy.get('@form', { timeout: 5000 }).within(() => {
      cy.get('@form').get('.desk-body-regular-m').should('be.visible')
      cy.get('@input').should('have.attr', 'aria-invalid', 'true')
    })
  })

  it('Should successfully submit optional field', () => {
    cy.mount(
      factory.getFormProvider({
        // @ts-expect-error FIXME: fix later
        args: constants.props,
        schema: constants.optionalSchema
      })
    )

    cy.get('[data-test-id="combobox-input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@submit').click()

    cy.get('@input').should('have.attr', 'aria-invalid', 'false')
  })
})
