import type { mount } from 'cypress/react'
import type { ClickOutside } from './customCommands'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      clickOutside: ClickOutside
    }
  }
}
