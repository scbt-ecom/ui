import { optionalSchema, textareaDefaultProps } from './constants'
import { ComponentFactory } from '@/test/utils'
import { TextareaControl } from '$/shared/ui'

describe('Test cases for TextareaControl', () => {
  const factory = new ComponentFactory(TextareaControl)

  it('Should render and pass value correctly', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: textareaDefaultProps
      })
    )
    // create alias for testing component
    cy.get('[data-test-id="textarea"]').as('textarea')
    cy.get('[data-test-id="submit"]').as('submit')
    // it should be visible
    cy.get('@textarea').should('be.visible')
    // try to type some value into component
    cy.get('@textarea')
      .type('some value', { timeout: 5000 })
      .then(() => {
        // and check that component contains typed value
        cy.get('@textarea').should('have.value', 'some value')
        cy.get('@submit').click()
        // check that field is not invalid
        cy.get('@textarea').should('have.attr', 'aria-invalid', 'false')
      })
  })

  it('Should be disabled', () => {
    // mount component before test case runs with disabled props
    cy.mount(
      factory.getFormProvider({
        args: {
          ...textareaDefaultProps,
          disabled: true
        }
      })
    )
    // create alias for testing component
    cy.get('[data-test-id="textarea"]').as('textarea').should('be.visible')
    // check that component contains disabled property
    cy.get('@textarea').should('be.disabled')
  })

  it('Should be invalid', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        args: textareaDefaultProps
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="textarea"]').as('textarea')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')
    // try to submit invalid values
    cy.get('@submit').click()
    // check that error message is visible
    cy.get('@form').get('.desk-body-regular-m').should('be.visible')
    // and the field is invalid
    cy.get('@textarea').should('have.attr', 'aria-invalid', 'true')
  })

  it('Should successfully submit optional field', () => {
    // mount component before test case runs
    cy.mount(
      factory.getFormProvider({
        schema: optionalSchema,
        defaultValues: {},
        args: textareaDefaultProps
      })
    )

    // create alias for testing component
    cy.get('[data-test-id="textarea"]').as('textarea')
    cy.get('[data-test-id="submit"]').as('submit')

    // try to submit empty form
    cy.get('@submit').click()
    // check that field is not invalid
    cy.get('@textarea').should('have.attr', 'aria-invalid', 'false')
  })

  it('Should visible attachment', () => {
    cy.mount(
      factory.getFormProvider({
        schema: optionalSchema,
        defaultValues: {},
        args: {
          ...textareaDefaultProps,
          attachmentProps: {
            icon: <p>🐱‍🐉</p>
          }
        }
      })
    )

    cy.get('[data-test-id="textarea"]').as('textarea')
    cy.get('[data-test-id="textarea-root"]').as('root')

    cy.get('@root')
      .children()
      .each(($item, i) => {
        if (i === 1) {
          cy.wrap($item).should('have.text', '🐱‍🐉')
        }
      })
  })
})
