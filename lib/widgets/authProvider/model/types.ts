import type { AuthWrapperClasses, TLinksClasses } from '../ui/ui'
import { type AUTH_PROVIDER_MODE } from './helpers'
import type { LoaderProps } from '$/shared/ui'

export type CombineClasses = {
  root?: string
  topContent?: string
  badge?: string
  subtitle?: string
  authWrapper?: string
}

type MobileIdClasses = {
  authWrapper?: AuthWrapperClasses
  innerWrapper?: string
  textContent?: string
  mtsLogo?: string
  megafonLogo?: string
  beelineLogo?: string
  arrowIcon?: string
  badge?: string
  links?: TLinksClasses
}

type EsiaClasses = {
  authWrapper?: AuthWrapperClasses
  innerWrapper?: string
  textContent?: string
  esiaLogo?: string
  arrowIcon?: string
  badge?: string
  links?: TLinksClasses
}

export type SingleAuthSchema = {
  mainLink: {
    title: string
    mobileTitle: string
  }
  subLink?: {
    text: string
    href: string
  }
  classes?: CombineClasses
  badge?: string
  loaderProps?: LoaderProps
  isLoading?: boolean
}

type CombineAuthSchema = {
  esiaConfig: Omit<SingleAuthSchema, 'badge'> & Pick<EsiaMode, 'classes'>
  mobileIdConfig: Omit<SingleAuthSchema, 'badge'> & Pick<MobileIdMode, 'classes'>
  subtitle?: string
  badge?: string
  classes?: CombineClasses
}

type EsiaMode = SingleAuthSchema & { classes?: EsiaClasses } & {
  mode: typeof AUTH_PROVIDER_MODE.ESIA
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type MobileIdMode = SingleAuthSchema & { classes?: MobileIdClasses } & {
  mode: typeof AUTH_PROVIDER_MODE.MOBILE_ID
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type CombineMode = CombineAuthSchema & {
  mode: typeof AUTH_PROVIDER_MODE.COMBINE
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type TEsiaProps = Omit<EsiaMode, 'mode'>
export type TMobileIdProps = Omit<MobileIdMode, 'mode'>
export type TCombineProps = Omit<CombineMode, 'mode'>

export type AuthProviderProps = CombineMode | MobileIdMode | EsiaMode
