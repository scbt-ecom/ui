import { inputOtpDefaultProps, optionalSchema } from './constants'
import { ComponentFactory } from '@/test/utils'
import { Controlled } from '$/shared/ui'

describe('Test cases for Controlled.InputControl', () => {
  const factory = new ComponentFactory(Controlled.InputOtpControl)

  it('Should render and pass value correctly', () => {
    cy.mount(
      factory.getFormProvider({
        args: inputOtpDefaultProps
      })
    )
    cy.get('[data-test-id="inputOtp"]').as('inputOtp')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('@inputOtp').should('be.visible')
    cy.get('@inputOtp')
      .type('1234')
      .then(() => {
        cy.get('@inputOtp').should('have.value', '1234')
        cy.get('@submit').click()
        cy.get('@inputOtp').should('have.attr', 'aria-invalid', 'false')
      })
  })

  it('Should be disabled', () => {
    cy.mount(
      factory.getFormProvider({
        args: {
          ...inputOtpDefaultProps,
          disabled: true
        }
      })
    )
    cy.get('[data-test-id="inputOtp"]').as('inputOtp').should('be.visible')
    cy.get('@inputOtp').should('be.disabled')
  })

  it('Should be invalid', () => {
    cy.mount(
      factory.getFormProvider({
        args: inputOtpDefaultProps
      })
    )

    cy.get('[data-test-id="inputOtp"]').as('inputOtp')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')
    cy.get('@submit').click()
    cy.get('@form').get('.desk-body-regular-m').should('be.visible')
    cy.get('@inputOtp').should('have.attr', 'aria-invalid', 'true')
  })

  it('Should successfully submit optional field', () => {
    cy.mount(
      factory.getFormProvider({
        schema: optionalSchema,
        defaultValues: {},
        args: inputOtpDefaultProps
      })
    )

    cy.get('[data-test-id="inputOtp"]').as('inputOtp')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@submit').click()
    cy.get('@inputOtp').should('have.attr', 'aria-invalid', 'false')
  })
})
