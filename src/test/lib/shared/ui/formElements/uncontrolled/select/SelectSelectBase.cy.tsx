import { useState } from 'react'
import { TestWrapper } from '@/test/utils'
import { type SelectItemOption, Uncontrolled } from '$/shared/ui'

const options: SelectItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1'
  }
]

describe('Test cases for Uncontrolled.SelectBase', () => {
  let selectedValues: SelectItemOption | SelectItemOption[] | undefined
  const onSelectedValueChange = (value?: SelectItemOption | SelectItemOption[]) => {
    selectedValues = value
  }

  beforeEach(() => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <TestWrapper
        title='Тестовое название'
        render={() => {
          const [value, setValue] = useState<SelectItemOption | SelectItemOption[] | undefined>()

          return (
            <Uncontrolled.SelectBase
              data-test-id='select'
              label='Test'
              options={options}
              value={value}
              onChange={(value) => {
                setValue(value)
                onSelectedValueChange(value)
              }}
            />
          )
        }}
      />
    )
  })

  it('Should pick a first value', () => {
    cy.get('[data-test-id="select"]').as('select')

    cy.get('@select').should('not.be.empty').should('have.text', 'Test').click()
    cy.get('[data-test-id="select-item-0"]').should('have.text', 'Value 1').click()

    cy.wait(1000).and(() => {
      expect(selectedValues).to.eq(options[0])
    })
  })
})
