import { TypeGuards } from './typeGuards'

export const localStorageActions = {
  setItem: <T>(key: string, value: T): void => {
    if (TypeGuards.isNil(value)) {
      return
    }
    const stringifiesPayload = JSON.stringify(value)
    localStorage.setItem(key, stringifiesPayload)
  },

  getItem: <T>(key: string): T | null => {
    const item = localStorage.getItem(key)

    if (TypeGuards.isNull(item)) {
      return null
    }

    try {
      return JSON.parse(item) as T
    } catch {
      return item as T
    }
  },

  clearItems: (...keys: string[]): void => {
    keys.forEach((key) => {
      localStorage.removeItem(key)
    })
  }
}
