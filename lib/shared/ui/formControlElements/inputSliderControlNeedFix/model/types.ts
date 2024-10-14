export type TSliderVariants = 'years' | 'credit'

export type TInputSliderProps = {
  min: number
  max: number
  variant: TSliderVariants
  step?: number
  className?: string
  disabled?: boolean
  onInputChange?: (arg?: number) => void
}
