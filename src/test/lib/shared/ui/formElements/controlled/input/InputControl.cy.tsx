import { inputDefaultProps, optionalSchema } from './constants'
import { ComponentFactory } from '@/test/utils'
import { Controlled } from '$/shared/ui'

describe('Test cases for Controlled.InputControl', () => {
  const factory = new ComponentFactory(Controlled.InputControl)

  it('Should render and pass value correctly', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: inputDefaultProps
      })
    )
    // create alias for testing component
    cy.get('[data-test-id="input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')
    // it should be visible
    cy.get('@input').should('be.visible')
    // try to type some value into component
    cy.get('@input')
      .type('some value')
      .then(() => {
        // and check that component contains typed value
        cy.get('@input').should('have.value', 'some value')
        cy.get('@submit').click()
        // check that field is not invalid
        cy.get('@input').should('have.attr', 'aria-invalid', 'false')
      })
  })

  it('Should be disabled', () => {
    // mount component before test case runs with disabled props
    cy.mount(
      factory.getFormProvider({
        args: {
          ...inputDefaultProps,
          disabled: true
        }
      })
    )
    // create alias for testing component
    cy.get('[data-test-id="input"]').as('input').should('be.visible')
    // check that component contains disabled property
    cy.get('@input').should('be.disabled')
  })

  it('Should be invalid', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: inputDefaultProps
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')
    // try to submit invalid values
    cy.get('@submit').click()
    // check that error message is visible
    cy.get('@form').get('.desk-body-regular-m').should('be.visible')
    // and the field is invalid
    cy.get('@input').should('have.attr', 'aria-invalid', 'true')
  })

  it('Should successfully submit optional field', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        schema: optionalSchema,
        defaultValues: {},
        args: inputDefaultProps
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="input"]').as('input')
    cy.get('[data-test-id="submit"]').as('submit')

    // try to submit empty form
    cy.get('@submit').click()
    // check that field is not invalid
    cy.get('@input').should('have.attr', 'aria-invalid', 'false')
  })
})
