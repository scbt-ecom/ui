import { type AllowedIcons } from '$/shared/ui'

type ApprovementDisabled = {
  type: false
}

type ApprovementCheckbox = {
  type: 'checkbox'
  content: React.ReactElement
}

type ApprovementText = {
  type: 'text'
  message: React.ReactElement
}

export type ApprovementType = false | 'checkbox' | 'text'

export type Approvement<Type extends ApprovementType> = Type extends 'checkbox'
  ? ApprovementCheckbox
  : Type extends 'text'
    ? ApprovementText
    : ApprovementDisabled

type ChipsEnabled = {
  enabled: true
  content: string
  image: AllowedIcons
}

type ChipsDisabled = {
  enabled: false
}

export type ChipsType = boolean

export type Chips<Type extends ChipsType> = Type extends true ? ChipsEnabled : ChipsDisabled
