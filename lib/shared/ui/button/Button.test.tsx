import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Компонент Button', () => {
  test('Кнопка появилась', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  test('Проверка callback', () => {
    const handleClick = vi.fn(() => 5)
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveReturnedWith(5)
  })

  test('Проверка disabled кнопки', () => {
    render(<Button data-testid='button' disabled></Button>)
    expect(screen.getByTestId('button')).toBeDisabled()
  })

  test('Проверка disabled кнопки при загрузке', () => {
    render(<Button data-testid='button' isLoading></Button>)
    expect(screen.getByTestId('button')).toBeDisabled()
  })

  test('Проверка на левую и правую иконку', () => {
    render(
      <Button
        data-testid='button'
        iconRight={<span data-testid='icon-right'>Icon</span>}
        iconLeft={<span data-testid='icon-left'>Icon</span>}
      ></Button>
    )
    expect(screen.getByTestId('icon-left')).toBeInTheDocument()
    expect(screen.getByTestId('icon-right')).toBeInTheDocument()
  })
})
