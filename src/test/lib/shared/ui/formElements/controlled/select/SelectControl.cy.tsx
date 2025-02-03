import * as constants from './constants'
import { ComponentFactory } from '@/test/utils'
import { Controlled } from '$/shared/ui'

describe('Test cases for Controlled.SelectControl', () => {
  const factory = new ComponentFactory(Controlled.SelectControl)

  it('Should render and select value correctly', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: constants.selectBaseProps,
        schema: constants.baseSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="select"]').as('select')
    cy.get('[data-test-id="submit"]').as('submit')
    // it should be visible
    cy.get('@select').should('be.visible')
    // try to pick some value
    cy.get('@select')
      .click()
      .then(() => {
        cy.get('[data-test-id="select-item-0"]').click()
      })
    // submit form
    cy.get('@submit').click()

    // check that select is not invalid
    cy.get('@select', { timeout: 5000 }).should('have.attr', 'aria-invalid', 'false')
  })

  it('Should render and select multiple value correctly', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: {
          ...constants.selectBaseProps,
          isMulti: true
        },
        schema: constants.multipleSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="select"]').as('select')
    cy.get('[data-test-id="submit"]').as('submit')
    // it should be visible
    cy.get('@submit').should('be.visible')
    // try to pick values
    cy.get('@select')
      .click()
      .then(() => {
        cy.get('[data-test-id="select-item-0"]').click()
        cy.get('[data-test-id="select-item-1"]').click()
        // close list after values are selected
        cy.clickOutside()
      })
    // submit form
    cy.get('@submit').click()

    // check that select is not invalid
    cy.get('@select', { timeout: 5000 }).should('have.attr', 'aria-invalid', 'false')
  })

  it('Should render and not submitted empty values', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: {
          ...constants.selectBaseProps,
          isMulti: true
        },
        schema: constants.multipleSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="select"]').as('select')
    cy.get('[data-test-id="submit"]').as('submit')
    // it should be visible
    cy.get('@submit').should('be.visible')
    // submit form
    cy.get('@submit').click()

    // check that select is invalid
    cy.get('@select', { timeout: 5000 }).should('have.attr', 'aria-invalid', 'true')
  })

  it('Should be disabled', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: {
          ...constants.selectBaseProps,
          disabled: true
        },
        schema: constants.baseSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="select"]').as('select')
    // it should be visible
    cy.get('@select').should('be.visible')

    // check that select have data-disabled attribute
    cy.get('@select').should('have.attr', 'data-headlessui-state', 'disabled')
  })

  it('Should be invalid', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: constants.selectBaseProps,
        schema: constants.baseSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="select"]').as('select')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')
    // submit form
    cy.get('@submit').click()

    cy.get('@form', { timeout: 5000 }).within(() => {
      // check that error message is visible
      cy.get('@form').get('.desk-body-regular-m').should('be.visible')
      // and the field is invalid
      cy.get('@select').should('have.attr', 'aria-invalid', 'true')
    })
  })

  it('Should successfully submit optional field', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: constants.selectBaseProps,
        schema: constants.optionalSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="select"]').as('select')
    cy.get('[data-test-id="submit"]').as('submit')
    // try to submit form
    cy.get('@submit').click()
    // check that select is not invalid
    cy.get('@select').should('have.attr', 'aria-invalid', 'false')
  })

  it('Should find item by query and select value correctly', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: {
          ...constants.selectBaseProps,
          isSearchable: true
        },
        schema: constants.baseSchema
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="select"]').as('select')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="select-input"]').as('select-input')
    // try to find item
    cy.get('@select-input').type('Value 1')
    // check that select list contains found elements
    cy.get('[data-test-id="select-list"]').as('select-list').children().should('have.length.gt', 0).first().click()
    // check that select list closed
    cy.get('@select-list').should('not.exist')
    // submit form
    cy.get('@submit').click()

    // check that select is not invalid
    cy.get('@select', { timeout: 5000 }).should('have.attr', 'aria-invalid', 'false')
  })

  it('Should display custom empty list message', () => {
    cy.mount(
      factory.getFormProvider({
        args: constants.emptyListSelectBaseProps,
        schema: constants.baseSchema
      })
    )

    cy.get('[data-test-id="select"]').as('select')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="select-input"]').as('select-input')

    cy.get('@select-input').type('Ах ты волк')

    cy.get('[data-test-id="select-empty-message"]').should('exist').and('have.text', 'Я Лупа, а ты Пупа')
  })

  it('Should not display custom empty list message', () => {
    cy.mount(
      factory.getFormProvider({
        args: {
          ...constants.emptyListSelectBaseProps,
          emptyList: () => null
        },
        schema: constants.baseSchema
      })
    )

    cy.get('[data-test-id="select"]').as('select')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="select-input"]').as('select-input')

    cy.get('@select-input').type('Ах ты волк')

    cy.get('[data-test-id="select-empty-message"]').should('not.exist')
  })
})
