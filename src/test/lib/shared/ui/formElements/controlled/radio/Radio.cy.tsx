import { baseSchema, optionalSchema, radioDefaultProps, radioPropsWithDisabledOption } from './constants'
import { ComponentFactory } from '@/test/utils'
import { Controlled } from '$/shared/ui'

describe('Test cases for Controlled.RadioGroupControl', () => {
  const factory = new ComponentFactory(Controlled.RadioGroupControl)

  it('Should render and pass value correctly', () => {
    cy.mount(
      factory.getFormProvider({
        args: radioDefaultProps,
        schema: baseSchema,
        defaultValues: {
          field: null
        }
      })
    )
    cy.get('[data-test-id="radio"]').as('radio')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@radio').should('be.visible')
    cy.get('[data-test-id="radio-item-4"]')
      .click()
      .then(($item) => {
        cy.wrap($item).should('have.attr', 'aria-checked', 'true')
      })
  })

  it('Should be disabled', () => {
    cy.mount(
      factory.getFormProvider({
        args: {
          ...radioDefaultProps,
          disabled: true
        }
      })
    )
    cy.get('[data-test-id="radio"]').as('radio').should('be.visible')
    cy.get('@radio').should('have.attr', 'data-disabled')
  })

  it('Should be invalid', () => {
    cy.mount(
      factory.getFormProvider({
        schema: baseSchema,
        args: {
          ...radioDefaultProps,
          invalid: true
        }
      })
    )

    cy.get('[data-test-id="radio"]').as('radio')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')

    cy.get('@submit').click()
    cy.get('@form').get('.desk-body-regular-m').should('be.visible')
    cy.get('@radio').should('have.attr', 'aria-invalid', 'true')
  })

  it('Should successfully submit optional field', () => {
    cy.mount(
      factory.getFormProvider({
        schema: optionalSchema,
        defaultValues: {},
        args: radioDefaultProps
      })
    )

    cy.get('[data-test-id="radio"]').as('radio')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@submit').click()
    cy.get('@radio').should('have.attr', 'aria-invalid', 'false')
  })

  it('Should ignore click to disabled option', () => {
    cy.mount(
      factory.getFormProvider({
        args: radioPropsWithDisabledOption,
        schema: baseSchema,
        defaultValues: {
          field: null
        }
      })
    )
    cy.get('[data-test-id="form"]').as('form')
    cy.get('[data-test-id="radio"]').as('radio')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="radio-item-0"]').as('radio-item-0')

    cy.get('@radio').should('be.visible')
    cy.get('@radio-item-0').should('have.attr', 'data-disabled')

    cy.get('@submit').click()
    cy.get('@form').get('.desk-body-regular-m').should('be.visible')
  })
})
