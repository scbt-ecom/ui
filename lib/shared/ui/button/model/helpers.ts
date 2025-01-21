import { type ButtonConfig } from '../Button'

export const setButtonLoaderIntent = (intent: ButtonConfig['intent']) => {
  switch (intent) {
    case 'ghost':
    case 'secondary':
      return 'secondary'

    case 'primary':
    case 'negative':
      return 'primary'

    default:
      return intent
  }
}
