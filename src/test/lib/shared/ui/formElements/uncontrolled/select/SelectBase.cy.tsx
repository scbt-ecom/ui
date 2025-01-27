import { useState } from 'react'
import { ComponentFactory } from '@/test/utils'
import { type SelectItemOption, Uncontrolled } from '$/shared/ui'

const options: SelectItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1'
  },
  {
    value: 'value_2',
    label: 'Value 2'
  }
]

describe('Test cases for Uncontrolled.SelectBase', () => {
  const componentFactory = new ComponentFactory(Uncontrolled.SelectBase)

  let selectedValues: SelectItemOption | SelectItemOption[] | undefined
  const onSelectedValueChange = (value?: SelectItemOption | SelectItemOption[]) => {
    selectedValues = value
  }

  it('Should pick a first value', () => {
    cy.mount(
      componentFactory.getComponentProvider({
        args: {
          'data-test-id': 'select',
          label: 'Test',
          options,
          value: selectedValues,
          onChange: onSelectedValueChange
        }
      })
    )

    cy.get('[data-test-id="select"]').as('select')

    cy.get('@select').should('not.be.empty').should('have.text', 'Test').click()
    cy.get('[data-test-id="select-item-0"]').should('have.text', 'Value 1').click()

    cy.wait(1000).and(() => {
      expect(selectedValues).to.eq(options[0])
      onSelectedValueChange(undefined)
    })
  })

  it('Should pick multiple values', () => {
    cy.mount(
      componentFactory.getComponentProvider({
        args: {
          'data-test-id': 'select',
          label: 'Test',
          options,
          isMulti: true,
          value: selectedValues,
          onChange: onSelectedValueChange
        },
        render: ({ onChange, ...props }) => {
          // TODO: disable this rule cuz tests will run only before building project
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [value, setValue] = useState<SelectItemOption | SelectItemOption[] | undefined>()

          return (
            <Uncontrolled.SelectBase
              {...props}
              data-test-id='select'
              value={value}
              onChange={(value) => {
                setValue(value)
                if (onChange) onChange(value)
              }}
            />
          )
        }
      })
    )

    cy.get('[data-test-id="select"]').as('select')

    cy.get('@select').should('not.be.empty').should('have.text', 'Test').click()

    cy.get('[data-test-id="select-item-0"]').should('have.text', 'Value 1').click()
    cy.get('[data-test-id="select-item-1"]').should('have.text', 'Value 2').click()

    cy.wait(1000).and(() => {
      expect(selectedValues).to.length(2)
      onSelectedValueChange(undefined)
    })
  })
})
