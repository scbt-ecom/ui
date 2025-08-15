// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as constants from './constants'
import { ComponentFactory } from '@/test/utils'
import { AutocompleteControl } from '$/shared/ui'

describe('Test cases for AutocompleteControl', () => {
  const factory = new ComponentFactory(AutocompleteControl)

  it('Should render and autocomplete value correctly', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: constants.autocompleteBaseProps,
        schema: constants.baseSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="autocomplete"]').as('autocomplete')
    cy.get('[data-test-id="combobox-input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')
    // it should be visible
    cy.get('@autocomplete').should('be.visible')
    // try to pick some value
    cy.get('@input')
      .click()
      .then(() => {
        cy.get('[data-test-id="list-item-0"]').click()
        cy.get('@input').should('have.value', 'Value 0')
      })
    // submit form
    cy.get('@submit').click()

    // check that autocomplete is not invalid
    cy.get('@input', { timeout: 5000 }).should('have.attr', 'aria-invalid', 'false')
  })

  it('Should render and not submitted empty values', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: {
          ...constants.autocompleteBaseProps
        },
        schema: constants.baseSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="combobox-input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')
    // it should be visible
    cy.get('@submit').should('be.visible')
    // submit form
    cy.get('@submit').click()

    // check that autocomplete is invalid
    cy.get('@input', { timeout: 5000 }).should('have.attr', 'aria-invalid', 'true')
  })

  it('Should be disabled', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: {
          ...constants.autocompleteBaseProps,
          disabled: true
        },
        schema: constants.baseSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="combobox-input"]').as('input')
    // it should be visible
    cy.get('@input').should('be.visible')

    // check that autocomplete have data-disabled attribute
    cy.get('@input').should('have.attr', 'disabled', 'disabled')
  })

  it('Should be invalid', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: constants.autocompleteBaseProps,
        schema: constants.baseSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="combobox-input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')
    // submit form
    cy.get('@submit').click()

    cy.get('@form', { timeout: 5000 }).within(() => {
      // check that error message is visible
      cy.get('@form').get('.desk-body-regular-m').should('be.visible')
      // and the field is invalid
      cy.get('@input').should('have.attr', 'aria-invalid', 'true')
    })
  })

  it('Should successfully submit optional field', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: constants.autocompleteBaseProps,
        schema: constants.optionalSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="combobox-input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')
    // try to submit form
    cy.get('@submit').click()
    // check that autocomplete is not invalid
    cy.get('@input').should('have.attr', 'aria-invalid', 'false')
  })
})
