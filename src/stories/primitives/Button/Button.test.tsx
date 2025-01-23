// "pre-deploy": "npm run lint && npm run test -- --watch=false" for package json

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from '$/shared/ui'

describe('Тестирование Button', () => {
  const buttonTestid = 'test-button'

  it('Кнопка должна рендериться с правильным текстом', () => {
    const { asFragment } = render(<Button data-testid={buttonTestid}>Click me!</Button>)

    expect(asFragment()).toMatchSnapshot()

    const button = screen.getByTestId(buttonTestid)

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me!')
  })

  it('Кнопка должна быть отключена, когда свойство disabled равно true', () => {
    const { asFragment } = render(
      <Button disabled data-testid={buttonTestid}>
        Click me!
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()

    const button = screen.getByTestId(buttonTestid)

    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('Кнопка должна быть включена, когда свойство disabled равно false', () => {
    const { asFragment } = render(
      <Button disabled={false} data-testid={buttonTestid}>
        Click me!
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()

    const button = screen.getByTestId(buttonTestid)

    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('Кнопка должна отображать иконку слева до текста, если она передана', () => {
    const icon = (
      <span role='img' aria-label='icon'>
        🌟
      </span>
    )

    const { asFragment } = render(
      <Button data-testid={buttonTestid} iconLeft={icon}>
        Click me!
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()

    const button = screen.getByTestId(buttonTestid)
    const iconElement = screen.getByRole('img')
    const buttonText = screen.getByText('Click me!')

    expect(button).toBeInTheDocument()
    expect(button).toContainElement(iconElement)
    expect(button).toContainElement(buttonText)

    const buttonContent = button.textContent!
    expect(buttonContent.indexOf('🌟')).toBeLessThan(buttonContent.indexOf('Click me!'))
  })

  it('Кнопка должна отображать иконку справа после текста, если она передана', () => {
    const icon = (
      <span role='img' aria-label='icon'>
        🌟
      </span>
    )

    const { asFragment } = render(
      <Button data-testid={buttonTestid} iconRight={icon}>
        Click me!
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()

    const button = screen.getByTestId(buttonTestid)
    const iconElement = screen.getByRole('img')
    const buttonText = screen.getByText('Click me!')

    expect(button).toBeInTheDocument()
    expect(button).toContainElement(iconElement)
    expect(button).toContainElement(buttonText)

    const buttonContent = button.textContent!
    expect(buttonContent.indexOf('Click me!')).toBeLessThan(buttonContent.indexOf('🌟'))
  })

  it('На кнопку добавляется новый класс, если передается className', () => {
    const { asFragment } = render(
      <Button data-testid={buttonTestid} className='testClassName'>
        Click me!
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()

    const button = screen.getByTestId(buttonTestid)
    const buttonClassName = document.querySelector('.testClassName')

    expect(button).toBeInTheDocument()
    expect(buttonClassName).toBeInTheDocument()
  })

  it('Кнопка меняет тип, если передать type', () => {
    const { asFragment } = render(
      <Button data-testid={buttonTestid} type='reset'>
        Click me!
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()

    const button = screen.getByTestId(buttonTestid)

    expect(button).toBeInTheDocument()
    expect(button.getAttribute('type')).toBe('reset')
  })

  it('Кнопка применяет нужные стили при передаче props textFormat', () => {
    const { asFragment } = render(
      <Button data-testid={buttonTestid} textFormat='uppercase'>
        Click me!
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()

    const button = screen.getByTestId(buttonTestid)

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('uppercase')
  })
})
