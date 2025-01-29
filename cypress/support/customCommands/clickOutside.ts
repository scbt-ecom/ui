/**
 * Функция для клика на элемент `body`
 * @param x координата по оси x, `default: 0`
 * @param y координата по оси y, `default: 0`
 */
export const clickOutside = (x: number = 0, y: number = 0) => {
  return cy.get('body').click(x, y)
}

export type ClickOutside = typeof clickOutside
