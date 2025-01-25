import { useState } from 'react'
import { ComponentProvider } from '@/test/utils'
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
      <ComponentProvider
        title='Тестовое название'
        Component={Uncontrolled.SelectBase}
        args={{
          'data-test-id': 'select',
          label: 'Test',
          options
        }}
        decorator={(Component, props) => (
          <>
            <p>This applied from decorator</p>
            <Component {...props} />
          </>
        )}
        render={(props) => {
          const [value, setValue] = useState<SelectItemOption | SelectItemOption[] | undefined>()

          return (
            <Uncontrolled.SelectBase
              {...props}
              data-test-id='select'
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
