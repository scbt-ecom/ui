import { type AllowedIcons } from '$/shared/ui'

type ApprovementDisabled = {
  type: 'off'
}
type ApprovementCheckbox = {
  type: 'checkbox'
  content: string
}
type ApprovementText = {
  type: 'text'
  message: string
}
export type ApprovementType = 'off' | 'checkbox' | 'text'
export type Approvement<Type extends ApprovementType> = Type extends 'checkbox'
  ? ApprovementCheckbox
  : Type extends 'text'
    ? ApprovementText
    : ApprovementDisabled

type ChipsEnabled = {
  enabled: true
  content: string
  image?: AllowedIcons
}

type ChipsDisabled = {
  enabled: false
}

export type ChipsType = boolean

export type Chips<Type extends ChipsType> = Type extends true ? ChipsEnabled : ChipsDisabled

type ProgressEnabled = {
  enabled: true
  maxPercent: number
  title: string
  subtitle: string
}

type ProgressDisabled = {
  enabled: false
}

export type ProgressType = boolean

export type Progress<Type extends ProgressType> = Type extends true ? ProgressEnabled : ProgressDisabled

export type ProgressField = {
  progress: number
  maxPercent: number
}

type BaseAuth = {
  mainLink: {
    title: string
    mobileTitle: string
  }
  subLink?: {
    text: string
    href: string
  }
  badge?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type AuthMode = 'off' | 'esia' | 'mobileId' | 'combine'

type AuthDisabled = {
  mode: 'off'
}

type AuthEsia = BaseAuth & {
  mode: 'esia'
}

type AuthMobileId = BaseAuth & {
  mode: 'mobileId'
}

type AuthCombined = {
  mode: 'combine'
  esiaConfig: BaseAuth
  mobileIdConfig: BaseAuth
  subtitle?: string
  badge?: string
}

export type Auth<Mode extends AuthMode> = Mode extends 'off'
  ? AuthDisabled
  : Mode extends 'esia'
    ? AuthEsia
    : Mode extends 'mobileId'
      ? AuthMobileId
      : AuthCombined
