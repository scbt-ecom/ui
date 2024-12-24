import type { TAuthWrapperClasses, TLinksClasses } from '../ui/ui'
import { type AUTH_PROVIDER_MODE } from './helpers'
import type { ILoaderProps } from '$/shared/ui'

export type TCombineClasses = {
  root?: string
  topContent?: string
  badge?: string
  subtitle?: string
  authWrapper?: string
}

type TMobileIdClasses = {
  authWrapper?: TAuthWrapperClasses
  innerWrapper?: string
  textContent?: string
  mtsLogo?: string
  megafonLogo?: string
  beelineLogo?: string
  arrowIcon?: string
  badge?: string
  links?: TLinksClasses
}

type TEsiaClasses = {
  authWrapper?: TAuthWrapperClasses
  innerWrapper?: string
  textContent?: string
  esiaLogo?: string
  arrowIcon?: string
  badge?: string
  links?: TLinksClasses
}

export type TSingleAuthSchema = {
  mainLink: {
    title: string
    mobileTitle: string
    href: string
  }
  subLink?: {
    text: string
    href: string
  }
  classes?: TCombineClasses
  badge?: string
  loaderProps?: ILoaderProps
  isLoading?: boolean
}

type TCombineAuthSchema = {
  esiaConfig: Omit<TSingleAuthSchema, 'badge'> & Pick<TEsiaMode, 'classes'>
  mobileIdConfig: Omit<TSingleAuthSchema, 'badge'> & Pick<TMobileIdMode, 'classes'>
  subtitle?: string
  badge?: string
  classes?: TCombineClasses
}

type TEsiaMode = TSingleAuthSchema & { classes?: TEsiaClasses } & {
  mode: typeof AUTH_PROVIDER_MODE.ESIA
}

type TMobileIdMode = TSingleAuthSchema & { classes?: TMobileIdClasses } & {
  mode: typeof AUTH_PROVIDER_MODE.MOBILE_ID
}

type TCombineMode = TCombineAuthSchema & {
  mode: typeof AUTH_PROVIDER_MODE.COMBINE
}

export type TEsiaProps = Omit<TEsiaMode, 'mode'>
export type TMobileIdProps = Omit<TMobileIdMode, 'mode'>
export type TCombineProps = Omit<TCombineMode, 'mode'>

export type TAuthProviderProps = TCombineMode | TMobileIdMode | TEsiaMode
