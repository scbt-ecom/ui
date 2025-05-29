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

export type ProgressField = {
  progress: number
  maxPercent: number
}
