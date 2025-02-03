import { baseSchema, dayPickerBaseProps } from './constants'
import { ComponentFactory } from '@/test/utils'
import { Controlled } from '$/shared/ui'

describe('Test cases for Controlled.DayPicker', () => {
  const factory = new ComponentFactory(Controlled.DayPickerControl)

  it('Should render and pick value correctly', () => {
    cy.mount(
      factory.getFormProvider({
        args: dayPickerBaseProps,
        schema: baseSchema
      })
    )

    cy.get('[data-test-id="day-picker"]').as('day-picker')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@day-picker').should('be.visible').focus()

    cy.get('[data-test-id="calendar"]', { timeout: 5000 }).as('calendar').should('exist').and('be.visible')

    cy.get('@calendar').get('tbody').children().first().click()

    cy.get('@submit').click()

    cy.get('@day-picker').should('have.attr', 'aria-invalid', 'false')
  })

  it('Should be disabled', () => {
    cy.mount(
      factory.getFormProvider({
        args: {
          ...dayPickerBaseProps,
          disabled: true
        },
        schema: baseSchema
      })
    )

    cy.get('[data-test-id="day-picker"]').as('day-picker')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@day-picker').should('be.visible').and('have.attr', 'disabled')
  })

  it('Should be invalid', () => {
    cy.mount(
      factory.getFormProvider({
        args: dayPickerBaseProps,
        schema: baseSchema
      })
    )

    cy.get('[data-test-id="day-picker"]').as('day-picker')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')

    cy.get('@submit').click()

    cy.get('@form', { timeout: 5000 }).within(() => {
      cy.get('@form').get('.desk-body-regular-m').should('be.visible')
      cy.get('@day-picker').should('have.attr', 'aria-invalid', 'true')
    })
  })

  it('Should be invalid with invalid date', () => {
    cy.mount(
      factory.getFormProvider({
        args: dayPickerBaseProps,
        schema: baseSchema
      })
    )

    cy.get('[data-test-id="day-picker"]').as('day-picker')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')

    cy.get('@day-picker')
      .type('50.50.5050')
      .then(() => {
        cy.get('@submit').click()
      })

    cy.get('@form', { timeout: 5000 }).within(() => {
      cy.get('@form').get('.desk-body-regular-m').should('be.visible')
      cy.get('@day-picker').should('have.attr', 'aria-invalid', 'true')
    })
  })

  it('Should be valid with filled correct date', () => {
    cy.mount(
      factory.getFormProvider({
        args: dayPickerBaseProps,
        schema: baseSchema
      })
    )

    cy.get('[data-test-id="day-picker"]').as('day-picker')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')

    cy.get('@day-picker')
      .type('10.10.2024')
      .then(() => {
        cy.get('@submit').click()
      })

    cy.get('@form', { timeout: 5000 }).within(() => {
      cy.get('@form').get('.desk-body-regular-m').should('not.exist')
      cy.get('@day-picker').should('have.attr', 'aria-invalid', 'false')
    })
  })
})
