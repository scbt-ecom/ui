import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvents from '@testing-library/user-event'
import { Uncontrolled } from '$/shared/ui'

describe('Test Checkbox component', () => {
  test('Default checked', () => {
    render(<Uncontrolled.CheckboxBase data-testid='checkbox' checked={true} />)

    const checkbox = screen.getByTestId('checkbox')

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
  })

  test('User trigger checkbox', async () => {
    const TestComponent = () => {
      const [checked, setChecked] = useState(false)

      return <Uncontrolled.CheckboxBase checked={checked} onCheckedChange={() => setChecked(!checked)} data-testid='checkbox' />
    }

    render(<TestComponent />)

    const checkbox = screen.getByTestId('checkbox')

    await userEvents.click(checkbox)
    expect(checkbox).toHaveAttribute('data-state', 'checked')
    await userEvents.click(checkbox)
    expect(checkbox).toHaveAttribute('data-state', 'unchecked')
  })

  test('Renders invalid checkbox', () => {
    render(<Uncontrolled.CheckboxBase data-testid='checkbox' invalid={true} />)

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass('border-negative')
    expect(checkbox).toBeInvalid()
  })

  test('Renders disabled checkbox', () => {
    render(<Uncontrolled.CheckboxBase data-testid='checkbox' disabled={true} />)

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeDisabled()
  })
})
