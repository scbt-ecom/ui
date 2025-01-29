import { mount } from 'cypress/react'
import { clickOutside } from './clickOutside'
export type { ClickOutside } from './clickOutside'

/**
 * External commands
 *
 * After import custom command, don't forget to add declaration of your command into `/cypress/support/component.d.ts`
 */
export const registerCommands = () => {
  Cypress.Commands.addAll({
    mount,
    clickOutside
  })
}
