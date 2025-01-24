import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Uncontrolled } from '$/shared/ui'

describe('Test input component', () => {
  test('Default value in input', () => {
    render(<Uncontrolled.InputBase data-testid='input' value='Hello' label='Label 1' />)

    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Hello')
  })

  test('Onchange event input', async () => {
    const handleChange = vi.fn()

    const TestComponent = () => {
      const [value, setValue] = useState('')

      return (
        <Uncontrolled.InputBase
          label='label'
          data-testid='input'
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            handleChange(e)
          }}
        />
      )
    }

    render(<TestComponent />)

    const input = screen.getByTestId('input')
    await userEvent.type(input, 'Hello')

    expect(handleChange).toHaveBeenCalledTimes(5)
    expect(input).toHaveValue('Hello')
  })

  test('External handlers', async () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    const handleChange = vi.fn()
    const handleClick = vi.fn()

    render(
      <Uncontrolled.InputBase
        label='label'
        data-testid='input'
        externalHandlers={{ onFocus: handleFocus, onBlur: handleBlur, onChange: handleChange, onClick: handleClick }}
      />
    )

    const input = screen.getByTestId('input')

    await userEvent.click(input)
    expect(handleFocus).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledTimes(1)

    input.blur()
    expect(handleBlur).toHaveBeenCalledTimes(1)

    await userEvent.type(input, 'Hello')
    expect(handleChange).toHaveBeenCalledTimes(5)
  })

  test('Check disabled', () => {
    render(<Uncontrolled.InputBase disabled data-testid='input' label='label' />)

    const input = screen.getByTestId('input')
    expect(input).toBeDisabled()
  })

  test('Check invalid', () => {
    render(<Uncontrolled.InputBase invalid data-testid='input' label='label' />)

    const input = screen.getByTestId('input')
    expect(input).toBeInvalid()
  })

  test('Displays attachment', () => {
    render(<Uncontrolled.InputBase label='label' data-testid='input' attachmentProps={{ icon: <p>Icon</p> }} />)

    const attachment = screen.getByText('Icon')
    expect(attachment).toBeInTheDocument()
  })

  test('With render value props', () => {
    render(<Uncontrolled.InputBase label='label' renderValues={() => <p>Render value</p>} data-testid='input' />)

    const input = screen.queryByTestId('input')
    const renderValueContent = screen.getByText('Render value')

    expect(input).toBeNull()
    expect(renderValueContent).toBeInTheDocument()
  })
})
