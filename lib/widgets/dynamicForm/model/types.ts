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
