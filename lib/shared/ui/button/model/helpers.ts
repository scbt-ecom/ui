import { type TButtonConfig } from '../Button'

export const setButtonLoaderIntent = (intent: TButtonConfig['intent']) => {
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
