export const clickOutside = (x: number = 0, y: number = 0) => {
  return cy.get('body').click(x, y)
}

export type ClickOutside = typeof clickOutside
