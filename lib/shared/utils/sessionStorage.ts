import { TypeGuards } from './typeGuards'
import { isClient } from '$/shared/utils/isClient'

export const sessionStorageActions = {
  setItem: <T>(key: string, value: T): void => {
    if (!isClient) {
      return console.warn('Session storage can be used only in client side')
    }

    if (TypeGuards.isNil(value)) return

    const payload = JSON.stringify(value)

    sessionStorage.setItem(key, payload)
  },
  getItem: <T>(key: string): T | null => {
    if (!isClient) {
      console.warn('Session storage can be used only in client side')
      return null
    }

    const item = sessionStorage.getItem(key)

    if (TypeGuards.isNull(item)) return null

    try {
      return JSON.parse(item) as T
    } catch {
      return item as T
    }
  },
  clearItems: (...keys: string[]): void => {
    keys.forEach((key) => {
      sessionStorage.removeItem(key)
    })
  }
}
