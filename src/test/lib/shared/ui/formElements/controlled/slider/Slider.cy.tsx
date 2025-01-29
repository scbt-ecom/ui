import { baseSchema, sliderDefaultProps } from '@/test/lib/shared/ui/formElements/controlled/slider/constants'
import { ComponentFactory } from '@/test/utils'
import { Controlled } from '$/shared/ui'

describe('Test cases for Controlled.InputControl', () => {
  const factory = new ComponentFactory(Controlled.SliderControl)

  it('Should render and pass value correctly', () => {
    cy.mount(
      factory.getFormProvider({
        args: sliderDefaultProps,
        schema: baseSchema
      })
    )

    cy.get('[data-test-id="slider"]').as('slider')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@slider').should('be.visible')

    cy.get('@slider')
      .type('500000')
      .then(() => {
        cy.get('@slider').should('have.value', '500 000 ₽')
        cy.get('@submit').click()
        cy.get('[name="Slider"]').as('input')
        cy.get('@input').should('have.attr', 'aria-invalid', 'false')
      })
  })

  it('Should be disabled', () => {
    cy.mount(
      factory.getFormProvider({
        args: {
          ...sliderDefaultProps,
          disabled: true
        },
        schema: baseSchema
      })
    )

    cy.get('[data-test-id="slider"]').as('slider')
    cy.get('[name="Slider"]').as('input')

    cy.get('@input').should('be.disabled')
  })
})
