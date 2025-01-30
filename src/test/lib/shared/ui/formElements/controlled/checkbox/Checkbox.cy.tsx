import { baseSchema, checkboxDefaultProps, optionalSchema } from './constants'
import { ComponentFactory } from '@/test/utils'
import { Controlled } from '$/shared/ui'

describe('Test cases for Controlled.CheckboxControl', () => {
  const factory = new ComponentFactory(Controlled.CheckboxControl)

  it('Should render and pass value correctly', () => {
    cy.mount(
      factory.getFormProvider({
        args: checkboxDefaultProps,
        schema: baseSchema
      })
    )
    cy.get('[data-test-id="checkbox"]').as('checkbox')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('@checkbox').should('be.visible')
    cy.get('@checkbox')
      .click()
      .then(() => {
        cy.get('@checkbox').should('have.attr', 'data-state', 'checked')
        cy.get('@submit').click()
        cy.get('@checkbox').should('have.attr', 'aria-invalid', 'false')
      })
  })

  it('Should be disabled', () => {
    cy.mount(
      factory.getFormProvider({
        args: {
          ...checkboxDefaultProps,
          disabled: true
        }
      })
    )
    cy.get('[data-test-id="checkbox"]').as('checkbox').should('be.visible')
    cy.get('@checkbox').should('be.disabled')
  })

  it('Should be invalid', () => {
    cy.mount(
      factory.getFormProvider({
        args: checkboxDefaultProps
      })
    )

    cy.get('[data-test-id="checkbox"]').as('checkbox')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')

    cy.get('@submit').click()

    cy.get('@form').get('.desk-body-regular-m').should('be.visible')

    cy.get('@checkbox').should('have.attr', 'aria-invalid', 'true')
  })

  it('Should successfully submit optional field', () => {
    cy.mount(
      factory.getFormProvider({
        schema: optionalSchema,
        defaultValues: {},
        args: checkboxDefaultProps
      })
    )

    cy.get('[data-test-id="checkbox"]').as('checkbox')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@submit').click()
    cy.get('@checkbox').should('have.attr', 'aria-invalid', 'false')
  })
})
