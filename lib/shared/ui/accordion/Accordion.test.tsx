import { fireEvent, render, screen } from '@testing-library/react'
import { Accordion } from '$/shared/ui'

describe('Test Accordion component', () => {
  test('Accordion renders', () => {
    render(
      <Accordion label='Label 1' defaultOpen data-testid='accordtion'>
        Some content
      </Accordion>
    )
    expect(screen.getByText('Some content')).toBeInTheDocument()
  })

  test('Renders Accordion with closed state by default', () => {
    render(
      <Accordion label='Label 1' defaultOpen={false} data-testid='accordion'>
        Some content
      </Accordion>
    )
    expect(screen.queryByText('Some content')).toBeNull()
  })

  test('Accordion toggles open/close state on click', () => {
    render(
      <Accordion label='Label 1' defaultOpen={false} data-testid='accordion'>
        Some content
      </Accordion>
    )
    expect(screen.queryByText('Some content')).toBeNull()

    fireEvent.click(screen.getByText('Label 1'))

    expect(screen.getByText('Some content')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Label 1'))

    expect(screen.queryByText('Some content')).toBeNull()
  })

  test('Supports custom icons', () => {
    render(
      <Accordion label='Label 1' defaultOpen icon={<span data-testid='custom-icon'>Icon</span>} data-testid='accordion'>
        Some content
      </Accordion>
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })
})
