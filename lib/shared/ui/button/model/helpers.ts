import type { TButtonIntents } from '../Button'

export const setButtonLoaderIntent = (intent: TButtonIntents) => {
  switch (intent) {
    case 'ghost':
    case 'secondary':
      return 'secondary'

    case 'primary':
    case 'negative':
    case 'admin-accent':
    case 'admin-primary':
      return 'primary'

    default:
      return intent
  }
}
