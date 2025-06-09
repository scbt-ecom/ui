import { TypeGuards } from './typeGuards'

export const setSessionStorage = <T>(key: string, value: T) => {
  if (!sessionStorage) {
    return console.warn('Session storage can be used only in client side')
  }

  if (TypeGuards.isNil(value)) return

  const payload = JSON.stringify(value)

  sessionStorage.setItem(key, payload)
}

export const getSessionStorage = <T>(key: string): T | null => {
  if (!sessionStorage) {
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
}
