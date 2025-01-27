import { useState } from 'react'
import { ComponentFactory } from '@/test/utils'
import { Uncontrolled } from '$/shared/ui'

describe('Test cases for Uncontrolled.InputBase', () => {
  const componentFactory = new ComponentFactory(Uncontrolled.InputBase)

  it('Should update value correctly', () => {
    cy.mount(
      componentFactory.getComponentProvider({
        args: {
          label: 'Test',
          'data-test-id': 'input'
        },
        render: (props) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [value, setValue] = useState<string>('')

          const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setValue(event.target.value)
          }

          return <Uncontrolled.InputBase {...props} value={value} onChange={handleChange} />
        }
      })
    )

    cy.get('[data-test-id="input"]').as('input').type('Hello').should('have.value', 'Hello')
  })

  it('Should be disabled', () => {
    cy.mount(
      componentFactory.getComponentProvider({
        args: {
          label: 'Test',
          disabled: true,
          'data-test-id': 'input'
        }
      })
    )

    cy.get('[data-test-id="input"]').as('input').should('be.disabled')
  })
})
