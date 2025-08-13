import type { Mask } from './types'

export const DEFAULT_PHONE = ['+7 (###) ### ##-##', '8 (###) ###-##-##']
export const DEFAULT_CAR = ['C###CC ##', 'C###CC ###']

export const defaultMask = new Map<Mask, Mask>([
  ['car', DEFAULT_CAR],
  ['phone', DEFAULT_PHONE]
])
